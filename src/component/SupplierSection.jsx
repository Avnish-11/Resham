import { useNavigate } from 'react-router-dom';

function SupplierSection() {
  const navigate = useNavigate();

  const handleSupplierClick = () => {
    navigate('/congrats');
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-6 sm:px-10 md:px-16 lg:px-[166px] bg-[#E8FBFF] h-auto lg:h-[254px]">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-popins font-semibold text-center lg:text-left">
        Let Suppliers{" "}
        <span className="underline decoration-[#EB7150] decoration-4 underline-offset-[6px]">
          Find You
        </span>
      </h2>
      <button
        onClick={handleSupplierClick}
        className="mt-4 lg:mt-0 px-8 sm:px-12 lg:px-[52px] py-3 sm:py-4 font-popins font-bold text-sm sm:text-lg text-white bg-[#EB7150] rounded hover:bg-red-600 transition"
      >
        Get Verified
      </button>
    </section>
  );
}

export default SupplierSection;
