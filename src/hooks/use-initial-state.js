import React from "react";

function UseInitialStates() {
  const initialStateAuth = {
    loadingAuth: false,
    authMessage: "",
    error: "",
    token: localStorage.getItem("token") || "",
  };

  const initialStateLesson = {
    loadingAddLessson: false,
    loadingGetLessonsAdmin: false,
    loadingUpdateLesson: false,
    loadingGetPurchased: false,
    loadingGetLessons: false,
    loadingGetLesson: false,
    loadingDeleteLesson: false,
    loadingpayLesson: false,
    lessonMessage: "",
    paymentUrl: "",
    allLessons: [],
    lessons: [],

    purchasedLessons: [],
    specificLesson: {},
  };

  return { initialStateAuth, initialStateLesson };
}

export default UseInitialStates;
