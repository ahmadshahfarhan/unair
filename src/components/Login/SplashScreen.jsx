import Logo from "../../assets/elements/icann.svg";
const SplashScreen = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <img data-aos="zoom-in" src={Logo} alt="Logo" className=" w-[170px] md:w-[240px]" />
    </div>
  );
};

export default SplashScreen;
