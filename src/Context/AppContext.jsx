import React, { createContext, useReducer } from 'react';

export const AppContext = createContext();

const userState = {
    user: null,
    theme: 'dark',
    cart: []
}

const appReducer = (state, action) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload };
      case 'TOGGLE_THEME':
        return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
      case 'ADD_TO_CART':
        return { ...state, cart: [...state.cart, action.payload] };
      case 'REMOVE_FROM_CART':
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) };
      default:
        return state;
    }
  };
  
  export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, userState);
  
    return (
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    );
  };
