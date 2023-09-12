// DataContext.js
import React, { createContext, useReducer } from "react";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return [...state, action.payload];
    default:
      return state;
  }
};

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  const handleFormSubmit = (formData) => {
    dispatch({ type: "ADD_DATA", payload: formData });
  };

  return (
    <DataContext.Provider value={{ data, handleFormSubmit }}>
      {children}
    </DataContext.Provider>
  );
};
