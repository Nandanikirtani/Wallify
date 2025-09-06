import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaCalendarAlt, FaUserEdit, FaSignOutAlt, FaQuestionCircle } from "react-icons/fa";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    createdAt: ""
  });
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/v1/user/profile",
          { withCredentials: true }
        );
        const data = res.data.data;
        setFormData({
          username: data.username,
          fullName: data.fullName,
          email: data.email,
          createdAt: new Date(data.createdAt).toLocaleDateString()
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        "http://localhost:5000/api/v1/user/profile",
        {
          username: formData.username,
          fullName: formData.fullName,
          email: formData.email
        },
        { withCredentials: true }
      );
      setUser(res.data.data);
      localStorage.setItem("user", JSON.stringify(res.data.data));
      setEditMode(false);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Update failed!");
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/v1/user/logout",
        {},
        { withCredentials: true }
      );
      localStorage.removeItem("user");
      setUser(null);
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <motion.div
  className="container mt-5 pt-5 d-flex justify-content-center"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <motion.div
    className="card shadow-lg p-5 rounded-4 w-100"
    style={{ maxWidth: "900px" }}  // 🔹 Bigger card
    initial={{ scale: 0.95 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.4 }}
  >
    {/* Avatar */}
    <div className="text-center mb-4">
      <img
        src={`https://ui-avatars.com/api/?name=${formData.fullName}&background=random&size=120`}
        alt="User Avatar"
        className="rounded-circle shadow"
        style={{ width: "120px", height: "120px", objectFit: "cover" }}
      />
      <h3 className="mt-3 fw-bold">{formData.fullName}</h3>
      <p className="text-muted">@{formData.username}</p>
    </div>

    {/* Profile Info */}
    <div className="row text-start mb-4">
      <div className="col-md-6 mb-3">
        <FaEnvelope className="me-2 text-danger" />
        <strong>Email:</strong> {formData.email}
      </div>
      <div className="col-md-6 mb-3">
        <FaCalendarAlt className="me-2 text-warning" />
        <strong>Joined On:</strong> {formData.createdAt}
      </div>
    </div>

    {/* Extra Section: Account Settings */}
    <div className="border-top pt-3">
      <h5 className="fw-bold mb-3">⚙️ Account Settings</h5>
      <p className="text-muted">Manage your profile preferences, privacy, and security options here.</p>
    </div>

    {/* Action Buttons */}
    <div className="text-center mt-4">
      <motion.button
        type="button"
        className="btn btn-primary me-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setEditMode(true)}
      >
        Edit Profile
      </motion.button>
      <motion.button
        type="button"
        className="btn btn-danger me-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLogout}
      >
        <FaSignOutAlt className="me-1" /> Logout
      </motion.button>
      <motion.button
        type="button"
        className="btn btn-outline-secondary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaQuestionCircle className="me-1" /> Need Help?
      </motion.button>
    </div>
  </motion.div>
</motion.div>

  );
};

export default Profile;
