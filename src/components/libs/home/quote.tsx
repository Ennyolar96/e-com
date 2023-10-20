import styles from "./banner.module.css";
const Quote = () => {
  return (
    <div className="container mx-auto">
      <div className={styles.quote}>
        <div className="grid md:grid-cols-2">
          <div className="lg:p-6">
            <h3 className="font-bold text-2xl lg:text-3xl lg:w-[400px] text-white">
              An easy way to send requests to all suppliers
            </h3>
            <p className="hidden lg:block mt-3 font-medium w-[450px] text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit, Ducimus
              quia rerum eum explicabo.
            </p>

            <button className="lg:hidden bg-[#0067FF] mt-3 p-3 text-white rounded-md font-bold">
              Send inquiry
            </button>
          </div>

          <div className="hidden lg:block bg-white rounded-lg p-5  h-[346px]">
            <form>
              <h5 className="font-semibold mb-5 text-center text-lg">
                Send quote to suppliers
              </h5>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  className="block w-full p-3 text-sm text-gray-900 border  rounded-lg  dark:placeholder-black"
                  placeholder="What item you need?"
                />
              </div>
              <div className="mt-3">
                <textarea
                  name=""
                  id=""
                  className="block w-full h-20 p-3 text-sm text-gray-900 border  rounded-lg  dark:placeholder-black"
                  placeholder="Type more details"
                ></textarea>
              </div>

              <div className="flex flex-row mt-4">
                <div className="flex-1">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="block w-full p-2 text-sm text-gray-900 border  rounded-lg  dark:placeholder-black"
                    placeholder="Quantity"
                  />
                </div>
                <div className="flex-1">
                  <select
                    name=""
                    id=""
                    className="block w-40 p-2 ms-2 text-sm text-gray-900 bg-transparent border focus:outline-none  rounded-lg  dark:placeholder-black"
                  >
                    <option value="">Pcs</option>
                  </select>
                </div>
              </div>

              <button className="bg-[#17f] p-3 px-6 text-white rounded-md mt-5">
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
