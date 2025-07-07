import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#58aafc] via-[#368fde] to-[#1e64ac]">
        <div className="p-4 px-10">
          <span className="text-[#123a72] text-6xl font-bold uppercase">
            hi!
          </span>
          <h1 className="text-6xl uppercase text-[#b1e5ff] font-bold">
            welcome
          </h1>
          <h3 className=" text-md text-[#b1e5ff] font-semibold">
            I'm waiting for you, please enter your detail
          </h3>
          <div className=" flex flex-col gap-4 mt-6 space-y-2">
            <input
              placeholder="Username, Email or Phone Number"
              className=" border-b-2 border-[#b1e5ff] outline-none py-2 text-[#b1e5ff]"
              type="text"
              name=""
              id=""
              required
            />
            <input
              placeholder="Password"
              className=" border-b-2 border-[#b1e5ff] outline-none py-2 text-[#b1e5ff]"
              type="text"
              name=""
              id=""
              required
            />
            <div class="flex items-center text-white font-semibold text-sm mt-4">
              <div class="flex-grow border-t border-blue-300"></div>
              <span class="mx-3">or Log In with</span>
              <div class="flex-grow border-t border-blue-300"></div>
            </div>
            <div className=" relative cursor-pointer">
              <button className="bg-[#b1e5ff] rounded-3xl py-2 px-4 font-semibold text-[#123a72] w-full cursor-pointer">
                Google
              </button>
              <FcGoogle className="absolute top-1/2 right-3 -translate-y-1/2 text-3xl" />
            </div>
            <div>
              <div className=" flex items-center justify-between">
                <div>
                  <input
                    className=" outline-none border-none"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span className=" text-white">Remember Me</span>
                </div>
                <button className=" text-white cursor-pointer">Forgot Password?</button>
              </div>
              <button className=" bg-[#081150] py-3 font-bold text-white w-full mt-2 cursor-pointer">
                Log In
              </button>
            </div>
            <div className=" flex items-center justify-center text-center gap-x-1">
              <h1 className=" text-white">Don't have an account?</h1>
              <button className=" text-white font-semibold cursor-pointer">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
