import { Box, Container, TextField } from "@mui/material";
import * as React from "react";

import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import{Button}

export default function Login(){
  
    const nav=useNavigate()
    const handleSubmit = (event) => {
      event.preventDefault();
       
      const data = new FormData(event.currentTarget);
      
      let mail = data.get("email");
      
      let user=JSON.parse(localStorage.getItem(mail)||'"user Not found"');
      
      
      if (user == "user Not found"){
        alert("user Not found");
      }
      else{
        if (user ==( (data.get("password")).toString())) {
         localStorage.setItem("token", JSON.stringify(mail));
         nav("/");                 
        } else {
          alert("password incorrect");
        }
      }
       
    };
    
return (

    
  <Container
    component="main"
    maxWidth="xs"
    sx={{ border: "2px solid blue", borderRadius: "12px", marginTop: 8 }}
  >
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 3,
      }}
    >
      <LockOutlinedIcon />

      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit}  sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>

        
          <Link href="/signup" variant="body2">
            Sign Up
          </Link>
        </Stack>
      </Box>
    </Box>
  </Container>
)
}