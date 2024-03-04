import Trusted from "../Components/Trusted";
import Hero from "../Headers/Hero";
import Navbar from "../Headers/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-screen-2xl mx-auto p-2">
        <Hero></Hero>
        <Trusted></Trusted>
      </div>
    </div>
  );
};

export default Home;