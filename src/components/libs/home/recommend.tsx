import { Link } from "react-router-dom";
import { RecommendProd } from "../../helpers/product1";

export const Recommend = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto">
        <h3 className="text-2xl text-black font-semibold my-7">
          Recommended Items
        </h3>
        <div className="flex flex-wrap lg:-m-4">
          {RecommendProd.map((item: any, index: number) => (
            <div className="lg:w-1/5 md:w-1/3 w-1/2" key={index}>
              <div className="m-1 border-2 rounded-lg py-3 px-2 bg-white">
                <Link
                  to="./details"
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <img
                    alt="ecommerce"
                    className="lg:object-fill object-contain object-center w-full h-full block"
                    src={item.image}
                  />
                </Link>
                <div className="mt-4">
                  <p className="mt-1">${item.price}</p>
                  <h4 className="text-gray-900 title-font text-xs lg:text-base font-medium">
                    {item.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
