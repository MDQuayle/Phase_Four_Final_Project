import { Link } from "react-router-dom";

function Header({ user, onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <header>
      <h1>
        Welcome To MoviReVew
      </h1>
      {user ? (
        <div>
          <p>Welcome {user.username}!</p>
          <Link to="/">
          <button onClick={handleLogout}>Logout</button>
          </Link>
        </div>
      ) : (
          <div>
            <Link to="/login">
                <button>Click Here to Login</button>
            </Link>
            <p>Welcome to MoviRevew </p>
            <p>Please login to write reviews!</p>
        </div>
      )}
    </header>
  );
}

export default Header;