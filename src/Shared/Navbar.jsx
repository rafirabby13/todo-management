import { NavLink } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <div
      className="flex
        justify-center gap-6 text-3xl py-10"
    >
      <NavLink to="/" className={"btn"}>
        Home
      </NavLink>
      <NavLink to="/add" className={"btn"}>
        Add
      </NavLink>
      {user ? (
       <p className="btn">{user?.email}</p>
      ) : (
        <NavLink to="/login" className={"btn"}>
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
