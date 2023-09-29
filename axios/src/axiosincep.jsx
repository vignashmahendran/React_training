import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      refreshToken();

      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Use the instance to make requests
instance
  .get("/data")
  .then((response) => {
    // Handle the response here
    console.log(response.data);
  })
  .catch((error) => {
    // Handle errors here
    console.error(error);
  });

// Method for refreshing the token
function refreshToken() {
  // Implement your logic here to refresh the token
}
