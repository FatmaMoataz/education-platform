import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/store";
import Layout from "./components/Layout/Layout";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Root route: Redirect to /signup if no token, else /home */}
          <Route
            path="/"
            element={
              token ? <Navigate to="/home" replace /> : <Navigate to="/signup" replace />
            }
          />

          {/* Public routes (no token required) */}
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Protected route (requires token) */}
          <Route
            path="/home"
            element={token ? <Layout /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;