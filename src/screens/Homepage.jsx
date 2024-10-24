import React from "react";
import Header from "./components/Header";
import { Divider } from "@mui/material";
import CardsRow from "./components/CardsRow";
import NewsRow from "./components/NewsRow";

function Homepage() {
  return (
    <div>
      <Header></Header>
      <Divider></Divider>
      <CardsRow></CardsRow>
    </div>
  );
}

export default Homepage;
