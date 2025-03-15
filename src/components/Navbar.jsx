import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className=" flex justify-between">
        <div className="flex sm:text-md">
          <img className="h-20 w-20" src="/images/paris-logo.png" alt="logo" />
          <p className=" text-lg font-semibold md:text-2xl my-auto mt-12 sm:text-lg ">
            mour a` <span className="text-red-500 font-bold">PARIS</span>
          </p>
        </div>
        <div>
          <ul className="space-x-6 mt-5 block md:flex text-xl mr-10">
            <li className="relative font-semibold text-gray-800 cursor-pointer group">
              <Link to="/">Home</Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:bg-red-500"></span>
            </li>
            <li className="relative font-semibold text-gray-800 cursor-pointer group">
              <Link to="/places">Explore</Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:bg-red-500"></span>
            </li>
            <li className="relative font-semibold text-gray-800 cursor-pointer group">
              <Link to="/food">Bon Appetit</Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:bg-red-500"></span>
            </li>
            <li className="relative font-semibold text-gray-800 cursor-pointer group">
              <Link to="/pictures">Pictures</Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:bg-red-500"></span>
            </li>
            <li className="relative font-semibold text-gray-800 cursor-pointer group">
              <Link to="/history">History</Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:bg-red-500"></span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
