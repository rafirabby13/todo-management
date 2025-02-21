import { NavLink } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logoutUSer } = useAuth();
  const handleLogout = () => {
    logoutUSer()
      .then(() => {
        console.log("Logges out successfully");
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="flex
        justify-center flex-wrap gap-6 text-3xl py-2 md:py-10 bg-[#2C3930]"
    >
      <NavLink to="/" className={"btn"}>
        Home
      </NavLink>
      <NavLink to="/add" className={"btn"}>
        Add
      </NavLink>
      {user ? (
        <div
          className="flex
        justify-center gap-6"
        >
          <NavLink className="btn">{user?.email}</NavLink>
          <NavLink onClick={handleLogout} className={"btn"}>
            Logout
          </NavLink>
        </div>
      ) : (
        <NavLink to="/login" className={"btn"}>
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
