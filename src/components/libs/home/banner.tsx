import { Link } from "react-router-dom";
import style from "./banner.module.css";
import { BiUser } from "react-icons/bi";

const Banner = () => {
  return (
    <div>
      <section className="body-font mt-3">
        <div className="container mx-auto bg-white flex md:flex-row flex-col items-center border lg:p-3 rounded-lg">
          <div className="hidden w-1/5 lg:block">
            <ul className="me-2">
              <li className="bg-[#eff] font-semibold p-1 py-2 rounded">
                <Link to="">Automobiles</Link>
              </li>
              <li className="mt-2 p-1 py-2 font-medium rounded">
                <Link to="">Clothes and wear</Link>
              </li>
              <li className="mt-2 p-1 py-2 font-medium rounded">
                <Link to="">Home interiors</Link>
              </li>
              <li className="mt-2 p-1 py-2 font-medium rounded">
                <Link to="">Computer and tech</Link>
              </li>
              <li className="mt-2 p-1 py-2 font-medium rounded">
                <Link to="">Tools, equipments</Link>
              </li>
              <li className="mt-2 p-1 py-2 font-medium rounded">
                <Link to="">Sports and outdoor</Link>
              </li>
              <li className="mt-2 p-1 py-2 font-medium rounded">
                <Link to="">Animals and pets</Link>
              </li>
              <li className="mt-2 p-1 py-2 font-medium rounded">
                <Link to="">Machinery tools</Link>
              </li>
              <li className="mt-2 p-1 py-2 font-semibold rounded">
                <Link to="">more category</Link>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-3/5">
            <div className={style.banner}>
              <div className="p-4 py-12 lg:p-12">
                <h6 className="text-3xl mb-3 font-semibold">Latest trending</h6>
                <h1 className="text-2xl lg:text-4xl mb-3 font-bold">
                  Electronic items
                </h1>
                <button className="bg-[#fff] font-medium border-0 py-2 px-6 focus:outline-none rounded text-base">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="w-1/5 hidden lg:block">
            <div className="ms-2">
              <div className="bg-[#eff] px-3 py-4 rounded-lg">
                <div className="flex">
                  <div className="rounded-full h-10 w-10 bg-slate-700">
                    <BiUser size={30} className="text-white m-2 ms-1.5" />
                  </div>
                  <div className="ms-1 text-sm font-semibold">
                    Hi, user <br /> let's get stated
                  </div>
                </div>

                <button className="w-full bg-[#17f] mt-3 p-1 text-sm text-white rounded-lg">
                  Join now
                </button>
                <button className="w-full bg-[#fff] mt-3 p-1 text-sm text-[#17f] border rounded-lg">
                  Log in
                </button>
              </div>

              <div className="mt-3 bg-[#f83] p-5 pe-[80px] font-medium rounded-lg text-base text-white">
                <p>Get US $10 off with a new supplier</p>
              </div>

              <div className="mt-3 bg-[#5cc] p-5 pe-[80px] font-medium rounded-lg text-base text-white">
                <p>Send quotes with supplier preferences</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
