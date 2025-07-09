import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaSlidersH } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import { SeaExploreProduk } from "../../data/SeaExploreProduk/data";
import Background from "../../assets/elements/bacground.svg";
import { IoLocationSharp } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function SeaExplore() {
  const [search, setSearch] = useState("");
  const Navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center text-white font-sans"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div onClick={() => Navigate("/Home")} className="bg-[#0179C3] px-4 py-4 rounded-b-3xl flex justify-start items-center">
        <FaAngleLeft className="text-2  xl" />
        <h1 className="text-xl font-bold">SeaExplore</h1>
      </div>

      <div className="relative mx-4 mt-4 md:ml-12 flex items-center gap-x-2">
        <input
          type="text"
          placeholder="Pandawa Beach"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-10 py-3 rounded-2xl text-gray-800 shadow-md focus:outline-none bg-[#ffffffb5]"
        />
        <CiSearch className="absolute top-1/2 left-2 -translate-y-1/2 text-3xl text-[#588ab3] font-bold" />
        <div className=" flex items-center gap-x-2">
          <FaSlidersH className=" text-xl" />
          <LuClipboardList className=" text-xl" />
        </div>
      </div>

      <div className="bg-[#b4efff] mt-6 ml-4 md:ml-12 p-4 pr-0 md:pr-4 rounded-l-2xl shadow-md">
        <h2 className="text-gray-800 text-base font-semibold mb-4">
          Recommendations for your next trip
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {SeaExploreProduk.slice(0, 4).map((item, idx) => (
            <div
              key={idx}
              className="min-w-[250px] bg-[#054E9F] text-white p-4 rounded-2xl relative"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 object-cover rounded-xl mb-2"
              />
              <div className=" flex items-center absolute top-2 left-2 bg-[#cbf3ff] text-[#054E9F] text-sm font-bold px-2 py-1 rounded-full">
                <IoLocationSharp />
                <h1> {item.location}</h1>
              </div>
              <h3 className="font-semibold text-sm">"{item.title}"</h3>
              <ul className="text-xs list-disc list-inside mb-2">
                {item.places.map((place, i) => (
                  <li key={i}>{place}</li>
                ))}
              </ul>
              <p className="font-bold text-sm text-yellow-300">{item.price}</p>
            </div>
          ))}
        </div>

        <h2 className="text-gray-800 font-bold mb-3 mt-8 text-2xl">
          The <span className="text-cyan-600 font-bold text-2xl">holidays</span> have
          arrived!
        </h2>

        <div className="flex space-x-2 mb-4 overflow-x-auto">
          {["Home Stay", "Harbor", "Snorkeling"].map((tab, idx) => (
            <button
              key={idx}
              className={`px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap border-0 ${
                tab === "Home Stay"
                  ? "bg-cyan-600 text-white"
                  : "bg-white text-gray-800 border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {SeaExploreProduk.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[250px] bg-[#054E9F] text-white p-4 rounded-2xl relative"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 object-cover rounded-xl mb-2 "
              />
              <div className="absolute top-2 left-2 bg-white text-[#054E9F] text-sm font-bold px-2 py-1 rounded-full">
                📍{item.location}
              </div>
              <h3 className="font-semibold text-sm">"{item.title}"</h3>
              <ul className="text-xs list-disc list-inside mb-2">
                {item.places.map((place, i) => (
                  <li key={i}>{place}</li>
                ))}
              </ul>
              <p className="font-bold text-sm mt-2 text-yellow-300">{item.price}</p>
            </div>
          ))}
        </div>
      </div>    
    </div>
  );
}
