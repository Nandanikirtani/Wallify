// controllers/budgetController.js
import Budget from "../models/Budget.model.js";
import { User } from "../models/User.model.js";

// Save or update budget info
export const saveOrUpdateBudget = async (req, res) => {
  try {
    const { userId, income, expenses, savingsGoal, spendingByCategory } = req.body;

    // Check if budget already exists for this user
    let budget = await Budget.findOne({ userId });

    if (budget) {
      // Update existing budget
      budget.income = income;
      budget.expenses = expenses;
      budget.savingsGoal = savingsGoal;
      budget.spendingByCategory = spendingByCategory;
      await budget.save();
    } else {
      // Create a new budget
      budget = new Budget({
        userId,
        income,
        expenses,
        savingsGoal,
        spendingByCategory,
      });
      await budget.save();
    }

    res.status(200).json(budget);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get dashboard summary by userId
// Get dashboard summary by userId
export const getDashboard = async (req, res) => {
  try {
    const { userId } = req.params;

    // Get the budget for this user
    const budget = await Budget.findOne({ userId });

    // Get user details
    const user = await User.findById(userId).select("fullName email");

    // If user does not exist
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!budget) {
      // New user → send empty dashboard instead of 404
      return res.status(200).json({
        userName: user.fullName,
        email: user.email,
        totalBalance: 0,
        monthlyIncome: 0,
        monthlyExpenses: 0,
        savingsGoal: 0,
        spendingByCategory: [],
      });
    }

    const summary = {
      userName: user.fullName,
      email: user.email,
      totalBalance: budget.income - budget.expenses,
      monthlyIncome: budget.income,
      monthlyExpenses: budget.expenses,
      savingsGoal: budget.savingsGoal,
      spendingByCategory: budget.spendingByCategory,
    };

    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
