import { Container,Button,Link,Typography } from "@mui/material";
export default function Dash() {
  
return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        border: "2px solid blue",
        borderRadius: "12px",
        marginTop: 8,
        height: "540px",
      }}
    >
      <Button
        variant="outlined"
        sx={{ marginTop: 5 }}
        onClick={() => {
          localStorage.removeItem("token")
        }}
      >
        <Link href="/signin" variant="body2" sx={{textDecoration:"none"}}>
          Sign Out
        </Link>
        



      </Button>
      <Typography variant="h5" mt="50px" sx={{textAlign:"center"}}>
        Welcome {JSON.parse(localStorage.getItem("token"))}
      </Typography>
    </Container>
  );
}