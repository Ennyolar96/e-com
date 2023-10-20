import { useState } from "react";
import {
  AiFillHeart,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { BiLockAlt, BiMessageDetail } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import SubNavBar from "./navbar/subNavBar";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  //   justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8
  return (
    <div>
      <nav className="w-full shadow">
        <div className="flex ">
          <div>
            <div className="flex items-center py-3 md:block">
              <div className="md:hidden">
                <button
                  className="p-2 text-black rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <RxCross1 className="" />
                  ) : (
                    <AiOutlineMenu className="" />
                  )}
                </button>
              </div>

              <a href="#" className="">
                <div className="flex flex-row">
                  <div className="mt-1 text-2xl me-1 bg-[#17f] text-[#fff] p-1 rounded">
                    <BiLockAlt />
                  </div>
                  <h1 className="text-3xl"> Brand</h1>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              {/* nav content here */}
              <div className="flex">
                <div className="mt-[5px]">
                  <form>
                    <input
                      type="search"
                      name=""
                      id=""
                      placeholder="Search"
                      className="border rounded-l-lg w-fl px-[2px] py-[0.21rem] outline-0 border-[#17f]"
                    />
                    <select
                      name=""
                      id=""
                      className="border p-[0.3rem] outline-0 bg-white border-[#17f]"
                    >
                      <option value="all-category">All category</option>
                    </select>
                    <button className="bg-[#17f] py-[0.29rem] px-3  rounded-r-lg text-white">
                      Search
                    </button>
                  </form>
                </div>

                <div className="ms-5 text-center">
                  <button className="ms-8 text-[#99a]">
                    <FaUserAlt size={20} className="ms-1.5" />
                    <span className="text-xs text-center">Profile</span>
                  </button>

                  <button className="ms-8 text-[#99a]">
                    <BiMessageDetail size={20} className="ms-3" />
                    <span className="text-xs text-center">Message</span>
                  </button>

                  <button className="ms-8 text-[#99a]">
                    <AiFillHeart size={20} className="ms-1.5" />
                    <span className="text-xs text-center">Orders</span>
                  </button>

                  <button className="ms-8 text-[#99a]">
                    <AiOutlineShoppingCart size={20} className="ms-1" />
                    <span className="text-xs text-center">Carts</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <SubNavBar />
    </div>
  );
};

export default Navbar;
