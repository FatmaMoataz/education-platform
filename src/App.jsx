import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion } from "motion/react";
import Layout from "./components/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "./state/store";

function App() {
  return (
    <>
      <motion.div animate={{ x: 50 }} class="text-3xl font-bold underline">
        <Provider store={store}>
          <Layout />
        </Provider>
      </motion.div>
    </>
  );
}

export default App;
