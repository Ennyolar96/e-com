import { Product5 } from "../../helpers/product1";

const Related = () => {
  return (
    <div>
      <div className="border bg-white p-3 rounded-lg">
        <h4>Related Products</h4>
        <div className="overflow-x-auto">
          <div className="flex my-3 flex-nowrap">
            {Product5.map((item: any, index: number) => (
              <div className="lg:w-1/6" key={index}>
                <div className="lg:me-7 me-2">
                  <img
                    src={item.image}
                    alt=""
                    width={155}
                    className="p-2 bg-gray-500 rounded-lg object-contain object-center w-full lg:h-32 block"
                  />
                  <div className="text-center">
                    <h5 className="text-[0.55rem] lg:text-sm font-medium text-[#505050] mt-0.5">
                      {item.name}
                    </h5>
                    <p className="text-[0.65rem] lg:text-sm text-gray-500">
                      {item.des}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Related;
