import Article from "../components/Article";
import { Grid } from "@mui/material";

import data from "../assets/data.json";

import "../assets/styles/Home.css";

const Women = () => {
  const dataFiltered = data.filter(
    (article) => article.category === "f" || article.category === "m"
  );

  return (
    <Grid container textAlign={"center"} justifyContent={"center"}>
      {dataFiltered.map((article, index) => (
        <Article article={article} key={index} />
      ))}
    </Grid>
  );
};

export default Women;
