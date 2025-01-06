import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [cart] = useCart();
  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((err) => console.log("error", err));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li>
        <NavLink to="/ourShop/salad">Our Shop</NavLink>
      </li>
      <li>
        <NavLink to="/secret">Secret</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>

      {user ? (
        <>
          <button
            onClick={handleSignOut}
            className="border ml-2 px-2 rounded-lg hover:bg-[#2b3440]"
          >
            Sign Out
          </button>
          <img referrerPolicy="no-referrer"
            className="h-10 w-10 ml-2 rounded-full"
            src={user?.photoURL}
            alt=""
          />
        </>
      ) : (
        <>
          {" "}
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-50 bg-black bg-opacity-30 lg:text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to='dashboard/cart'>
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">
                {cart.length}
              </span>
              <FaShoppingCart className="mr-4" size={25} />
            </div>
          </Link>
         
        </div>
      </div>
    </>
  );
};

export default Navbar;
