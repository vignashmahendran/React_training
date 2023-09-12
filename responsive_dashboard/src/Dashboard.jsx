
import React from "react";
import { Grid } from "@mui/material";
import CustomCard from "./Card";
import testItems from "./data";

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      {
      testItems.map( (item)=>
      <Grid item xs={12} sm={6} md={4}>
        <CustomCard title={item.name} content={item.image} />
      </Grid>)}
    </Grid>
  );
};

export default Dashboard;
