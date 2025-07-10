import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { GiScubaMask } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";           
import { FaAngleDoubleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full bg-white">
      <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-[160px] w-full rounded-b-4xl md:rounded-b-full">
        <div className="flex items-center bg-white rounded-full  max-w-[700px] mx-4 sm:mx-auto md:mx-auto p-2 px-4 shadow-lg absolute left-0 right-0 top-10">
          <CiSearch className="text-blue-800 text-2xl mr-2" />
          <input
            placeholder=""
            className="w-full bg-transparent outline-none text-gray-600"
            type="text"
          />
        </div>
      </div>

      <div className=" absolute px-4 left-0 right-0 top-28">
        <div className="bg-gradient-to-r from-sky-200 to-cyan-400 rounded-2xl p-3 md:p-4 shadow-md w-full md:max-w-[700px] mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-3 md:gap-x-16 justify-center">
            <div onClick={() => navigate("/seamart")} className="flex flex-col items-center cursor-pointer">
              <div className="bg-[#145184] text-white rounded-full w-16 h-16 flex items-center justify-center">
                <FiShoppingCart className="text-3xl" />
              </div>
              <span className="text-sm mt-1 text-blue-900 font-semibold">
                SeaMart
              </span>
            </div>
            <div onClick={() => navigate("/seacraft")} className="flex flex-col items-center cursor-pointer">
              <div className="bg-[#145184] text-white rounded-full w-16 h-16 flex items-center justify-center">
                <GiScubaMask className="text-3xl" />
              </div>
              <span className="text-sm mt-1 text-blue-900 font-semibold">
                SeaCraft
              </span>
            </div>
            <div onClick={() => navigate("/seatalk")} className="flex flex-col items-center cursor-pointer">
              <div className="bg-[#145184] text-white rounded-full w-16 h-16 flex items-center justify-center">
                <FaUsers className="text-3xl" />
              </div>
              <span className="text-sm mt-1 text-blue-900 font-semibold">
                SeaTalk
              </span>
            </div>
            <div onClick={() => navigate("/seaexplore")} className="flex flex-col items-center cursor-pointer">
              <div className="bg-[#145184] text-white rounded-full w-16 h-16 flex items-center justify-center">
                <FaPlane className="text-3xl" />
              </div>
              <span className="text-sm mt-1 text-blue-900 font-semibold">
                SeaExplore
              </span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <div className="bg-[#145184] text-white rounded-full w-16 h-16 flex items-center justify-center">
                <FaAngleDoubleRight className="text-3xl" />
              </div>
              <span className="text-sm mt-1 text-blue-900 font-semibold">
                See More
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
