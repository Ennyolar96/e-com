import { Link } from "react-router-dom";
import { Offer } from "../../helpers/offer";

const Deals = () => {
  return (
    <div className="container mx-auto my-7">
      <div className="border rounded-lg px-1 lg:px-5 py-1 bg-white">
        <div className="flex flex-col lg:flex-row ">
          <div className="w-full lg:w-1/4">
            <div className="lg:me-1 py-5 h-auto lg:h-full border-r">
              <div className="flex lg:flex-col">
                <div className="flex-1">
                  <h3 className="font-bold text-lg">Deals and offers</h3>
                  <p className="text-sm lg:text-md font-normal text-[#999] lg:mb-5">
                    Hygiene equipments
                  </p>
                </div>

                <div className="flex-1">
                  <div className="flex flex-row">
                    <div className="hidden lg:block bg-gray-200 lg:bg-[#666] py-2 px-4 mx-1 rounded-md">
                      <h3 className="text-base font-semibold text-center text-black  lg:text-white">
                        04
                      </h3>
                      <p className="text-xs font-light text-black lg:text-white">
                        Days
                      </p>
                    </div>

                    <div className="bg-gray-200 lg:bg-[#666] py-2 px-4 mx-1 rounded-md">
                      <h3 className="text-base font-semibold text-center text-black  lg:text-white">
                        13
                      </h3>
                      <p className="text-xs font-light text-black lg:text-white">
                        Hour
                      </p>
                    </div>

                    <div className="bg-gray-200 lg:bg-[#666] py-2 px-4 mx-1 rounded-md">
                      <h3 className="text-base font-semibold text-center text-black  lg:text-white">
                        34
                      </h3>
                      <p className="text-xs font-light text-black lg:text-white">
                        Min
                      </p>
                    </div>

                    <div className="bg-gray-200 lg:bg-[#666] py-2 px-4 mx-1 rounded-md">
                      <h3 className="text-base font-semibold text-center text-black  lg:text-white">
                        56
                      </h3>
                      <p className="text-xs font-light text-black lg:text-white">
                        Sec
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto lg:overflow-x-hidden">
            <div className="flex">
              {Offer.map((item: any, index: number) => (
                <div className="w-full border-r last:border-none" key={index}>
                  <div className="h-full  p-6 mx-1 justify-center flex flex-col items-center">
                    <Link to="./details">
                      <img
                        src={item.image}
                        className="object-contain object-center w-full h-full block"
                        alt=""
                      />
                    </Link>
                    <div className="mt-5">
                      <h4 className="font-medium ">{item.name}</h4>
                      <p className="bg-[#fee] text-[#f34] font-medium mx-auto w-20 p-1 text-center rounded-full">
                        {item.offers}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
