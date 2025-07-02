import React from "react";

function UseInitialStates() {
  const initialStateAuth = {
    loadingAuth: false,
    authMessage: "",
    error: "",
    token: localStorage.getItem("token"),
  };
  return { initialStateAuth };
}

export default UseInitialStates;
