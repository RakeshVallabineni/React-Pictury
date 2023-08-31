import User from "../Components/USERS/User";
import "./Home.css";
function HomeUI() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1 style={{ color: "black", fontSize: "50px",textDecoration:"underline" }}>Pictury</h1>
      </header>
      <User />
    </div>
  );
}

export default HomeUI;
