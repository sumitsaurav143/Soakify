import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";
import API_ENDPOINTS from "../../api"

export const OtpLogin = () => {
 // const [email, setEmail] = useState(props.email);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("2FA Otp is required to complete login");
  const [messageStyle, setMessageStyle] = useState(styles.messageInfo);

  const { id, setId, email, setEmail, authenticated, setAuthenticated } = useAuth();

  const sendOtp = async () => {
    try {
      await axios.post(API_ENDPOINTS.GENERATE_OTP, { email });
      setOtpSent(true);
      setMessage("OTP sent to your email.");
    } catch (error) {
      setMessage("Failed to send OTP. Try again.");
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post(API_ENDPOINTS.VERIFY_OTP, { email, otp });
      setMessageStyle(styles.messageSuccess);
      setMessage("Verifying...");
      setTimeout(()=> {setAuthenticated(true)},1500);
    } catch (error) {
      setMessageStyle(styles.messageError);
      setMessage("Invalid OTP. Please try again.");
      
    }
  };

  return (
    <div style={styles.container}>
      
      <p style={messageStyle}>{message}</p>
      {!otpSent ? (
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            disabled
          />
          <button onClick={sendOtp} style={styles.button}>Send OTP</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={styles.input}
          />
          <button onClick={verifyOtp} style={styles.button}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "50px" },
  input: { padding: "10px", margin: "10px", width: "250px", fontSize: "20px" },
  button: { padding: "10px 20px", cursor: "pointer", margin: "15px" },
   // Info Message (Blue)
   messageInfo: {
    color: "#1976d2", 
    background: "rgba(25, 118, 210, 0.1)", 
    padding: "10px",
    borderLeft: "4px solid #1976d2", 
    borderRadius: "5px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  // Success Message (Green)
  messageSuccess: {
    color: "#388e3c", 
    background: "rgba(56, 142, 60, 0.1)", 
    padding: "10px",
    borderLeft: "4px solid #388e3c", 
    borderRadius: "5px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  // Error Message (Red)
  messageError: {
    color: "#d32f2f", 
    background: "rgba(211, 47, 47, 0.1)", 
    padding: "10px",
    borderLeft: "4px solid #d32f2f", 
    borderRadius: "5px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  messageIcon: {
    fontSize: "1.2rem",
    marginRight: "8px",
  }
};