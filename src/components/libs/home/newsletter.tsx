import { MdOutlineEmail } from "react-icons/md";

const Newsletter = () => {
  return (
    <div className="bg-[#EFF2F4] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl text-black font-semibold my-2">
            Subscribe on our newsletter
          </h3>
          <p className="text-gray-600 hover:text-gray-800 m-2 ">
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>

          <div className="relative">
            <MdOutlineEmail
              size={30}
              className="absolute top-2 start-2 text-gray-400"
            />
            <input
              type="email"
              name=""
              id=""
              className="border-2 rounded-lg w-[98%] mx-1 lg:w-80 p-2 pl-10 focus:outline-none"
              placeholder="email"
            />
            <button className="bg-[#17f] text-white ms-2 mt-2 lg:mt-0 w-[95%] lg:w-40 rounded-lg p-2 px-5">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
