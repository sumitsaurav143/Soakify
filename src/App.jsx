import './App.css';
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AdminLogin } from './Components/Admin/AdminLogin';
import { Homepage } from './Components/Homepage';
import { AppProvider } from './Context/AppContext';
import { AuthProvider, useAuth } from './Context/AuthContext';
import { NotFound } from './Components/NotFound';
import { OtpLogin } from './Components/Auth/OtpLogin';
import { AdminDashboard } from './Components/Admin/AdminDashboard';

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Homepage />} />
            
            <Route path="/admin" element={<AdminLogin />}>
              <Route path="tfa" element={<OtpLogin />} />
              <Route path="dashboard" element={<ProtectedRoute component={<AdminDashboard />} />} />
            </Route>

            {/* Wildcard route for unmatched paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </AppProvider>
  );
}

// Protected Route Component to check authentication
const ProtectedRoute = ({ component }) => {
  const { authenticated } = useAuth();

  return authenticated ? component : <Navigate to="/home" />;
};

export default App;