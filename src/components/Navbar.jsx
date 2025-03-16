import { Link } from "react-router-dom";

function Navbar() {

  return (
    <>
      <div className=" flex justify-between">
        <div className="flex ">
          <img
            className="h-3/4 my-auto "
            src="/images/parislogo1.png"
            alt="logo"
          />
        </div>
        <div>
          <ul className="space-x-6 mt-20 block md:flex text-xl mr-10">
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
