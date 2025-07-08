import Navbar from "../../components/Home/Navbar";
import SeaMart from "../../components/Home/SeaMart";
import SeaExplore from "../../components/Home/SeaExplore";
import BottomNavbar from "../../components/Home/BottomNavbar";
const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <SeaMart />
        <SeaExplore />
        <BottomNavbar />
      </div>    
    </>
  );
};

export default Home;
