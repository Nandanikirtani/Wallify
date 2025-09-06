import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import UserContext from "../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext); // assuming you store logged-in user here
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return; // wait for user to load

    const fetchDashboard = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/dashboard/${user._id}`,
          { withCredentials: true }
        );
        setDashboard(res.data);
      } catch (err) {
        console.error("Failed to fetch dashboard", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [user]);

  if (loading) return <p className="text-center">Loading dashboard...</p>;

  if (!dashboard) return <p className="text-center">No data available</p>;

  return (
    <motion.div
      className="container mt-5 pt-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Welcome back, {dashboard.userName}!</h2>
      <p>Here’s your financial overview for today:</p>

      {/* Summary cards */}
      <div className="row">
        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <h6>Total Balance</h6>
            <h3>${dashboard.totalBalance.toFixed(2)}</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <h6>Monthly Income</h6>
            <h3>${dashboard.monthlyIncome.toFixed(2)}</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <h6>Monthly Expenses</h6>
            <h3>${dashboard.monthlyExpenses.toFixed(2)}</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <h6>Savings Goal</h6>
            <h3>${dashboard.savingsGoal.toFixed(2)}</h3>
          </div>
        </div>
      </div>

      {/* Spending by Category */}
      <div className="mt-4">
        <h5>Spending by Category</h5>
        <ul>
          {dashboard.spendingByCategory.map((item, index) => (
            <li key={index}>
              {item.category}: ${item.amount}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Dashboard;
