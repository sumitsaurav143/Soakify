import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import API_ENDPOINTS from '../../api';
import axios from 'axios';
import { FiEdit, FiSun, FiMoon } from "react-icons/fi";
import './AdminDashboard.css'
import {  useNavigate } from 'react-router-dom';
export const AdminDashboard = () => {

  const navigate = useNavigate();

  const [adminDetail, setAdminDetail] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const {  id, setId, email, setEmail, authenticated, setAuthenticated } = useAuth();

  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINTS.ADMIN_DETAIL}/${id}`);
        setAdminDetail(response.data);
      } catch (error) {
        console.error("Failed to fetch admin details:", error);
      }
    };

    if (id) {
      fetchAdminDetails();
    }
  }, [id]);

  const logOutAdmin=()=>{
    setId(null);
    setEmail(null);
    setAuthenticated(false);
    navigate('/admin');
  }

  if (!adminDetail) {
    return <div className="text-center text-gray-600 mt-10">Loading admin details...</div>;
  }

  return (
    <div className={`dashboard ${darkMode ? "dark-mode" : ""}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Settings</li>
          <li>Users</li>
          <li onClick={()=>logOutAdmin()}>LogOut</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <h2>Admin Dashboard</h2>
          <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </header>

        {/* Admin Details Section */}
        <div className="admin-info">
          {Object.entries(adminDetail).map(([key, value]) => (
            <div key={key} className="admin-card">
              <div className="card-content">
                <span className="label">{key.replace(/([A-Z])/g, " $1")}</span>
                <p className="value">
                  {Array.isArray(value) ? value.join(", ") : value.toString()}
                </p>
              </div>
              <button className="edit-btn">
                <FiEdit size={16} />
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
  
};
