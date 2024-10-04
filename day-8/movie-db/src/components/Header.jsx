import { Link } from "react-router-dom";
import "../styles/Header.css";
const Header = () => {
  return (
    <div className="header">
      <header className="container">
        <Link to="/">
          <img
            src="https://movix-app-murex.vercel.app/assets/movix-logo-HTlvmwAF.svg"
            alt="Movie Database"
          />
        </Link>
        <div>
          <Link to="/movies">Movies</Link>
          <Link to="/tv-shows">TV Shows</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
