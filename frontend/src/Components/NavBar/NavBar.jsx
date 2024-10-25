import React from "react";
import "./NavBar.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const NavBar = ({ login, setLogin }) => {
  const handleLogout = () => {
    toast.success("Logged out");
    setLogin(false);
  };

  return (
    <div className="NavBarContainer">
      <Link className="link" to="/">
        <p>BOOK STORE</p>
      </Link>
      {login === "hide" ? null : login ? (
        <Button
          variant="outlined"
          sx={{
            borderColor: "white",
            borderWidth: {
              xs: "1px",
              md: "1px",
              lg: "2px",
            },
            color: "white",
          }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      ) : (
        <Link className="link" to="/Login">
          <Button
            variant="outlined"
            sx={{
              borderColor: "white",
              borderWidth: {
                xs: "1px",
                md: "1px",
                lg: "2px",
              },
              color: "white",
            }}
          >
            Login
          </Button>
        </Link>
      )}
    </div>
  );
};

export default NavBar;
