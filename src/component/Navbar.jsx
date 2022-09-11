import { Link } from "react-router-dom";
import React from "react";
import { useDataContext } from "../context/DataContext";
import { useAuth0 } from "@auth0/auth0-react";

import { FaShoppingCart, FaUserPlus, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  const { Open, SetOpen, total_item } = useDataContext();
  const Set = () => {
    SetOpen(!Open);
  };
  return (
    <section className=" text-white fixed top-0 left-0 right-0  ">
      <div className="flex justify-between items-center h-20 bg-[#05445E] relative z-50  px-4">
        <div>
          <span>WH</span>
          <span>Farms</span>
        </div>
        <div className="sm:flex hidden justify-between   w-3/5">
          <Link className="p-3 text-lg font-semibold" to="/">
            Home
          </Link>
          <Link className="p-3 text-lg font-semibold" to="/Products">
            Product
          </Link>
          <Link
            to="/Cart"
            className="relative flex p-3 space-x-1 font-semibold"
          >
            <span className="text-lg">Cart</span>

            <FaShoppingCart size={30} className="relative" />
            <span className="absolute bg-black rounded-full w-4 h-4 text-center text-sm  text-white top-2 right-1 ">
              {total_item}
            </span>
          </Link>
          <button
            onClick={() => loginWithRedirect()}
            className="px-3 text-center flex space-x-2 m-2 rounded-md h-fit  bg-black text-white py-1"
          >
            <span>Login</span> <FaUserPlus className="" size={20} />
          </button>
          {/* <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="px-3 text-center flex space-x-2 m-2 rounded-md h-fit  bg-black text-white py-1"
          >
            <span>LogOut</span> <FaUserPlus className="" size={20} />
          </button> */}
        </div>
        <button className="sm:hidden block outline-none" onClick={Set}>
          {Open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
      <aside
        className={
          Open
            ? "translate-y-0 duration-1000 ease-out bg-[#05445E]   "
            : " -translate-y-[1000px] duration-1000 ease-in bg-[#05445E] "
        }
      >
        <div className=" flex sm:hidden items-center mx-auto py-10 flex-col space-y-5 w-20 h-full  ">
          <Link className="p-3 text-lg font-semibold" to="/">
            Home
          </Link>
          <Link className="p-3 text-lg font-semibold" to="/">
            Product
          </Link>
          <Link
            to="/Cart"
            className="relative flex p-3 space-x-1 font-semibold"
          >
            <span className="text-lg">Cart</span>

            <FaShoppingCart size={30} className="relative" />
            <span className="absolute bg-black rounded-full w-4 h-4 text-center text-sm text-white top-2 right-1 ">
              3
            </span>
          </Link>
          <button
            onClick={() => loginWithRedirect()}
            className="px-3 text-center flex space-x-2 m-2 rounded-md h-fit  bg-black text-white py-1"
          >
            <span>Login</span> <FaUserPlus className="" size={20} />
          </button>
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="px-3 text-center flex space-x-2 m-2 rounded-md h-fit  bg-black text-white py-1"
          >
            <span>LoOut</span> <FaUserPlus className="" size={20} />
          </button>
        </div>
      </aside>
    </section>
  );
}
export default Navbar;
