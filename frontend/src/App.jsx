import "./App.css";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/homePage.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import LoginPage from "./pages/loginPage/loginPage.jsx";
import CreateUserPage from "./pages/createUsePage/createUserPage.jsx";
import ForgotPasswordPage from "./pages/forgotPasswordPage/forgotPasswordPage.jsx";
import AdminHomePage from "./pages/adminHomePage/adminHomePage.jsx";
import EditBookPage from "./pages/editBookPage/editBookPage.jsx";
function App() {
  const [isLoggedin, setisLoggedin] = useState(true);
  const [isAdmin, setisAdmin] = useState(true);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar login={isLoggedin} setLogin={setisLoggedin} />
              {isAdmin && isLoggedin ? <AdminHomePage /> : <HomePage />}
            </>
          }
        />
        <Route
          path="/edit/:id"
          element={
            isAdmin && isLoggedin ? (
              <>
                <NavBar login={isLoggedin} setLogin={setisLoggedin} />
                <EditBookPage />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Login"
          element={
            <>
              <NavBar login={"hide"} />
              <LoginPage login={setisLoggedin} admin={setisAdmin} />
            </>
          }
        />
        <Route
          path="/SignUp"
          element={
            <>
              <NavBar login={isLoggedin} />
              <CreateUserPage />
            </>
          }
        />
        <Route
          path="/ForgotPassword"
          element={
            <>
              <NavBar login={isLoggedin} />
              <ForgotPasswordPage />
            </>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
