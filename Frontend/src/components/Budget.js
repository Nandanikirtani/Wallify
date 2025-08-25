import React from "react";
import { useState,useContext } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Link,useLocation } from "react-router-dom";
import UserContext from "../context/UserContext";

export default function Budget(props) {
  const location = useLocation();
  const textColor = props.mode === "dark" ? "#fffbeb" : "black";
  const cardColor = "#a47148"; // Same for both modes
  const butColor = props.mode === "light" ? "white" : "black";
  const labelColor = props.mode === "light" ? "#acacf1ff" : "#006d77";

 const { user } = useContext(UserContext); // <-- get user from context
  const isLoggedIn = !!user;



  const [income, setIncome] = useState();
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    amount: "",
    category: "",
    description: "",
    date: "",
  });

  // Handle input change
  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add expense
  const addExpense = (e) => {
    e.preventDefault();
    if (!form.amount || !form.category) return;
    setExpenses([...expenses, form]);
    setForm({ amount: "", category: "", description: "", date: "" });
  };

  // Calculate totals
  const totalExpenses = expenses.reduce(
    (sum, exp) => sum + Number(exp.amount),
    0
  );
  const savings = income - totalExpenses;

  const COLORS = [
  "#4E79A7", // Blue
  "#F28E2B", // Orange
  "#E15759", // Red
  "#76B7B2", // Teal
  "#59A14F", // Green
  "#EDC949", // Yellow
  "#B07AA1"  // Purple
];


  const chartData = expenses.reduce((acc, exp) => {
    const found = acc.find((item) => item.name === exp.category);
    if (found) {
      found.value += Number(exp.amount);
    } else {
      acc.push({ name: exp.category, value: Number(exp.amount) });
    }
    return acc;
  }, []);

  chartData.push({
  name: "Savings",
  value: savings > 0 ? savings : 0
});

  return (
    <>
      <div className="container mt-0">
        <div className="row align-items-center">
          {/* Left Column: Accordion */}
          <div className="col-md-6">
            <div
              className="mb-4"
              style={{ color: textColor, marginTop: "120px" }}
            >
              <h1>How it works?</h1>
            </div>
            <div className="accordion" id="accordionExample">
              {/* Accordion 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{ backgroundColor: cardColor, color: butColor }}
                  >
                    Create a Budget
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                >
                  <div className="accordion-body">
                    Input your income and divide across categories like rent,
                    food, travel, and savings.
                  </div>
                </div>
              </div>

              {/* Accordion 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style={{ backgroundColor: cardColor, color: butColor }}
                  >
                    Track Expenses
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingTwo"
                >
                  <div className="accordion-body">
                    Log your daily expenses and compare with your monthly budget
                    using visual graphs.
                  </div>
                </div>
              </div>

              {/* Accordion 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{ backgroundColor: cardColor, color: butColor }}
                  >
                    Monitor Investments
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingThree"
                >
                  <div className="accordion-body">
                    Track SIPs, mutual funds, and stocks to monitor portfolio
                    growth in real time.
                  </div>
                </div>
              </div>

              {/* Accordion 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                    style={{ backgroundColor: cardColor, color: butColor }}
                  >
                    Learn & Grow
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingFour"
                >
                  <div className="accordion-body">
                    Access lessons on budgeting, saving, and investing tailored
                    to your level.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-md-6 text-center">
            <img
              src={`${process.env.PUBLIC_URL}/Budget.png`}
              className="img-fluid"
              alt="Budget illustration"
              style={{
                maxWidth: "100%", // ensures responsiveness
                height: "auto", // maintains aspect ratio
                marginTop: "3rem", // use rem instead of px for responsiveness
              }}
            />
          </div>
        </div>
      </div>
      {/*Budget tracker form */}

      <div className=" ">
        <div className="row align-items-center">
          <div>
            <h2 className="text-center mt-5" style={{ color: textColor }}>
              Wallify your wallet – log your expense below!
            </h2>
          </div>

          <div className="justify-content-center mt-4">
            <div className="row justify-content-center">
              {/* Expense Form */}
              <div
                className="col-md-3 m-4 border rounded-3 p-4 mb-4"
                style={{ backgroundColor: labelColor }}
              >
                <h4>New Expense</h4>
                <form onSubmit={addExpense}>
                  <div className="mb-3">
                    <label className="form-label">Amount *</label>
                    <input
                      type="number"
                      name="amount"
                      value={form.amount}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="$0.00"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Category *</label>
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select a category</option>
                      <option>Housing</option>
                      <option>Food</option>
                      <option>Transport</option>
                      <option>Bills</option>
                      <option>Loans</option>
                      <option>Entertainment</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      className="form-control"
                      rows="2"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary me-2">
                    Add Expense
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() =>
                      setForm({
                        amount: "",
                        category: "",
                        description: "",
                        date: "",
                      })
                    }
                  >
                    Clear
                  </button>
                </form>
              </div>

              {/* Monthly Budget */}
              <div
                className="col-md-3 m-4 border rounded-3 p-4 mb-4"
                style={{ backgroundColor: labelColor }}
              >
                <h4>Monthly Budget</h4>

                {/* Add income */}
                <div className="mb-3">
                  <label className="form-label">Monthly Income</label>
                  <input
                    type="number"
                    className="form-control"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    placeholder="Enter income"
                  />
                </div>

                {/* Show expenses */}
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenses.map((exp, index) => (
                      <tr key={index}>
                        <td>{exp.category}</td>
                        <td>${exp.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Totals */}
                <p>
                  <strong>Total Expenses:</strong> ${totalExpenses}
                </p>
                <p>
                  <strong>Savings:</strong> ${savings}
                </p>
              </div>

              {/* Dummy Chart */}
              <div className="col-md-3 m-4 border border-black rounded-3 p-4 mb-4 text-center">
                <h4
                  className="p-2 w-100 text-center"
                  style={{ backgroundColor: labelColor }}
                >
                  Spending Report
                </h4>

                <div style={{ position: "relative", marginTop: "50px" }}>
                  <div
                    style={{
                      height: "200px",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={chartData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          label
                        >
                          {chartData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {!isLoggedIn && (
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center rounded-3"
                      style={{
                        backdropFilter: "blur(4px)",
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      <p className="text-muted mb-2">
                        Unlock full report by logging in
                      </p>
                      <Link
                        className="text-black text-decoration-underline"
                        to="/login"
                        state={{ from: location.pathname }}
                      >
                        Login here
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
