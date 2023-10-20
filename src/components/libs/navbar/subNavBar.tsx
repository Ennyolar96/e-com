import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const SubNavBar = () => {
  return (
    <div className="bg-white">
      <div className="overflow-x-auto">
        <div className="flex border">
          <div className="py-2 font-medium flex">
            <button className="ms-5 flex-1 w-9">
              <AiOutlineMenu size={25} />
            </button>
            <Link to="" className="text-base w-28">
              All category
            </Link>
            <Link to="" className="text-base w-28">
              Hot offers
            </Link>
            <Link to="" className="text-base w-28">
              Gift boxes
            </Link>
            <Link to="" className="text-base w-28">
              Projects
            </Link>
            <Link to="" className="text-base w-28">
              Menu-Item
            </Link>
            <Link to="" className="text-base w-28">
              Help
            </Link>
          </div>

          <div className="ms-auto py-2 font-medium">
            <div className="flex flex-row">
              <div className="w-32">
                <div className="flex flex-row">
                  <p>English</p>
                  <select
                    name=""
                    id=""
                    className="bg-[transparent] outline-none"
                  >
                    <option value="USD">USD</option>
                  </select>
                </div>
              </div>

              <div className="w-32">
                <div className="flex flex-row">
                  <p>Ship to</p>
                  <select
                    name=""
                    id=""
                    className="bg-[transparent] outline-none"
                  >
                    <option value="USD">Spin</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNavBar;
