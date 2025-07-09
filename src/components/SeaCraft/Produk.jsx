import { FaStar } from "react-icons/fa";
import { SeaCraftProduk } from "../../data/SeaCraftProduk/data";

const Produk = () => {
  const midpoint = Math.ceil(SeaCraftProduk.length / 2);
  const firstHalf = SeaCraftProduk.slice(0, midpoint);
  const secondHalf = SeaCraftProduk.slice(midpoint);

  return (
    <div className=" md:px-4 mt-8">
      <div className="flex justify-between items-center mb-2 px-4 md:px-0">
        <h2 className="font-semibold text-lg">
          Customize your <span className="text-blue-600 font-bold">style</span>
        </h2>
        <button className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full">
          See All
        </button>
      </div>

      <div className="flex space-x-4 mx-auto justify-center overflow-x-auto pb-2 mt-8">
        {firstHalf.map((item, index) => (
          <div
            key={index}
            className="bg-[#0b4e7e] min-w-[280px] rounded-2xl text-white p-3 flex-shrink-0 flex items-start gap-3"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-xl object-contain bg-white p-1"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">{item.name}</p>
              <div className="flex items-center text-sm">
                <FaStar className="text-yellow-400 mr-1" />
                {item.rating} • {item.time}
              </div>
              <p className="text-sm">{item.distance}</p>
              <span className="text-xs text-blue-100 bg-blue-300 px-2 py-1 rounded-full w-fit">
                {item.discount}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex space-x-4 mx-auto justify-center overflow-x-auto mt-8 ">
        {secondHalf.map((item, index) => (
          <div
            key={index}
            className="bg-[#0b4e7e] min-w-[280px] rounded-2xl text-white p-3 flex-shrink-0 flex items-start gap-3"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-xl object-contain bg-white p-1"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">{item.name}</p>
              <div className="flex items-center text-sm">
                <FaStar className="text-yellow-400 mr-1" />
                {item.rating} • {item.time}
              </div>
              <p className="text-sm">{item.distance}</p>
              <span className="text-xs text-blue-100 bg-blue-300 px-2 py-1 rounded-full w-fit">
                {item.discount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produk;
