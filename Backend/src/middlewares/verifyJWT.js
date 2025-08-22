import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";


const verifyJWT = (req, res, next) => {
    // Get token from cookie or Authorization header
    let token = req.cookies?.accessToken;
    
    if (!token && req.headers.authorization?.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return next(new ApiError(401, "Not authenticated"));
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded; // attach user info to request
        next();
    } catch (err) {
        return next(new ApiError(401, "Invalid token"));
    }
};

export { verifyJWT };
