import { useEffect, useState } from "react";
import "./Search.css";
const Search = ({ setItem, item, list ,genre}) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    if(genre){
       setItem(
         list.filter(
           (o) =>
             o.Title.toLowerCase().includes(search.toLowerCase()) &&
             o.Genre.includes(genre)
         )
       );


    }
    else{
      setItem(
        list.filter(
          (o) =>
            o.Title.toLowerCase().includes(search.toLowerCase()) 
        )
      );

    }
   
  }, [search,genre]);

  return (
    <nav>
      <h2>Movie Search</h2>
      <input
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="   Movie Search "
      />
    </nav>
  );
};

export default Search;
