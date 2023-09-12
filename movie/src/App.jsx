import "./App.css";
import { useState } from "react";
import Search from "./component/Search";
import List from "./component/List";
import Filter from "./component/Filter";
export default function App() {
  const [item, setItem] = useState([]);
  const [genre, setGenre] = useState("");
  const list = [
    {
      Title: "Avatar",
      Year: "2009",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      Genre: "Science Fiction",
    },
    {
      Title: "I Am Legend",
      Year: "2007",
      Poster:
        "https://cps-static.rovicorp.com/2/Open/Warner_Home_Video/Program/7438210/_derived_jpg_q90_310x470_m0/7438210_IAmLegend_Poster2x3_6_1605080185976_6.jpg",
      Genre: "Thriller",
    },
    {
      Title: "300",
      Year: "2006",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
      Genre: "Action",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
      Genre: "Action",
    },
    {
      Title: "The Wolf of Wall Street",
      Year: "2013",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
      Genre: "Crime",
    },
    {
      Title: "Interstellar",
      Year: "2014",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      Genre: "Science Fiction",
    },
    {
      Title: "Game of Thrones",
      Year: "2011",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg",
      Genre: "Drama",
    },
    {
      Title: "Vikings",
      Year: "2013",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE@._V1_SX300.jpg",
      Genre: "Drama",
    },
    {
      Title: "Gotham",
      Year: "2014",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE@._V1_SX300.jpg",
      Genre: "Crime",
    },
    {
      Title: "Power",
      Year: "2014",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BOTA4NTkzMjUzOF5BMl5BanBnXkFtZTgwNzg5ODkxOTE@._V1_SX300.jpg",
      Genre: "Crime",
    },
    {
      Title: "Narcos",
      Year: "2015",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_SX300.jpg",
      Genre: "Crime",
    },

    {
      Title: "Doctor Strange",
      Year: "2016",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
      Genre: "Action",
    },
    {
      Title: "Rogue One: A Star Wars Story",
      Year: "2016",
      Poster:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      Genre: "Action",
    },
    {
      Title: "Assassin's Creed",
      Year: "2016",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMTU2MTQwMjU1OF5BMl5BanBnXkFtZTgwMDA5NjU5ODE@._V1_SX300.jpg",
      Genre: "Adventure",
    },
    {
      Title: "Luke Cage",
      Year: "2016",
      Poster:
        "https://ia.media-imdb.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE@._V1_SX300.jpg",
      Genre: "Drama",
    },
  ];

  return (
    <div>
      <Search setItem={setItem} item={item} list={list} genre={genre}/>
      <Filter setGenre={setGenre}/>
      <List item={item} setItem={setItem} />
    </div>
  );
}
