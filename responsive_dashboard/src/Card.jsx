

import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const CustomCard = ({ title, content }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <img src={content} width="240px
        
        " height="240px"></img>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
