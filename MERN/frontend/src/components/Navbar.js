import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = (e) => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to={"/"}>
          <h1>Mnao pratimai</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span className="navProg">
                <Link to="/programs">Programos</Link>
              </span>
              <span>{user.email}</span>
              <button onClick={handleClick}>atsijungti</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Prisijungti</Link>
              <Link to="/signup">Registracija</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
