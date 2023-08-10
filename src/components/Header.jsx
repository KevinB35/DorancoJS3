import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

const Header = () => {
  const liStyle = {
    display: "inline-block",
    padding: "0 0.5rem",
    minWidth: "12rem",
    textAlign: "center",
    color: "white",
    textDecoration: "none",
  };

  return (
    <>
      <div
        style={{
          padding: 20,
          textAlign: "center",
          background: "#2980b9",
          color: "white",
          fontSize: "1.5rem",
        }}
      >
        <nav style={{ listStyle: "none" }}>
          <Link style={{ ...liStyle, borderRight: "1px solid black" }} to='/'>
            Accueil
          </Link>
          <Link style={{ ...liStyle, borderRight: "1px solid black" }} to='men'>
            Homme
          </Link>
          <Link style={liStyle} to='women'>
            Femme
          </Link>
        </nav>
      </div>
      <Container maxWidth='xl' sx={{ paddingTop: 2 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Header;
