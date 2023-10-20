import Banner from "../libs/home/banner";
import Deals from "../libs/home/deals";
import Products from "../libs/home/products";
import styles from "../libs/home/banner.module.css";
import { Product1, Product2, Product3, Product4 } from "../helpers/product1";
import Quote from "../libs/home/quote";
import { Recommend } from "../libs/home/recommend";
import Services from "../libs/home/services";
import Supplier from "../libs/home/supplier";
import Newsletter from "../libs/home/newsletter";

const Home = () => {
  return (
    <div>
      <Banner />
      <Deals />

      <div className="container mx-auto">
        <div className="border rounded-lg bg-white">
          <div className="flex flex-col lg:flex-row">
            <div className="hidden lg:block lg:w-1/4 ">
              <div className={styles.product1}>
                <div className="p-4">
                  <h3 className="font-semibold text-[20px] w-[130px] tracking-[-0.2px] leading-8">
                    Home and outdoor
                  </h3>

                  <button className="bg-white font-medium mt-3 rounded-md py-2 px-4">
                    Source now
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-3/4">
              <Products
                Product1={Product1}
                Product2={Product2}
                title="Home and outdoor"
              />
            </div>
          </div>

          {/* <div className="overflow-x-auto">
            <div className="flex lg:hidden">
              {Product1.map((item: any, index: number) => (
                <div className="" key={index}>
                  <div className="">
                    <img src={item.image} alt="" />
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-sm text-[#8B96A5]">{item.des}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        <div className="border mt-8 rounded-lg bg-white">
          <div className="flex flex-col lg:flex-row">
            <div className="hidden lg:block lg:w-1/4">
              <div className={styles.product2}>
                <div className="p-4">
                  <h3 className="font-semibold text-[20px] w-[160px] tracking-[-0.2px] leading-8">
                    Consumer electronics and gadgets
                  </h3>

                  <button className="bg-white font-medium mt-3 rounded-md py-2 px-4">
                    Source now
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-3/4">
              <Products
                Product1={Product3}
                Product2={Product4}
                title="Home and outdoor"
              />
            </div>
          </div>
        </div>
      </div>

      <Quote />
      <Recommend />
      <Services />
      <Supplier />
      <Newsletter />
    </div>
  );
};

export default Home;
