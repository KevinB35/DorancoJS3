import { Link, useNavigate, useParams } from "react-router-dom";
import { Grid, Box, Typography, Alert, Rating, Button } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../store";

const Article = () => {
  const { id } = useParams();

  const article = useSelector((state) =>
    state.articles.articles.filter((a) => a.id.toString() === id)
  )[0];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (article === undefined) return navigate("/404");

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
              <Rating name='rating' value={article.avis.stars} readOnly />
              <Typography variant='subtitle1'>
                {article.avis.nb} avis
              </Typography>
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
              <Button onClick={() => dispatch(deleteItem(article.id))}>
                Supprimer
              </Button>
            </Box>
          </Grid>
        </>
      )}
    </>
  );
};

export default Article;
