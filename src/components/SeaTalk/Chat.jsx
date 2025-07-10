import {
  FaSearch,
  FaEllipsisV,
  FaUsers,
  FaCommentAlt,
  FaThumbsUp,
  FaBookmark,
} from "react-icons/fa";
import Chat from "../../assets/SeaTalk/chat.svg";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

const SeaTalkMobile = () => {
  const Navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7ecdf8] to-[#3aa6e3] text-white px-4 pt-4 pb-16 font-sans">
      <div
        onClick={() => Navigate("/Home")}
        className=" flex items-center mb-4 cursor-pointer"
      >
        <FaAngleLeft className="text-white text-xl md:text-3xl cursor-pointer" />
        <span className=" text-xl md:text-3xl font-semibold text-white">
          SeaTalk
        </span>
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className=" flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100?img=1"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">Community</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-white text-xl">
          <FaSearch />
          <FaUserPlus />
          <FaEllipsisV />
        </div>
      </div>

      <div className="flex-col items-center text-sm">
        <div className=" flex items-center gap-x-3">
          <button className=" pb-1 border-white font-bold">Home Page</button>
          <button className="pb-1 border-b-2 border-white font-bold">
            Explore
          </button>
        </div>
        <hr className="" />
        <div className="flex space-x-2 overflow-x-auto mt-2">
          {["Surabaya", "Ketapang", "Pacitan"].map((city) => (
            <button
              key={city}
              className="bg-[#199dde] text-white border border-white font-semibold px-3 py-1 rounded-full"
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col max-w-[700px] w-full mx-auto">
        {/* first post */}
        <div>
          <p className="flex items-center text-sm mt-4 text-white/90">
            <FaUsers className="mr-2" />
            Tulungagung Community
          </p>
          <div className="bg-[#1e64ac] max-w-[700px] rounded-2xl p-3 mt-3">
            <div className="flex items-center space-x-3">
              <img
                src="https://i.pravatar.cc/100?img=2"
                alt="user"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">
                  Fara Dini N.{" "}
                  <span className="text-xs text-white/60">@faradns</span>
                </p>
                <p className="text-sm mt-1 leading-5">
                  READY...
                  <br />
                  Ikan tongkol
                  <br />
                  30 BOX
                  <br />
                  buat tanggal 24 Juli 2025 😘😘
                </p>
              </div>
            </div>
            <img src={Chat} alt="post" className="w-[300px] rounded-xl mt-3" />
            <div className="flex justify-between items-center text-sm mt-2">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <FaCommentAlt className="mr-1" />
                  150
                </span>
                <span className="flex items-center">
                  <FaUsers className="mr-1" />
                  25
                </span>
                <span className="flex items-center">
                  <FaThumbsUp className="mr-1" />
                  46
                </span>
              </div>
              <FaBookmark />
            </div>
          </div>
        </div>

        {/* second post */}
        <div>
          <p className="flex items-center text-sm mt-6 text-white/90">
            <FaUsers className="mr-2" />
            Ketapang Community
          </p>
          <div className="bg-[#1e64ac] max-w-[700px] rounded-2xl p-3 mt-3">
            <div className="flex items-center space-x-3">
              <img
                src="https://i.pravatar.cc/100?img=3"
                alt="user"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">Fara Dini N.</p>
                <p className="text-sm mt-1 leading-5">
                  READY...
                  <br />
                  Udang freshhh
                  <br />
                  100 BOX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeaTalkMobile;
