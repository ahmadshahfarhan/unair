import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="relative w-full bg-white">
      <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-[160px] w-full rounded-b-full">
        <div className="flex items-center bg-white rounded-full  max-w-[700px] mx-auto p-2 px-4 shadow-lg absolute left-0 right-0 top-10">
          <CiSearch className="text-blue-800 text-2xl mr-2" />
          <input
            placeholder="Udang laut dd"
            className="w-full bg-transparent outline-none text-gray-600 "
            type="text"
          />
        </div>
      </div>

      <div className=" absolute px-4 left-0 right-0 top-28">
        <div className="bg-gradient-to-r from-sky-200 to-cyan-400 rounded-2xl p-4 shadow-md max-w-[700px] mx-auto">
          <div className="flex items-center flex-wrap gap-x-16 justify-center">
            <div className="flex flex-col items-center">
              <div className="bg-[#145184] text-white rounded-full w-16 h-16 flex items-center justify-center">
                🛒
              </div>
              <span className="text-sm mt-1 text-blue-900 font-semibold">
                SeaMart
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#145184] text-white rounded-full w-16 h-16 flex items-center justify-center">
                🤿
              </div>
              <span className="text-sm mt-1 text-blue-900 font-semibold">
                SeaCraft
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#145184] text-white rounded-full w-16 h-16 flex items-center justify-center">
                👥
              </div>
              <span className="text-sm mt-1 text-blue-900 font-semibold">
                SeaTalk
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#145184] text-white rounded-full w-16 h-16 flex items-center justify-center">
                ✈️
              </div>
              <span className="text-sm mt-1 text-blue-900 font-semibold">
                SeaExplore
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#145184] text-white rounded-full w-16 h-16 flex items-center justify-center">
                ➤
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
