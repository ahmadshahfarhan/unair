import { CiSearch } from "react-icons/ci";
import { FaAngleLeft } from "react-icons/fa6";
import Element1 from "../../assets/elements/12.svg";
import Element2 from "../../assets/elements/13.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <div className="relative w-full bg-white">
      <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-[200px] lg:h-[160px] w-full rounded-b-4xl md:rounded-b-full">
        <div
          onClick={() => Navigate("/")}
          className=" flex items-center ml-4 pt-3"
        >
          <FaAngleLeft className="text-white text-xl md:text-3xl cursor-pointer" />
          <span className=" text-xl md:text-3xl font-semibold text-white">
            SeaMart
          </span>
        </div>
        <img
          className=" absolute right-3 md:right-24 w-[220px] top-0"
          src={Element1}
          alt=""
        />
        <img
          className=" absolute left-3 md:left-24 w-[180px] lg:w-[190px] top-20 lg:top-8 rotate-[-14deg]"
          src={Element2}
          alt=""
        />
        <div className="flex items-center bg-white rounded-full  max-w-[700px] mx-4 sm:mx-auto md:mx-auto p-2 px-4 shadow-lg absolute left-0 right-0  top-[180px] lg:top-[140px]">
          <CiSearch className="text-blue-800 text-2xl mr-2" />
          <input
            placeholder=""
            className="w-full bg-transparent outline-none text-gray-600"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
