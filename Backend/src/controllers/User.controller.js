import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/User.model.js";
import jwt from "jsonwebtoken";

// ---------------- REGISTER USER ----------------
const registerUser = asyncHandler(async (req, res) => {
  const { username, fullName, email, password } = req.body;

  // Validation
  if (![username, fullName, email, password].every(f => f && typeof f === "string" && f.trim() !== "")) {
    throw new ApiError(400, "All fields are required: username, fullName, email, password");
  }

  if (!email.includes("@") || email.startsWith("@") || email.endsWith("@")) {
    throw new ApiError(400, "Enter a valid email");
  }

  // Check if user exists
  const existedUser = await User.findOne({ email });
  if (existedUser) throw new ApiError(400, "User already exists");

  // Create user
  const user = await User.create({ username, fullName, email, password });
  const createdUser = await User.findById(user._id).select("-password -refreshToken");

  return res.status(201).json({
    success: true,
    data: createdUser,
    message: "User registered successfully",
  });
});

// ---------------- HELPER: Generate Access & Refresh Tokens ----------------
const generateTokens = async (user) => {
  const accessToken = jwt.sign(
    { _id: user._id, email: user.email, username: user.username },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );

  const refreshToken = jwt.sign(
    { _id: user._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
};

// ---------------- LOGIN USER ----------------
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) throw new ApiError(400, "Email and password are required");

  const user = await User.findOne({ email });
  if (!user) throw new ApiError(404, "User not found");

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) throw new ApiError(401, "Invalid password");

  const { accessToken, refreshToken } = await generateTokens(user);
  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

  const cookieOptions = { httpOnly: true, secure: true };
  return res
    .status(200)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .cookie("accessToken", accessToken, cookieOptions)
    .json({
      success: true,
      data: loggedInUser,
      accessToken,
      refreshToken,
      message: "User logged in successfully",
    });
});

// ---------------- LOGOUT USER ----------------
const logoutUser = asyncHandler(async (req, res) => {
  if (req.user) {
    await User.findByIdAndUpdate(req.user._id, { refreshToken: null });
  }

  const cookieOptions = { httpOnly: true, secure: true };
  return res
    .status(200)
    .cookie("refreshToken", null, cookieOptions)
    .cookie("accessToken", null, cookieOptions)
    .json({ success: true, data: null, message: "User logged out successfully" });
});

// ---------------- REFRESH ACCESS TOKEN ----------------
const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;
  if (!incomingRefreshToken) throw new ApiError(401, "Refresh token is required");

  try {
    const decoded = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findById(decoded._id);
    if (!user) throw new ApiError(404, "User not found");

    if (user.refreshToken !== incomingRefreshToken) throw new ApiError(401, "Invalid refresh token");

    const { accessToken, refreshToken } = await generateTokens(user);
    const cookieOptions = { httpOnly: true, secure: true };

    return res
      .status(200)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .cookie("accessToken", accessToken, cookieOptions)
      .json({
        success: true,
        data: null,
        accessToken,
        refreshToken,
        message: "Access token refreshed successfully",
      });
  } catch (err) {
    throw new ApiError(500, "Failed to refresh access token");
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select("-password -refreshToken");
    if (!user) throw new ApiError(404, "User not found");

    res.status(200).json({
        success: true,
        data: user,
        message: "User profile fetched successfully"
    });
});

const updateUserProfile = asyncHandler(async (req,res)=>{
   const { fullName, username, email, password } = req.body;
    const user= await User.findById(req.user._id);
    if(!user) throw new ApiError(404,"User not found");
    user.fullName = fullName || user.fullName;
    user.username = username || user.username;
    user.email = email || user.email;
    if(password){
        user.password = password;
    }
    await user.save();

    res.status(200).json({
        success: true,
        data: user,
        message: "User profile updated successfully"
    });
})


export { registerUser, loginUser,getUserProfile, logoutUser, refreshAccessToken, updateUserProfile };
