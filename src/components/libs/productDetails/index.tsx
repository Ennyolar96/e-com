import ProDetails from "./proDetails";
import Related from "./related";

const ProductDetails = () => {
  return (
    <div className="container mx-auto">
      <div className="my-1">
        <div className="flex">
          <p className="text-xs -mt-0.5">Home</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M8.0876 5L6.9126 6.175L10.7293 10L6.9126 13.825L8.0876 15L13.0876 10L8.0876 5Z"
              fill="#8B96A5"
            />
          </svg>
          <p className="text-xs -mt-0.5">Clothing</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M8.0876 5L6.9126 6.175L10.7293 10L6.9126 13.825L8.0876 15L13.0876 10L8.0876 5Z"
              fill="#8B96A5"
            />
          </svg>
          <p className="text-xs -mt-0.5">Mans wear</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M8.0876 5L6.9126 6.175L10.7293 10L6.9126 13.825L8.0876 15L13.0876 10L8.0876 5Z"
              fill="#8B96A5"
            />
          </svg>
          <p className="text-xs -mt-0.5">Summer clothing</p>
        </div>
      </div>
      <ProDetails />
      <Related />
      <div className="hidden lg:block bg-[#005ADE] relative my-5 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="745"
          height="120"
          viewBox="0 0 745 120"
          fill="none"
        >
          <path
            d="M0 6C0 2.68629 2.68629 0 6 0H700.47L745 120H6.00002C2.68631 120 0 117.314 0 114V6Z"
            fill="#237CFF"
          />
        </svg>

        <div className="absolute top-9 w-full">
          <div className="flex">
            <div className="ms-3">
              <h3 className="text-lg text-white font-semibold">
                Super discount on more than 100 USD
              </h3>
              <p className="text-[0.65rem] text-white">
                Have you even finally just write dummy info
              </p>
            </div>
            <button className="ms-auto me-3 rounded-lg text-white text-sm bg-[#FF9017] px-4 py-0">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
