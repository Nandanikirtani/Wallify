import { Router } from "express";
import { registerUser,loginUser,logoutUser,refreshAccessToken,getUserProfile,updateUserProfile } from "../controllers/User.controller.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";


const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(logoutUser)
router.route("/refresh-token").post( refreshAccessToken);
router.route("/profile").get(verifyJWT, getUserProfile);
router.put("/profile", verifyJWT, updateUserProfile); // Uncomment if you have a profile route    



export default router
