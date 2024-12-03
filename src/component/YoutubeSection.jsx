import { useState } from "react";
import check from "../assets/checked (2) 1.png"

function YoutubeSection() {
  const [activeTab, setActiveTab] = useState("buyer");

  // Content for Buyer and Supplier tabs
  const buyerContent = [
    "Post your requirements.",
    "Sit back for multiple suppliers to contact you.",
    "Choose among the suppliers based on ratings and reviews.",
  ];

  const supplierContent = [
    "Receive multiple buyer inquiries.",
    "Send quotes to buyers for the services you offer.",
    "Get rated and reviewed for better visibility.",
  ];

  return (
    <div className="bg-white px-24 p-[119px_98px_144px_98px]">
      <div className=" bg-blue-900 text-white flex p-[137px_50px_136px_72px]">
        {/* Video Placeholder */}
        <div className="w-1/2 mx-auto mt-4 h-[340px] bg-white rounded-md shadow-md overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/video-id"
            title="Video Tutorial"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
        <div className="w-1/2">
          {/* Tab Navigation */}
          <div className="flex justify-center gap-[151px]">
            <div
              onClick={() => setActiveTab("buyer")}
              className={`font-bold font-popins text-2xl  cursor-pointer relative ${
                activeTab === "buyer" ? "text-[#EB7150]" : "text-white"
              }`}
            >
              Buyer
              {activeTab === "buyer" && (
                <span className="absolute bottom-[-11px] left-1/2 transform -translate-x-1/2 w-[202px] h-[4px] bg-[#EB7150]" />
              )}
            </div>
            <div
              onClick={() => setActiveTab("supplier")}
              className={`font-bold font-popins text-2xl  cursor-pointer relative ${
                activeTab === "supplier" ? "text-[#EB7150]" : "text-white"
              }`}
            >
              Supplier
              {activeTab === "supplier" && (
                <span className="absolute bottom-[-11px] left-1/2 transform -translate-x-1/2 w-[202px] h-[4px] bg-[#EB7150]" />
              )}
            </div>
          </div>

          {/* Content under Tabs */}
          <div className="mt-16 text-center">
            <ul className="w-3/4 mx-auto">
              {(activeTab === "buyer" ? buyerContent : supplierContent).map(
                (item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-start text-left mb-2 gap-2.5"
                  >
                    <img src={check} alt="" />
                    <p>{item}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoutubeSection;
