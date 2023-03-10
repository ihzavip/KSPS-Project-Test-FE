import React from "react";
import { IProduct } from "../utils/types";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function CardComponent({
  name,
  price,
  sku,
  short_description,
  description,
  images,
  id,
}: IProduct) {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 320 }}>
        <CardMedia
          component="img"
          alt={name}
          height="340"
          image={
            images && images.length > 0
              ? images[0]?.src
              : "https://codetesting.jubelio.store/wp-content/uploads/2023/03/T_2_front-9.jpg"
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {short_description.replace(/<\/?p>/gi, "")}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography
            variant="body1"
            color="secondary"
          >{`USD ${price}`}</Typography>
          <Typography variant="body1">{`sku: ${sku}`}</Typography>
        </CardActions>
      </Card>
    </Grid>
  );
}
