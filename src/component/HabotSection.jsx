import { BsArrowRight } from "react-icons/bs";

function HabotSection() {
  return (
    <section className="flex flex-col lg:flex-row p-6 sm:p-10 md:p-16 lg:p-28 w-full gap-8 lg:gap-[146px]">
      {/* Text Section */}
      <div className="flex flex-col gap-4 sm:gap-6 w-full">
        <h2 className="font-popins font-bold text-xl sm:text-2xl md:text-4xl">
          Threads of Tradition, Woven with Elegance
        </h2>
        <p className="font-popins font-light text-sm sm:text-base md:text-lg w-full max-w-[620px]">
          Resham, a distinguished name in textile manufacturing and luxury
          clothing, stands as a beacon of excellence in the heart of
          Chhattisgarh. As the leading manufacturer of tussar and kosa silks,
          Resham’s tone reflects versatility, vocational expertise, and
          expressive elegance, capturing the spirit of silk as a timeless art
          form. Rooted in the harmonious union of art and knowledge, Resham is
          more than a brand; it is a testament to the enduring beauty and
          cultural significance of silk.
        </p>
        <div className="py-3 pl-8 sm:pl-12 md:pl-24 w-full max-w-[317px] flex gap-4 sm:gap-6 items-center bg-[#00732F] text-white font-inter font-bold text-sm sm:text-base rounded px-4 sm:px-6">
          <span>Sign up Today!</span>
          <BsArrowRight className="text-[20px] sm:text-[24px] md:text-[32px]" />
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-[541px] h-full h-max-[244px] place-items-center">
        {["Raipur", "Bhilai", "Durg", "Korba", "Bilaspur", "Ambikapur"].map(
          (city) => (
            <div
              key={city}
              className="flex justify-center items-center bg-white border cursor-pointer border-[#E7760D] h-[50px] sm:h-[60px] md:h-[65px] w-full max-w-[260px] rounded hover:bg-yellow-100 transition"
            >
              {city}
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default HabotSection;
