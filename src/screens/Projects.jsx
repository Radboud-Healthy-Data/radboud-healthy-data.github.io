import React from "react";
import Grid from "@mui/material/Grid";
import CardComponent from "./components/CardComponent";
import colors from "../helpers/colors";

function Projects() {
  return (
    <div>
      <div
        style={{
          padding: "3vh 10vw",
          marginBottom: "3vh",
          color: "white",
          fontSize: "24px",
        }}
      >
        
      </div>
      <Grid
        container
        spacing={5}
        justifyContent="center"
        sx={{ padding: "5vh 10vw", backgroundColor: colors.textLight }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent />
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
