import { Container, Grid, CardMedia, Typography } from "@mui/material";
import "../styles/hero.css";

import heroImage from "../assets/image-hero-portrait@2x.webp";
import phoneImg from "../assets/image-hero-landscape@2x.png";

import Button from './Button'

const Hero = () => {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: { xs: "100px" } }}>
      <Grid container sx={{marginTop: '6rem'}}>
        <Grid
          item
          md={10}
          sm={12}
          xs={12}
          sx={{
            marginBottom: { xs: "50px", sm: "100px", md: "50px" },
            padding: { md: "80px 0", sm: "20px 0" },
            backgroundImage: { xs: "none", sm: `url(${heroImage})` },
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: { sm: "400px", md: "404px" },
          }}
        >
          
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "38px", sm: "56px", md: "72px" } }}
          >
            An <strong>easy solution</strong> <br /> for your
            <strong> needs.</strong>
          </Typography>
          <div className="hero-p">
            <Typography variant="body1">Our product will make your life easier from shopping to everyday use.</Typography>
            <Button/>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{ display: { sm: "none" }, marginBottom: "56px" }}
        >
          <CardMedia component="img" image={phoneImg} alt="hero phone" />
        </Grid>
        <Grid
          rowSpacing={4}
          item
          container
          md={1.5}
          xs={12}
          justifyContent="center"
          alignItems="center"
          sx={{ padding: { md: "100px 0" } }}
        >
          <Grid item xs={12} sm={4} md={12}>
            <Typography
              variant="h2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              2K+
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              Products
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <Typography
              variant="h2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              8
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              Companies
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <Typography
              variant="h2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              1.2M
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              Customers
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
