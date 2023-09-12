import { Box, Container, TextField } from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";


export default function Register({setpage}) {
  const handleSubmit = (event) => {
    event.preventDefault();
       
      const data = new FormData(event.currentTarget);
     
      let mail = data.get("email");
       localStorage.setItem(mail, JSON.stringify(data.get("password")));

    
      alert("Registration successful")

    }
  
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
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            Sign Up
          </Button>

          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            <Link href="/signin" variant="body2">
              Sign In
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
