import { SeaMartData } from "../../data/SeaMartData/data";

const SeaMart = () => {
  return (
    <>
      <div className=" px-4 mt-[200px] sm:mt-20 md:mt-20">
        <h2 className="text-xl font-semibold text-blue-800 mb-3">
          <span className="text-blue-600 font-bold">SeaMart</span> Product
          Recommendations
        </h2>

        <div className=" relative pb-4">
          <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100 transition-all duration-300">
            {SeaMartData.map((item, index) => (
              <div
                key={index}
                className="min-w-[280px] max-w-[300px] bg-white rounded-xl shadow hover:shadow-lg transition duration-300 flex-shrink-0"
              >
                <img
                  src={item.img}
                  alt="Nusa Penida"
                  className="w-full h-40 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SeaMart;
