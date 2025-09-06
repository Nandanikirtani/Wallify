// Backend/src/routes/Budget.routes.js
import { saveOrUpdateBudget, getDashboard } from "../controllers/Budget.controller.js";

import express from "express";
const router = express.Router();

// Save or update budget
router.post("/budget", saveOrUpdateBudget);

// Get dashboard summary
router.get("/dashboard/:userId", getDashboard);

export default router;
