import "./Navbar.css"
const Navbar=({name})=>{

return (
  <div className="nav">
    <div id="home">
      <h3>
        {name} <span >MOTORS</span>
      </h3>
      <h4>Connecting Aspiration</h4>
    </div>
  </div>
);
}

export default Navbar;
