import React from "react";
import data from "../assets/data.json";
import Article from "../components/Article";
import { Grid } from "@mui/material";
import "../assets/styles/Home.css";

const Home = () => {
  return (
    <>
      <title>Accueil</title>
      <Grid container textAlign={"center"} justifyContent={"center"}>
        {data.map((article, index) => (
          <Article article={article} key={index} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
