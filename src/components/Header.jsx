import { Link } from "react-router-dom";

function Header({ currentPage }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            {currentPage === "home" ? (
              <strong>
                <Link to="/">Home</Link>
              </strong>
            ) : (
              <Link to="/">Home</Link>
            )}
          </li>
          <li>
            {currentPage === "random" ? (
              <strong>
                <Link to="/random">Célebrité aléatoire</Link>
              </strong>
            ) : (
              <Link to="/random">Célebrité aléatoire</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;