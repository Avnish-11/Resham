import { useState, useRef, useCallback } from "react";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

function HeroSection() {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const searchRef = useRef(null);

  const handleSearch = useCallback(() => {
    console.log("Searching:", service, location);
  }, [service, location]);

  return (
    <section className="flex flex-col items-center justify-center h-auto md:h-[609px] text-center bg-cover bg-hero-pattern px-4 md:px-0">
      <h1 className="text-[32px] leading-[40px] md:text-[55px] md:leading-[66px] font-bold text-white font-popins">
        Are You a Supplier?
      </h1>
      <p className="text-[20px] leading-[30px] md:text-[55px] md:leading-[66px] text-white font-popins">
        Explore Matching Opportunities.
      </p>
      <div className="flex flex-col md:flex-row gap-2.5 mt-8 w-full max-w-[90%] md:max-w-[80%] lg:max-w-[60%]">
        <div className="relative flex items-center w-full">
          <BsBriefcaseFill className="absolute left-4 w-[21px] h-[21px] text-[#E7760D]" />
          <input
            ref={searchRef}
            type="text"
            placeholder="Search your required service here"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full h-[56px] px-14 py-3 md:py-5 pl-12 rounded-[5px] border border-gray-300 focus:outline-none"
          />
        </div>
        <div className="relative flex items-center w-full">
          <FaMapMarkerAlt className="absolute left-4 w-[21px] h-[21px] text-[#E7760D]" />
          <input
            type="text"
            placeholder="Search your desired location here"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full h-[56px] px-14 py-3 md:py-5 pl-12 rounded-[5px] border border-gray-300 focus:outline-none"
          />
        </div>
        <button
          onClick={handleSearch}
          className="w-full md:max-w-[118px] px-6 py-3 md:py-4 bg-[#00732F] text-white font-inter font-bold text-base rounded"
        >
          Search
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
