import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Pie, Bar } from "react-chartjs-2";
import { FaPlus, FaWallet, FaBullseye, FaRegCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement
);

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?._id) return;

    const fetchDashboard = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/v1/dashboard/${user._id}`,
          { withCredentials: true }
        );
        setDashboard(res.data || null);
      } catch (err) {
        console.error("❌ Failed to fetch dashboard", err);
        setError(err.response?.data?.message || "Failed to fetch dashboard");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [user]);

  if (loading) return <p className="text-center mt-5">Loading dashboard...</p>;
  if (error) return <p className="text-center mt-5 text-danger">{error}</p>;

  // Check if user has no budget yet
  const isNewUser =
    !dashboard ||
    Object.keys(dashboard).length === 0 ||
    !dashboard.spendingByCategory ||
    dashboard.spendingByCategory.length === 0;

  const quickActions = [
    { icon: <FaPlus />, text: "Add Income", color: "btn-primary" },
    { icon: <FaWallet />, text: "Add Expense", color: "btn-success" },
    { icon: <FaRegCalendarAlt />, text: "Set Reminder", color: "btn-warning text-dark" },
    { icon: <FaBullseye />, text: "Set Goal", color: "btn-danger" },
  ];

  // ✅ Always show Welcome + user name
  const userName = dashboard?.userName || user?.fullName || "User";

  if (isNewUser) {
    return (
      <motion.div
        className="container mt-5 pt-5 mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center">Welcome, {userName}!</h2>
        <p className="text-center">
          Looks like you’re new. Start with these quick actions:
        </p>

        {/* Quick Actions only */}
        <div className="row justify-content-center mt-4">
          <div className="col-md-6">
            <motion.div className="card p-4 shadow text-center">
              <h5>Quick Actions</h5>
              <div className="row g-3 mt-3">
                {quickActions.map((btn, idx) => (
                  <div className="col-6" key={idx}>
                    <motion.button
                      className={`btn w-100 p-4 d-flex flex-column align-items-center justify-content-center ${btn.color} shadow`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate("/budget")}
                    >
                      {btn.icon}
                      <span className="mt-2">{btn.text}</span>
                    </motion.button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }

  // 🔹 Existing user → full dashboard
  const {
    totalBalance,
    monthlyIncome,
    monthlyExpenses,
    savingsGoal,
    spendingByCategory,
  } = dashboard;

  const categories = spendingByCategory.map((item) => item.category);
  const amounts = spendingByCategory.map((item) => item.amount);

  const themeColors = ["#0d6efd", "#198754", "#ffc107", "#dc3545", "#6f42c1"];

  const pieData = {
    labels: categories,
    datasets: [
      {
        data: amounts,
        backgroundColor: themeColors.slice(0, categories.length),
        hoverBackgroundColor: themeColors.slice(0, categories.length),
        cutout: "60%",
      },
    ],
  };

  const barData = {
    labels: categories,
    datasets: [
      {
        label: "Expenses",
        data: amounts,
        backgroundColor: "#0d6efd",
      },
    ],
  };

  return (
    <motion.div
      className="container mt-5 mb-5 pt-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-center">Welcome back, {userName}!</h2>
      <p className="text-center">Here’s your financial overview</p>

      {/* Summary Cards */}
      <div className="row mt-4">
        {[
          { title: "Total Balance", value: totalBalance, color: "bg-primary text-white" },
          { title: "Monthly Income", value: monthlyIncome, color: "bg-success text-white" },
          { title: "Monthly Expenses", value: monthlyExpenses, color: "bg-danger text-white" },
          { title: "Savings Goal", value: savingsGoal, color: "bg-warning text-dark" },
        ].map((item, idx) => (
          <div className="col-md-3 mb-3" key={idx}>
            <motion.div
              className={`card p-3 shadow ${item.color} text-center`}
              whileHover={{ scale: 1.05 }}
            >
              <h6>{item.title}</h6>
              <h3>${item.value?.toFixed(2)}</h3>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="row mt-5 justify-content-center align-items-stretch text-center">
        <div className="col-md-4 mb-3 d-flex justify-content-center">
          <motion.div className="card p-3 shadow w-100" style={{ maxWidth: "350px" }}>
            <h5>Spending by Category</h5>
            <div style={{ height: "300px" }}>
              <Pie data={pieData} />
            </div>
          </motion.div>
        </div>
        <div className="col-md-4 mb-3 d-flex justify-content-center">
          <motion.div className="card p-3 shadow w-100" style={{ maxWidth: "350px" }}>
            <h5>Expenses Overview</h5>
            <div style={{ height: "300px" }}>
              <Bar data={barData} />
            </div>
          </motion.div>
        </div>
        <div className="col-md-4">
          <motion.div className="card p-4 shadow text-center" >
            <h5>Quick Actions</h5>
            <div className="row g-3 mt-3">
              {quickActions.map((btn, idx) => (
                <div className="col-6" key={idx}>
                  <motion.button
                    className={`btn w-100 p-4 d-flex flex-column align-items-center justify-content-center ${btn.color} shadow`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/budget")}
                  >
                    {btn.icon}
                    <span className="mt-2">{btn.text}</span>
                  </motion.button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ✅ Quick Actions also for existing users */}
      <div className="row justify-content-center mt-4">
        
      </div>
    </motion.div>
  );
};

export default Dashboard;
