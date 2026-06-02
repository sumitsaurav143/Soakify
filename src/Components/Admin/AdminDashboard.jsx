import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import API_ENDPOINTS from '../../api';
import axios from 'axios';
import { FiEdit, FiSun, FiMoon } from "react-icons/fi";
import './AdminDashboard.css'
import Header from '../Header'
import { useNavigate } from 'react-router-dom';
export const AdminDashboard = () => {

  const navigate = useNavigate();

  const [adminDetail, setAdminDetail] = useState(null);
  const [menu, setMenu] = useState(1);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { id, setId, email, setEmail, authenticated, setAuthenticated } = useAuth();

  const testUser = {
    id: -1,
    email: "testuser@example.com",
    firstName: "Test",
    lastName: "User",
    phoneNumber: "9876543210",
    accountLocked: false,
    twoFactorEnabled: false,
    permissions: ["RESTRICTED"],
    role: ["TEST_ADMIN"]
  };

  useEffect(() => {
    const fetchAdminDetails = async () => {
      //testing mode
      console.log("testing--", id);
      if (id === -1) {
        setAdminDetail(testUser)
      } else {

        try {
          const response = await axios.get(`${API_ENDPOINTS.ADMIN_DETAIL}/${id}`);
          setAdminDetail(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Failed to fetch admin details:", error);
        }
      }
    };
    console.log("testing--adminDetail--", adminDetail,id);
    if (id) {
      fetchAdminDetails();
    }
  }, [id,authenticated]);



  const handleMenu = (menuNumber) => {
    setLoading(true);
    setTimeout(() => {
      setMenu(menuNumber);
      setLoading(false);
    }, 2000);
  };

  const logOutAdmin = () => {
    setLoading(true);
    setTimeout(() => {
      setMenu(0);
      setId(null);
      setEmail(null);
      setAuthenticated(false);
      navigate('/admin');
    }, 2000);
  }

  if (!adminDetail) {
    return <div className="text-center text-gray-600 mt-10">Loading admin details...</div>;
  }

  const renderMenuContent = () => {
    if (loading) {
      return <div className='spinner-panel'>
        <div className="spinner"></div>
      </div>;
    }
    switch (menu) {
      case 1:
        return (
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
        );
      case 2:
        return <div className="admin-info">Admin Settings</div>;
      case 3:
        return <div className="admin-info">Users</div>;
      case 4:
        return <div className="admin-info">Admins</div>;
      default:
        return null;
    }
  };

  return (
    <div className={`dashboard ${darkMode ? "dark-mode" : ""}`}>
      <Header />
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li onClick={() => handleMenu(1)}>My Dashboard</li>
          <li onClick={() => handleMenu(2)}>My Settings</li>
          <li onClick={() => handleMenu(3)}>All Users</li>
          <li onClick={() => handleMenu(4)}>Admins</li>
          <li onClick={() => logOutAdmin()}>LogOut</li>
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

        {renderMenuContent()}

      </main>
    </div>
  );

};
