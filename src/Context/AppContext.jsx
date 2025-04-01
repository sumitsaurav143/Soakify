import React, { createContext, useReducer, useState, useEffect } from "react";

export const AppContext = createContext();

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return isMobile ? "Mobile" : "Desktop";
};

const initialState = {
  user: null,
  theme: "dark",
  cart: [],
  device: "Desktop",
  appOpener: 1
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload.id) };
    case "SET_DEVICE_TYPE":
      return { ...state, device: action.payload };
    case "SET_APP_OPENER":
        return { ...state, appOpener: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const deviceType = useDeviceType();

  useEffect(() => {
    dispatch({ type: "SET_DEVICE_TYPE", payload: deviceType });
  }, [deviceType]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
