// models/Budget.js
import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // link to logged-in user
  income: { type: Number, required: true },
  expenses: { type: Number, required: true },
  savingsGoal: { type: Number, required: true },
  spendingByCategory: [
    {
      category: String,
      amount: Number
    }
  ]
}, { timestamps: true });

export default mongoose.model("Budget", budgetSchema);
