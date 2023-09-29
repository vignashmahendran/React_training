import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [msg, setmsg] = useState("");
  const [accessToken, setaccessToken] = useState("");
  useEffect(() => getall(), [accessToken]);
  const refreshToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NTgxNjY0MCwianRpIjoiNWJmMDczODEtZmExZC00Nzg1LWE5NDktMWNhYmJhNTMzMzhjIiwidHlwZSI6InJlZnJlc2giLCJzdWIiOjYsIm5iZiI6MTY5NTgxNjY0MCwiZXhwIjoxNjk4NDA4NjQwfQ.JthnBThqCNuVDjuNy14iBeNeV1ckBRxuSnZR4ND-F7k";

  

  function register() {
    axios
      .post("http://127.0.0.1:5000/user/register", {
        username: "vicky12345",
        password: "password",
        email: "vicky12345@gmail.com",
      })
      .then((res) => {
        setmsg(JSON.stringify(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        setmsg(JSON.stringify(err));
        console.log(err);
      });
  }

  function login() {
    axios
      .post("http://127.0.0.1:5000/user/login", {
        username: "vicky12345",
        password: "password",
      })
      .then((res) => {
        setmsg(JSON.stringify(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        setmsg(JSON.stringify(err));
        console.log(err);
      });
  }
  function refresh() {
    let config = {
      method: "get",

      url: "http://127.0.0.1:5000/user/refresh",
      headers: {
        Authorization: "Bearer " + refreshToken,
      },
    };

    axios
      .request(config)
      .then((res) => {
        setmsg(JSON.stringify(res.data));
        console.log(res.data);
        setaccessToken(res.data["new access"]);
      })
      .catch((err) => {
        setmsg(JSON.stringify(err));
        console.log(err);
      });
  }

  function me() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:5000/user/me",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };

    axios
      .request(config)
      .then((res) => {
        setmsg(JSON.stringify(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        setmsg(JSON.stringify(err));
        console.log(err);
        refresh();
      });
  }

  function getall() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:5000/getall",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
      body: {
        page: 2,
        per_page: 3,
      },
    };

    axios
      .request(config)
      .then((res) => {
        setmsg(JSON.stringify(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        setmsg(JSON.stringify(err));
        console.log(err);
        refresh();
      });
  }

  function add() {
    let config = {
      method: "post",
      
      url: "http://127.0.0.1:5000/add",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
      data: {
        name: "pen1",
        price: 20,
        qty: 200,
        description: "This is pen1",
      },
    };

    axios
      .request(config)
      .then((res) => {
        setmsg(JSON.stringify(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        setmsg(JSON.stringify(err));
        console.log(err);
        refresh();
      });
  }
  function del() {
    let config = {
      method: "delete",

      url: "http://127.0.0.1:5000/delete/",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
      
    };

    axios
      .request(config)
      .then((res) => {
        setmsg(JSON.stringify(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        setmsg(JSON.stringify(err));
        console.log(err);
        refresh();
      });
  }
 function update() {
   let config = {
     method: "put",

     url: "http://127.0.0.1:5000/update/39",
     headers: {
       Authorization: "Bearer " + accessToken,
     },
     data: {
       name: "hen",
       price: 200,
       qty: 2000,
       description: "This is hen",
     },
   };

   axios
     .request(config)
     .then((res) => {
       setmsg(JSON.stringify(res.data));
       console.log(res.data);
     })
     .catch((err) => {
       setmsg(JSON.stringify(err));
       console.log(err);
       refresh();
     });
 }
  return <>{msg}</>;
}

export default App;
