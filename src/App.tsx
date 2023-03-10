import React, { useState, useRef, useCallback } from "react";

import Home from "./pages/Home";
import CardComponent from "./partials/CardComponent";
import { IProduct } from "./utils/types";
import useProductsSearch from "./utils/useProductsSearch";
import dummyImage from "./assets/coming-soon-2.png";

import CssBaseline from "@mui/material/CssBaseline";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, error, results, hasNextPage } =
    useProductsSearch(pageNumber);

  const observer = useRef<IntersectionObserver>();

  const lastProductElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasNextPage, isLoading]
  );

  return (
    <>
      <CssBaseline>
        <Home />
        <div>{isLoading && "Loadingggg"}</div>

        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="center"
          sx={{ paddingX: "30" }}
        >
          {results.map((item: IProduct, index) => {
            if (results.length === index + 1) {
              return (
                <Grid ref={lastProductElementRef} item key={index}>
                  <Card sx={{ maxWidth: 320 }}>
                    <CardMedia
                      component="img"
                      alt={item.name}
                      height="340"
                      image={item.images?.[0]?.src ?? dummyImage}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.short_description.replace(/<\/?p>/gi, "")}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Typography
                        variant="body1"
                        color="secondary"
                      >{`USD ${item.price}`}</Typography>
                      <Typography variant="body1">{`sku: ${item.sku}`}</Typography>
                    </CardActions>
                  </Card>
                </Grid>
              );
            } else
              return (
                <Grid item key={index}>
                  <Card sx={{ maxWidth: 320 }}>
                    <CardMedia
                      component="img"
                      alt={item.name}
                      height="340"
                      image={item.images?.[0]?.src ?? dummyImage}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.short_description.replace(/<\/?p>/gi, "")}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Typography
                        variant="body1"
                        color="secondary"
                      >{`USD ${item.price}`}</Typography>
                      <Typography variant="body1">{`sku: ${item.sku}`}</Typography>
                    </CardActions>
                  </Card>
                </Grid>
              );
          })}
        </Grid>
      </CssBaseline>
    </>
  );
}

export default App;
