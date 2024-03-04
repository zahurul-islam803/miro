import { FaArrowRight } from "react-icons/fa6";
import { FaStar, FaStarHalfAlt, FaGooglePlusG } from "react-icons/fa";
import heroImg from '../assets/headerimage-without-text.png'
const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-32 gap-8 mt-8">
      <div>
        <h1 className="text-6xl font-bold">
          Take ideas from <br /> better to best
        </h1>
        <p className="my-6 text-lg text-[#4B4770]">
          Miro is your team's visual platform to connect, <br /> collaborate,
          and create — together.
        </p>
        <input
          type="text"
          placeholder="Enter your work email"
          className="input input-bordered rounded-full w-full"
        />
        <div className="flex justify-center items-center lg:gap-2 bg-[#4262FF] text-white py-4 px-4 rounded-badge w-full my-2">
          <a className="">Sign Up Free</a>
          <a>
            <FaArrowRight />
          </a>
        </div>
        <p className="text-gray-400">
          Collaborate with your team within minutes
        </p>
        <div className="bg-gray-300 rounded-xl w-11/12 px-2 py-4 mt-16 flex justify-between items-center">
          <div>
            <div className="flex gap-2 text-[#FF9D48]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <p>Based on 5149+ reviews:</p>
          </div>
          <div className="flex gap-3 justify-between items-center">
            <FaGooglePlusG  size={40}/>
            <p className="font-bold">GetApp</p>
            <p className="font-bold">Capterra</p>
          </div>
        </div>
      </div>
      <div>
        <img src={heroImg} className="lg:w-[800px]" alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;