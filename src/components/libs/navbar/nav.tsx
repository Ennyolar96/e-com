import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiLockAlt, BiMessageDetail } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full py-2 bg-white">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>

            <div className="md:ms-0">
              <div className="flex flex-row">
                <div className="mt-1 text-2xl me-1 bg-[#17f] text-[#fff] p-1 rounded">
                  <BiLockAlt />
                </div>
                <h1 className="text-3xl"> Brand</h1>
              </div>
            </div>

            <div className="hidden md:flex gap-x-6 ">
              <form>
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search"
                  className="border w-96 rounded-l-lg px-2 pt-[8px] pb-[7px]  outline-0 border-[#17f]"
                />
                <select
                  name=""
                  id=""
                  className="border py-[9px] px-2 outline-0 bg-white border-[#17f]"
                >
                  <option value="all-category">All category</option>
                </select>
                <button className="bg-[#17f] pt-[9px] pb-[8px] px-6  rounded-r-lg text-white">
                  Search
                </button>
              </form>
            </div>
            <div className="hidden md:block">
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

            <div className="md:hidden">
              <button className="ms-8 text-[#99a]">
                <FaUserAlt size={20} className="ms-1.5" />
                <span className="text-xs text-center">Profile</span>
              </button>

              <button className="ms-8 text-[#99a]">
                <AiOutlineShoppingCart size={20} className="ms-1" />
                <span className="text-xs text-center">Carts</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
