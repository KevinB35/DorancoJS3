import { Link, useNavigate, useParams } from "react-router-dom";
import data from "../assets/data.json";
import { useEffect, useState } from "react";
import { Grid, Box, Typography, Alert } from "@mui/material";

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState();

  // Sert a retourner une page 404 quand l'id de l'article ne correspond a aucune donnée
  useEffect(() => {
    const dataFiltered = data.filter((article) => article.id.toString() === id);

    if (dataFiltered.length === 0) return navigate("/404");

    setArticle(dataFiltered[0]);
  }, [id, navigate]);

  return (
    <>
      {article && (
        <>
          {(!article.online || article.stock === 0) && (
            <Alert severity='error'>{"Cet article n'est pas en stock"}</Alert>
          )}
          <Grid container>
            <Box width={"70%"} sx={{}}>
              <Grid container textAlign={"center"} justifyContent={"center"}>
                {Object.values(article.picture[0]).map((image, index) => (
                  <Link to={image} key={index} target='_blank'>
                    <img
                      src={image}
                      alt={article.name}
                      style={{ width: 400, height: 400, margin: 3 }}
                    />
                  </Link>
                ))}
              </Grid>
            </Box>
            <Box
              width={"30%"}
              height={"100vh"}
              sx={{
                paddingLeft: 2,
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant='h3'>{article.name}</Typography>
              <Typography variant='h4'>{article.price}€</Typography>
              <Typography sx={{ margin: "20px 0" }}>
                {article.content}
              </Typography>
              <Grid container>
                {article.size.map((s, index) => (
                  <Grid
                    item
                    xs={6}
                    sx={{ border: "1px solid lightgray", padding: 2 }}
                    key={index}
                  >
                    {s}
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </>
      )}
    </>
  );
};

export default Article;
