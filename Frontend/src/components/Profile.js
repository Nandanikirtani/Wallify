import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
          createdAt: new Date(data.createdAt).toLocaleString()
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
      className="container mt-5 pt-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        My Profile
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="mb-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <label className="form-label">Username</label>
          <input
            name="username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
            disabled={!editMode}
          />
        </motion.div>

        <motion.div
          className="mb-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <label className="form-label">Full Name</label>
          <input
            name="fullName"
            className="form-control"
            value={formData.fullName}
            onChange={handleChange}
            disabled={!editMode}
          />
        </motion.div>

        <motion.div
          className="mb-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <label className="form-label">Email</label>
          <input
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            disabled={!editMode}
          />
        </motion.div>

        <motion.div
          className="mb-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <label className="form-label">Joined On</label>
          <input className="form-control" value={formData.createdAt} disabled />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {editMode && (
            <motion.button
              type="submit"
              className="btn btn-success me-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Save
            </motion.button>
          )}

          <motion.button
            type="button"
            className="btn btn-primary me-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? "Cancel" : "Edit Profile"}
          </motion.button>

          <motion.button
            type="button"
            className="btn btn-danger"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
          >
            Logout
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default Profile;
