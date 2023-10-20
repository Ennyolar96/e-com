import { BiSearch } from "react-icons/bi";
import { LuShoppingBag } from "react-icons/lu";
import { AiOutlineSend } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import extra1 from "../../../assets/extra1.png";
import extra2 from "../../../assets/extra2.png";
import extra3 from "../../../assets/extra3.png";
import extra4 from "../../../assets/extra4.png";

const Services = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto">
          <h3 className="text-2xl text-black font-semibold my-3 lg:my-7">
            Our extra services
          </h3>
          <div className="flex flex-wrap lg:-m-4">
            <div className="lg:p-4 py-1 md:w-1/4 w-1/2">
              <div className="bg-white m-1 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div
                  style={{
                    background: `linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${extra1})`,
                    backgroundPosition: "center",
                    width: "303px",
                    height: "120px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                  }}
                >
                  <div className="hidden lg:block absolute h-12 w-12 rounded-full bg-[#D1E7FF;] border-white border-2 top-[80%] end-10">
                    <BiSearch size={25} className="mt-2.5 ml-2.5" />
                  </div>
                </div>
                <div className="p-3 w-[150px]">
                  <h2 className="text-xs lg:text-base title-font text-black font-medium">
                    Source from Industry Hubs
                  </h2>
                </div>
              </div>
            </div>

            <div className="lg:p-4 py-1 md:w-1/4 w-1/2">
              <div className="bg-white m-1 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div
                  style={{
                    background: `linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${extra2})`,
                    backgroundPosition: "center",
                    width: "303px",
                    height: "120px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                  }}
                >
                  <div className="hidden lg:block absolute h-12 w-12 rounded-full bg-[#D1E7FF;] border-white border-2 top-[80%] end-10">
                    <LuShoppingBag size={25} className="mt-2.5 ml-2.5" />
                  </div>
                </div>
                <div className="p-3 w-[180px]">
                  <h2 className="text-xs lg:text-base title-font text-black font-medium">
                    Customize Your Products
                  </h2>
                </div>
              </div>
            </div>

            <div className="lg:p-4 py-1 md:w-1/4 w-1/2">
              <div className="bg-white m-1 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div
                  style={{
                    background: `linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${extra3})`,
                    backgroundPosition: "center",
                    width: "303px",
                    height: "120px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                  }}
                >
                  <div className="hidden lg:block absolute h-12 w-12 rounded-full bg-[#D1E7FF;] border-white border-2 top-[80%] end-10">
                    <AiOutlineSend size={25} className="mt-2.5 ml-2.5" />
                  </div>
                </div>
                <div className="p-3 w-[200px]">
                  <h2 className="text-xs lg:text-base title-font text-black font-medium">
                    Fas, reliable Shipping by ocean or air
                  </h2>
                </div>
              </div>
            </div>

            <div className="lg:p-4 py-1 md:w-1/4 w-1/2">
              <div className="bg-white m-1 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div
                  style={{
                    background: `linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${extra4})`,
                    backgroundPosition: "center",
                    width: "303px",
                    height: "120px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                  }}
                >
                  <div className="hidden lg:block absolute h-12 w-12 rounded-full bg-[#D1E7FF;] border-white border-2 top-[80%] end-10">
                    <MdSecurity size={25} className="mt-2.5 ml-2.5" />
                  </div>
                </div>
                <div className="p-3 w-[200px]">
                  <h2 className="text-xs lg:text-base title-font text-black font-medium">
                    Product Monitoring and inspection
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
