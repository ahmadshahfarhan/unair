import { FaCalendarCheck, FaFish, FaBoxOpen } from "react-icons/fa";

const InfoCards = () => {
  return (
    <div className="overflow-x-auto scrollbar-hide px-4 mt-14 p-1">
      <div className="flex gap-4 w-max justify-center  mx-auto">
        <div className="bg-white rounded-xl shadow-md p-4 w-48 flex-shrink-0 flex flex-col items-center hover:shadow-lg transition">
          <FaCalendarCheck className="text-4xl mb-2" />
          <div className=" flex items-center gap-x-1">
            <p className="font-semibold text-center">Send</p>
            <p className="text-blue-500 text-sm font-semibold">Gift</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 w-48 flex-shrink-0 flex flex-col items-center hover:shadow-lg transition">
          <FaFish className="text-4xl mb-2" />
          <div className="flex items-center gap-x-1">
            <p className="font-semibold text-center">Nearby</p>
            <p className="text-blue-500 font-semibold">Outlet</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 w-48 flex-shrink-0 flex flex-col items-center hover:shadow-lg transition">
          <FaBoxOpen className="text-4xl mb-2" />
          <div className=" flex items-center gap-x-1">
            <p className="font-semibold text-center">Trash to</p>
            <p className="text-blue-500 font-semibold">Trea</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
