import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import kalender from "../../assets/SeaTalk/iconkalender.svg";
import { seminars } from "../../data/SeaTalkProduk/data";
import { FaMessage } from "react-icons/fa6";

const SeaTalkMobile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7ecdf8] to-[#3aa6e3] text-white px-4 pt-4 pb-16 font-sans">
      {/* Header */}
      <div
        data-aos="fade-down"
        onClick={() => navigate("/home")}
        className="flex items-center mb-4 cursor-pointer"
      >
        <FaAngleLeft className="text-white text-xl" />
        <span className="text-xl font-semibold ml-2">SeaTalk</span>
      </div>

      {/* Title */}
      <div
        data-aos="fade-down"
        className="bg-[#a2f1ff] text-[#0b3f69] font-bold rounded-full py-1 px-4 w-fit mx-auto mb-4"
      >
        Edu Seminar
      </div>

      {/* Seminar Cards */}
      <div className="flex flex-col items-center space-y-6 px-2 md:px-8">
        {seminars.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#0b4f87] w-full max-w-5xl rounded-2xl p-4 text-white"
            data-aos="fade-up"
          >
            {/* HP version */}
            <div className="flex gap-3 md:hidden">
              <div className="w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl w-full h-28 object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <p className="text-sm font-semibold">{item.type}</p>
                <img src={kalender} alt="kalender" className="w-[70px] mt-2" />
                <p className="text-lg font-bold mt-1">{item.day}</p>
              </div>
            </div>

            <div className="mt-2 md:hidden">
              <p className="bg-[#7ee1ff] text-[#0b3f69] rounded-full px-2 py-1 text-xs font-semibold w-fit max-w-full">
                "{item.title}"
              </p>
              <p className="text-xs text-[#7ee1ff] mt-1 underline">
                - Cek selengkapnya
              </p>
            </div>

            <div className=" flex items-center justify-between mt-3 md:hidden">
              <FaMessage className="text-xl text-white" />
              <p className="text-xs italic text-white/80 mt-2">
                <span className="text-[#b1f2ff]">{item.location}</span>{" "}
                {item.date}
              </p>
            </div>

            {/* Tablet & Laptop version */}
            <div className="hidden md:flex gap-4 items-center">
              {/* Gambar */}
              <div className="w-1/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl w-full h-36 object-cover"
                />
              </div>

              {/* Konten */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-semibold">{item.type}</p>
                    <p className="mt-2 bg-[#7ee1ff] text-[#0b3f69] rounded-full px-2 py-1 text-sm font-semibold w-fit max-w-full">
                      "{item.title}"
                    </p>
                    <p className="text-sm text-[#7ee1ff] mt-1 underline">
                      - Cek selengkapnya
                    </p>
                    <div className=" flex items-center justify-between mt-3">
                      <FaMessage className="text-xl text-white" />
                      <p className="text-sm italic text-white/80 mt-2">
                        <span className="text-[#b1f2ff]">{item.location}</span>{" "}
                        {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <img
                      src={kalender}
                      alt="kalender"
                      className="w-[60px] mx-auto"
                    />
                    <p className="text-lg font-bold mt-1">{item.day}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeaTalkMobile;
