import { CiSearch } from "react-icons/ci";
import { FaAngleLeft } from "react-icons/fa6";
import Element1 from "../../assets/elements/1.svg";
import Element2 from "../../assets/elements/2.svg";
import Element3 from "../../assets/elements/3.svg";
import Element4 from "../../assets/elements/4.svg";
import Element5 from "../../assets/elements/5.svg";
import Full from "../../assets/elements/full.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <div className="relative w-full bg-white">
      <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-[200px] lg:h-[160px] w-full rounded-b-4xl md:rounded-b-full">
        <div onClick={() => Navigate("/Home")} className=" flex items-center ml-4 pt-3">
          <FaAngleLeft className="text-white text-xl md:text-3xl cursor-pointer" />
          <span className=" text-xl md:text-3xl font-semibold text-white">
            SeaCraft
          </span>
        </div>
        <div className="block md:hidden">
          <img
            className=" flex justify-center mx-auto w-[340px] sm:w-[350px] rotate-[-8deg] mt-[-10px]"
            src={Full}
            alt=""
          />
        </div>
        <div className=" md:block hidden">
          <img
            className=" absolute left-3 md:left-36 w-[220px] md:w-[160px] top-0"
            src={Element1}
            alt=""
          />
          <div className="absolute right-12  top-2 md:flex">
            <img
              className=" w-[90px] sm:w-[180px] lg:w-[130px] rotate-[-14deg]"
              src={Element5}
              alt=""
            />
            <img
              className=" w-[80px] lg:w-[130px] rotate-[-14deg]"
              src={Element4}
              alt=""
            />
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 top-[-20px] md:flex">
            <img
              className=" w-[90px] sm:w-[180px] lg:w-[190px] rotate-[-14deg]"
              src={Element3}
              alt=""
            />
            <img
              className="w-[80px] lg:w-[190px] rotate-[-14deg]"
              src={Element2}
              alt=""
            />
          </div>
        </div>
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
