
import './App.css'
import axios from 'axios'
function App() {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NTgxODYyNiwianRpIjoiZTk0Y2FiYjctZTY3OS00MmE3LWEzNzYtMTgwNzRjZmU3ZGI4IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6NiwibmJmIjoxNjk1ODE4NjI2LCJleHAiOjE2OTU4MTk1MjZ9.mAsuPafGV-ChiHU9nq9e7p4fMiw4vC0Lk8tQgqhuhAY";
  const refreshToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NTgxNjY0MCwianRpIjoiNWJmMDczODEtZmExZC00Nzg1LWE5NDktMWNhYmJhNTMzMzhjIiwidHlwZSI6InJlZnJlc2giLCJzdWIiOjYsIm5iZiI6MTY5NTgxNjY0MCwiZXhwIjoxNjk4NDA4NjQwfQ.JthnBThqCNuVDjuNy14iBeNeV1ckBRxuSnZR4ND-F7k";
 function register() {
   axios
     .post("http://127.0.0.1:5000/user/register", {
       username: "vicky12345",
       password: "password",
     })
     .then((res) => console.log(res.data))
     .catch((err) => console.log(err));
 }

function login(){
  axios
    .post("http://127.0.0.1:5000/user/login", {
      username: "vicky12345",
      password: "password",
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}
function refresh(){
  
let config = {
  method: "get",
  
  url: "http://127.0.0.1:5000/user/refresh",
  headers: {
    Authorization:
      "Bearer "+refreshToken,
  },
};

axios
  .request(config)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

}

function me(){

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://127.0.0.1:5000/user/me",
    headers: {
      Authorization:
        "Bearer "+accessToken,
    },
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

}
  

  

return <>{refresh()}</>;

}


export default App
