const Filter=({setGenre})=>{
const handleGenreChange = (e) => {
  setGenre(e.target.value);
};
    return (
      <select onChange={handleGenreChange}>
        <option value="">Select a Genre</option>

        <option value="Action">Action</option>

        <option value="Adventure">Adventure</option>

        <option value="Comedy">Comedy</option>

        <option value="Crime">Crime</option>

        <option value="Documentary">Documentary</option>

        <option value="Drama">Drama</option>

        <option value="Science Fiction">Sci-Fi</option>
      </select>
    );

}

export default Filter;