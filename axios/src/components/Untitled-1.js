const [msg, setmsg] = useState("");
const [accessToken, setaccessToken] = useState("");
useEffect(() => getall(), [accessToken]);

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
