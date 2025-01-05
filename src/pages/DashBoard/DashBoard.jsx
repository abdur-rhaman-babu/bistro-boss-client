import {
  FaAddressBook,
  FaCalendar,
  FaHome,
  FaShoppingCart,
} from "react-icons/fa";
import { MdReviews, MdWorkHistory } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
const DashBoard = () => {
  return (
    <div className="flex items-start gap-5">
      <div className="w-64 min-h-screen bg-yellow-600 p-5">
        <ul className="flex flex-col gap-3">
          <li>
            {" "}
            <NavLink
              to="user-home"
              className="flex items-center gap-2 uppercase p-2"
            >
              {" "}
              <FaHome size={25} /> User Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="cart"
              className="flex items-center gap-2 uppercase p-2"
            >
              <FaShoppingCart size={25} /> Cart
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="reservation"
              className="flex items-center gap-2 uppercase p-2"
            >
              {" "}
              <FaCalendar size={25} />
              Reservation
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="my-booking"
              className="flex items-center gap-2 uppercase p-2"
            >
              <FaAddressBook size={25} />
              My Booking
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="add-review"
              className="flex items-center gap-2 uppercase p-2"
            >
              <MdReviews size={25} />
              Add Review
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="payment-history"
              className="flex items-center gap-2 uppercase p-2"
            >
              <MdWorkHistory size={25} />
              Payment History
            </NavLink>
          </li>
        </ul>{" "}
        <p className="bg-white h-1 mt-5"></p>
        <NavLink to="/" className="flex items-center gap-2 uppercase p-2">
          <FaHome size={25} />
          Home
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
