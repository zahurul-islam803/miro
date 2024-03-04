import { FaStarOfLife } from "react-icons/fa";
import { PiWaveformLight } from "react-icons/pi";
import { SiVolvo } from "react-icons/si";
const Trusted = () => {
  return (
    <div className="my-24">
      <p className="text-center text-gray-400 my-12">Trusted by 45M+ users</p>
      <div className="flex lg:flex-row flex-col gap-6 lg:gap-0 items-center justify-evenly font-bold text-lg">
        <div className="flex gap-1 items-center">
          <p>Walmart</p>
          <FaStarOfLife />
        </div>
        <div>
          <div className="flex">
            <PiWaveformLight />
            <PiWaveformLight />
          </div>
          <p>cisco</p>
        </div>
        <SiVolvo  size={40}/>
        <p>Deloitte.</p>
        <p>okta</p>
      </div>
    </div>
  );
};

export default Trusted;
