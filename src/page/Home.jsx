import React from "react";
import Article from "../components/Article";
import { Grid } from "@mui/material";
import "../assets/styles/Home.css";

import { useSelector } from "react-redux";

const Home = () => {
  const articles = useSelector((state) => state.articles.articles);

  return (
    <>
      <title>Accueil</title>
      <Grid container textAlign={"center"} justifyContent={"center"}>
        {articles.map((article, index) => (
          <Article article={article} key={index} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
