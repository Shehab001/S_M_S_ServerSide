import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import Fifth from "../Components/Fifth/Fifth";
import Fourth from "../Components/Fourth/Fourth";
import Header from "../Components/Header/Header";
import Second from "../Components/Second/Second";
import Seventh from "../Components/Seventh/Seventh";
import Sixth from "../Components/Sixth/Sixth";
import Third from "../Components/Third/Third";

const Main = () => {
  return (
    <Box maxWidth={"1440px"}>
      <Header></Header>
      <Second></Second>
      <Third></Third>
      <Fourth></Fourth>
      <Fifth></Fifth>
      <Sixth></Sixth>
      <Seventh></Seventh>
      <Outlet></Outlet>
    </Box>
  );
};

export default Main;
