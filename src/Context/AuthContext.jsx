import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

// Custom Hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [id, setId] = useState(null);
  const [email, setEmail] = useState("admin@soakify.in");
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ id, setId, email, setEmail, authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};