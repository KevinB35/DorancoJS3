import React from "react";
import { Typography, Box } from "@mui/material";

const Article = (props) => {
  const { article } = props;
  return (
    <Box className='box' sx={{ opacity: article.online ? 1 : 0.1 }}>
      <img height='300' src={article.picture[0].pic1} alt={article.name} />
      <Typography
        gutterBottom
        variant='h5'
        component='div'
        className='hideOnHover'
      >
        {article.brand} - {article.name}
      </Typography>
      <Typography
        gutterBottom
        variant='h5'
        component='div'
        className='showOnHover'
      >
        Voir l'article
      </Typography>
    </Box>
  );
};

export default Article;
