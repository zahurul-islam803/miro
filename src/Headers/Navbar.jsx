import { FaArrowRight } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 lg:text-lg border-b">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm lg:text-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Product</a>
              <ul className="p-2">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Solutions</a>
              <ul className="p-2">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Resources</a>
              <ul className="p-2">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Enterprise</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
          </ul>
        </div>
        <a className="text-4xl font-bold">miro</a>
      </div>
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1 lg:text-lg">
          <li>
            <details>
              <summary>Product</summary>
              <ul className="p-2">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Solutions</summary>
              <ul className="p-2">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Resources</summary>
              <ul className="p-2">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Enterprise</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-2 lg:space-x-8">
        <div className="flex justify-center items-center lg:gap-2">
          <TbWorld  className="lg:text-[40px]"/>
          <a className="">EN</a>
        </div>
        <a className="">Contact Sales</a>
        <a className="">Login</a>
        <div className="flex justify-center items-center lg:gap-2 bg-[#4262FF] text-white py-2 px-4 rounded-badge">
          <a className="">Sign Up Free</a>
          <a>
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
