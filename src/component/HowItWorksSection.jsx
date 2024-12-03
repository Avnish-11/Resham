import one from "../assets/Group 33.png";
import two from "../assets/Group.png";
import three from "../assets/Layer_x0020_1.png";
import four from "../assets/edit (1) 1.png";
import five from "../assets/Group (1).png";
import six from "../assets/Group (2).png";

const steps = [
  {
    title: "Explore Resham’s Exquisite Collection",
    imgSrc: one,
  },
  {
    title: "Select Your Preferred Tussar or Kosa Silk Design",
    imgSrc: two,
  },
  {
    title: "Customize Your Handcrafted Silk Piece",
    imgSrc: three,
  },
  {
    title: "Collaborate with Our Experts for Personalized Designs",
    imgSrc: four,
  },
  {
    title: "Place Your Order and Enjoy the Elegance of Resham",
    imgSrc: five,
  },
  {
    title: "Share Your Experience and Join Our Resham Community",
    imgSrc: six,
  },
];


const HowItWorksSection = () => {
  return (
    <section className="flex justify-center py-12 px-4 w-full ">
      <div className="max-w-5xl w-full h-auto">
        <h2 className="text-3xl font-semibold text-center mt-[138px]">
        Experience the Art of Silk, Seamlessly
        </h2>
        <p className="font-popins text-lg text-center mt-[26px]">
        At Resham, buyers explore our exclusive collection of tussar and kosa silks,
         select their preferred designs, and collaborate with artisans for personalized creations. 
         Our team ensures seamless connections, fostering meaningful relationships between our craft and our patrons. 
        Together, we create timeless masterpieces and celebrate shared experiences through valuable feedback.
        </p>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-[73px] mb-[197px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 w-full h-full ${
                index % 2 === 0 ? "bg-[#E8FBFF]" : ""
              }`}
            >
              <img
                src={step.imgSrc}
                alt={step.title}
                className="w-16 h-16 mt-12"
              />
              <h3 className="text-xl font-medium mt-8">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
