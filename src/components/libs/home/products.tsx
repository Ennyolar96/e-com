import { Link } from "react-router-dom";

const Products = (props: any) => {
  const { Product1, Product2 } = props;
  return (
    <>
      <div className="flex flex-row lg:flex-col">
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-4 gap-4">
            {Product1.map((item: any, index: number) => (
              <div
                className="border-r border-b last:border-none relative h-[127px] w-[223px]"
                key={index}
              >
                <div className="py-5 px-5">
                  <Link to="">
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-sm text-[#8B96A5] w-[60px]">
                      {item.des}
                    </p>
                    <img
                      src={item.image}
                      alt=""
                      className="absolute bottom-2 end-2 h-[70px] w-[70px]"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* large screen */}
        <div className="hidden  lg:grid lg:grid-cols-4 gap-4">
          {Product2.map((item: any, index: number) => (
            <div
              className="lg:border-r last:border-none relative h-auto lg:h-[127px] lg:w-[223px]"
              key={index}
            >
              <div className="py-5 px-5">
                <Link to="./details">
                  <h4 className="font-semibold text-lg">{item.name}</h4>
                  <p className="text-sm text-[#8B96A5] w-[60px]">{item.des}</p>
                  <img
                    src={item.image}
                    alt=""
                    className="absolute bottom-2 end-2 h-[70px] w-[70px]"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden border bg-white p-3 rounded-lg">
        <div className="overflow-x-auto">
          <div className="flex my-3 flex-nowrap">
            {Product1.map((item: any, index: number) => (
              <div className="lg:w-1/5" key={index}>
                <Link to="./details">
                  <img
                    src={item.image}
                    alt=""
                    width={155}
                    className="p-2 rounded-lg object-contain object-center w-full h-32 block"
                  />
                </Link>
                <div>
                  <h5 className="text-[0.65rem] font-medium text-[#505050] mt-0.5">
                    {item.name}
                  </h5>
                  <p className="text-[0.65rem] text-gray-500">{item.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
