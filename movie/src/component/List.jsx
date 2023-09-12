import "./List.css";
import { useReducer } from "react";
const List = ({ item}) => {
  return (
    
      <div className="movielist">
        {item.length === 0 ? (
          <div>
            <img src="src/assets/no-results.png" width="256px" height="256px" />
            <h2>No Result Found</h2>
          </div>
        ) : (
          item.map((item) => (
            <div className="card" key={item.Title}>
              <img src={item.Poster} alt=" " />
              <h3>{item.Title}</h3>
              <p>{item.Year}</p>
            </div>
          ))
        )}
      </div>
    
  );
};

export default List;
