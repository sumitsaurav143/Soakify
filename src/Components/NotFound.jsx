import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.text}>Oops! The page you are looking for does not exist.</p>
      <Link to="/home" style={styles.link}>Go Back Home</Link>
    </div>
  );
};
  const styles = {
    container: {
      textAlign: "center",
      width:"100vw",
      height:"100vh"
    },
    heading: {
      fontSize: "72px",
      color: "#0288d1",
      marginBottom: "10px",
    },
    text: {
      fontSize: "18px",
      color: "#555",
    },
    link: {
      display: "inline-block",
      marginTop: "20px",
      fontSize: "16px",
      color: "#0288d1",
      textDecoration: "none",
      border: "1px solid #0288d1",
      padding: "10px 20px",
      borderRadius: "5px",
    },
  };
  
