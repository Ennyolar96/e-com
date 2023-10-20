import ProductImage1 from "../../../assets/pro1.png";
import ProductImage2 from "../../../assets/pro2.png";
import ProductImage3 from "../../../assets/pro3.png";
import ProductImage4 from "../../../assets/pro4.png";
import ProductImage5 from "../../../assets/suit.png";
import flag from "../../../assets/germany.png";

const ProDetails = () => {
  return (
    <div className="mx-1">
      <div className="grid md:grid-cols-3 bg-white lg:border-2 rounded-lg">
        <div className="m-3">
          <div className="flex flex-col">
            <div className="flex-1">
              <img
                src={ProductImage1}
                alt=""
                className="w-[345px] h-[345px] rounded-lg border-2"
              />
            </div>
            <div className="hidden lg:block flex-1">
              <div className="flex">
                <img
                  src={ProductImage1}
                  alt=""
                  className="h-12 w-12 my-1 rounded-md me-3 border-2"
                />
                <img
                  src={ProductImage2}
                  alt=""
                  className="h-12 w-12 my-1 rounded-md me-3 border-2"
                />
                <img
                  src={ProductImage3}
                  alt=""
                  className="h-12 w-12 my-1 rounded-md me-3 border-2"
                />
                <img
                  src={ProductImage4}
                  alt=""
                  className="h-12 w-12 my-1 rounded-md me-3 border-2"
                />
                <img
                  src={ProductImage1}
                  alt=""
                  className="h-12 w-12 my-1 rounded-md me-3 border-2"
                />
                <img
                  src={ProductImage2}
                  alt=""
                  className="h-12 w-12 my-1 rounded-md border-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="me-4">
          <div className="hidden lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.79508 15.875L4.62508 11.705L3.20508 13.115L8.79508 18.705L20.7951 6.70504L19.3851 5.29504L8.79508 15.875Z"
                fill="#00B517"
              />
            </svg>
            <p className="text-xs text-green-600">in stock</p>
          </div>

          <p className="hidden lg:block text-md font-semibold text-[#1C1C1C] w-[350px]">
            Mean long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </p>

          <div className="flex mt-1">
            <div className="flex me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="15"
                viewBox="0 0 80 15"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M72 12.0553L76.944 15L75.632 9.45L80 5.71579L74.248 5.23421L72 0L69.752 5.23421L64 5.71579L68.368 9.45L67.056 15L72 12.0553Z"
                  fill="#D5CDC5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M56 12.0553L60.944 15L59.632 9.45L64 5.71579L58.248 5.23421L56 0L53.752 5.23421L48 5.71579L52.368 9.45L51.056 15L56 12.0553Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M40 12.0553L44.944 15L43.632 9.45L48 5.71579L42.248 5.23421L40 0L37.752 5.23421L32 5.71579L36.368 9.45L35.056 15L40 12.0553Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 12.0553L28.944 15L27.632 9.45L32 5.71579L26.248 5.23421L24 0L21.752 5.23421L16 5.71579L20.368 9.45L19.056 15L24 12.0553Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z"
                  fill="#FF9017"
                />
              </svg>
              <span className="text-sm -mt-0.5  ms-1 text-[#FF9017]">9.3</span>
            </div>

            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
            >
              <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
            </svg> */}

            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M3.33317 3.33329H16.6665V13.3333H4.30817L3.33317 14.3083V3.33329ZM3.33317 1.66663C2.4165 1.66663 1.67484 2.41663 1.67484 3.33329L1.6665 18.3333L4.99984 15H16.6665C17.5832 15 18.3332 14.25 18.3332 13.3333V3.33329C18.3332 2.41663 17.5832 1.66663 16.6665 1.66663H3.33317ZM4.99984 9.99996H14.9998V11.6666H4.99984V9.99996ZM4.99984 7.49996H14.9998V9.16663H4.99984V7.49996ZM4.99984 4.99996H14.9998V6.66663H4.99984V4.99996Z"
                  fill="#8B96A5"
                />
              </svg>{" "}
              <p className="text-xs -mt-0.5">32 reviews</p>
            </div>

            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
            >
              <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
            </svg> */}

            <div className="ms-3">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18.3335 7.90834H14.3418L10.6918 2.44167C10.5335 2.20834 10.2668 2.09167 10.0002 2.09167C9.7335 2.09167 9.46683 2.20834 9.3085 2.45001L5.6585 7.90834H1.66683C1.2085 7.90834 0.833496 8.28334 0.833496 8.74167C0.833496 8.81667 0.841829 8.89167 0.866829 8.96667L2.9835 16.6917C3.17516 17.3917 3.81683 17.9083 4.5835 17.9083H15.4168C16.1835 17.9083 16.8252 17.3917 17.0252 16.6917L19.1418 8.96667L19.1668 8.74167C19.1668 8.28334 18.7918 7.90834 18.3335 7.90834ZM10.0002 4.40834L12.3335 7.90834H7.66683L10.0002 4.40834ZM15.4168 16.2417L4.59183 16.25L2.7585 9.57501H17.2502L15.4168 16.2417ZM10.0002 11.2417C9.0835 11.2417 8.3335 11.9917 8.3335 12.9083C8.3335 13.825 9.0835 14.575 10.0002 14.575C10.9168 14.575 11.6668 13.825 11.6668 12.9083C11.6668 11.9917 10.9168 11.2417 10.0002 11.2417Z"
                    fill="#8B96A5"
                  />
                </svg>{" "}
                <p className="text-xs">154 sold</p>
              </div>
            </div>
          </div>

          <p className="lg:hidden text-md font-semibold text-[#1C1C1C]">
            Mean long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </p>

          {/* price tag */}
          <div className="lg:hidden">
            <div className="flex">
              <h5 className="text-md font-semibold text-red-600">$98.00</h5>
              <p className="text-xs text-gray-400 ms-1 mt-0.5">[50-100pcs]</p>
            </div>
          </div>

          <div className="hidden lg:block mt-2">
            <div className="flex bg-[#ffe] justify-center">
              <div className="border-r-2 py-3 pe-3">
                <h5 className="text-sm text-red-600">$98.00</h5>
                <p className="text-xs text-gray-400">50-100pcs</p>
              </div>

              <div className="border-r-2 p-3">
                <h5 className="text-sm">$90.00</h5>
                <p className="text-xs text-gray-400">100-700pcs</p>
              </div>

              <div className="p-3">
                <h5 className="text-sm">$78.00</h5>
                <p className="text-xs">700+pcs</p>
              </div>
            </div>
          </div>

          {/* price details */}
          <div className="hidden lg:block mt-2 p-2">
            <div className="border-b flex">
              <p className="text-xs text-[#8B96A5]">Price: </p>
              <p className="ms-10 text-[#505050] text-sm">Negotiable</p>
            </div>

            <div className="border-b py-3">
              <div className="flex">
                <p className="text-xs text-[#8B96A5]">Type:</p>
                <p className="ms-10 text-[#505050] text-sm">Classic shoes</p>
              </div>

              <div className="flex">
                <p className="text-xs text-[#8B96A5]">Material:</p>
                <p className="ms-6 text-[#505050] text-sm">Plastic Material</p>
              </div>

              <div className="flex">
                <p className="text-xs text-[#8B96A5]">Design:</p>
                <p className="text-[#505050] text-sm ms-7">Modern nice</p>
              </div>
            </div>

            <div className="border-b py-3">
              <div className="flex py-1">
                <p className="text-xs text-[#8B96A5]">Customization:</p>
                <p className="text-[#505050] text-sm ms-9 w-[189px]">
                  Customized logo and design custom package
                </p>
              </div>

              <div className="flex">
                <p className="text-xs text-[#8B96A5]">Protection:</p>
                <p className="text-[#505050] text-sm ms-14">Refund Policy</p>
              </div>

              <div className="flex py-1">
                <p className="text-xs text-[#8B96A5]">Warranty:</p>
                <p className="text-[#505050] text-sm ms-16">
                  2years full warranty
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* supplier side */}
        <div className="hidden lg:block">
          <div className="border-2 w-[280px] m-3 rounded-md">
            <div className="flex border-b p-1">
              <h2 className="font-black bg-[#C6F3F1] rounded-sm px-3 text-[#4CA7A799] py-1 text-lg">
                R
              </h2>
              <p className="text-xs ms-2">
                Supplier <br /> Guanjo Trading LLC
              </p>
            </div>

            <div className="flex px-1 py-0.5">
              <img src={flag} alt="" width={21} height={21} />
              <p className="text-xs text-[#8B96A5] ms-2">Germany, Berlin</p>
            </div>

            <div className="flex px-1 py-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 0.833374L2.5 4.16671V9.16671C2.5 13.7917 5.7 18.1167 10 19.1667C14.3 18.1167 17.5 13.7917 17.5 9.16671V4.16671L10 0.833374ZM15.8333 9.16671C15.8333 12.9334 13.35 16.4084 10 17.4417C6.65 16.4084 4.16667 12.9334 4.16667 9.16671V5.25004L10 2.65837L15.8333 5.25004V9.16671ZM6.175 9.65837L5 10.8334L8.33333 14.1667L15 7.50004L13.825 6.31671L8.33333 11.8084L6.175 9.65837Z"
                  fill="#8B96A5"
                />
              </svg>
              <p className="text-xs text-[#8B96A5] ms-2">verified Seller</p>
            </div>

            <div className="flex px-1 py-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.9915 1.66663C5.3915 1.66663 1.6665 5.39996 1.6665 9.99996C1.6665 14.6 5.3915 18.3333 9.9915 18.3333C14.5998 18.3333 18.3332 14.6 18.3332 9.99996C18.3332 5.39996 14.5998 1.66663 9.9915 1.66663ZM15.7665 6.66663H13.3082C13.0415 5.62496 12.6582 4.62496 12.1582 3.69996C13.6915 4.22496 14.9665 5.29163 15.7665 6.66663ZM9.99984 3.36663C10.6915 4.36663 11.2332 5.47496 11.5915 6.66663H8.40817C8.7665 5.47496 9.30817 4.36663 9.99984 3.36663ZM3.54984 11.6666C3.4165 11.1333 3.33317 10.575 3.33317 9.99996C3.33317 9.42496 3.4165 8.86663 3.54984 8.33329H6.3665C6.29984 8.88329 6.24984 9.43329 6.24984 9.99996C6.24984 10.5666 6.29984 11.1166 6.3665 11.6666H3.54984ZM4.23317 13.3333H6.6915C6.95817 14.375 7.3415 15.375 7.8415 16.3C6.30817 15.775 5.03317 14.7166 4.23317 13.3333ZM6.6915 6.66663H4.23317C5.03317 5.28329 6.30817 4.22496 7.8415 3.69996C7.3415 4.62496 6.95817 5.62496 6.6915 6.66663ZM9.99984 16.6333C9.30817 15.6333 8.7665 14.525 8.40817 13.3333H11.5915C11.2332 14.525 10.6915 15.6333 9.99984 16.6333ZM11.9498 11.6666H8.04984C7.97484 11.1166 7.9165 10.5666 7.9165 9.99996C7.9165 9.43329 7.97484 8.87496 8.04984 8.33329H11.9498C12.0248 8.87496 12.0832 9.43329 12.0832 9.99996C12.0832 10.5666 12.0248 11.1166 11.9498 11.6666ZM12.1582 16.3C12.6582 15.375 13.0415 14.375 13.3082 13.3333H15.7665C14.9665 14.7083 13.6915 15.775 12.1582 16.3ZM13.6332 11.6666C13.6998 11.1166 13.7498 10.5666 13.7498 9.99996C13.7498 9.43329 13.6998 8.88329 13.6332 8.33329H16.4498C16.5832 8.86663 16.6665 9.42496 16.6665 9.99996C16.6665 10.575 16.5832 11.1333 16.4498 11.6666H13.6332Z"
                  fill="#8B96A5"
                />
              </svg>

              <p className="text-xs text-[#8B96A5] ms-2">Worldwide shipping</p>
            </div>

            <div>
              <button className="w-[95%] bg-[#17f] rounded-md text-sm text-white p-1 mt-2 mx-2">
                Send inquiry
              </button>
              <button className="w-[95%] border-2 rounded-md text-sm text-[#1C1C1C] p-1 my-2 mx-2">
                Seller's profile
              </button>
            </div>
          </div>
          <div className="flex w-[280px] justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.5 2.82495C14.76 2.82495 13.09 3.63495 12 4.91495C10.91 3.63495 9.24 2.82495 7.5 2.82495C4.42 2.82495 2 5.24495 2 8.32495C2 12.105 5.4 15.185 10.55 19.865L12 21.175L13.45 19.855C18.6 15.185 22 12.105 22 8.32495C22 5.24495 19.58 2.82495 16.5 2.82495ZM12.1 18.375L12 18.475L11.9 18.375C7.14 14.065 4 11.215 4 8.32495C4 6.32495 5.5 4.82495 7.5 4.82495C9.04 4.82495 10.54 5.81495 11.07 7.18495H12.94C13.46 5.81495 14.96 4.82495 16.5 4.82495C18.5 4.82495 20 6.32495 20 8.32495C20 11.215 16.86 14.065 12.1 18.375Z"
                fill="#0D6EFD"
              />
            </svg>
            <p className="text-xs ms-1 text-[#0D6EFD]">Save for later</p>
          </div>
        </div>

        <div className="lg:hidden flex pb-5 pt-3">
          <button className="bg-[#17f] w-full rounded-md text-sm text-white p-2 me-1">
            Send inquiry
          </button>
          <button className="border px-2 rounded-lg mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.5 2.82495C14.76 2.82495 13.09 3.63495 12 4.91495C10.91 3.63495 9.24 2.82495 7.5 2.82495C4.42 2.82495 2 5.24495 2 8.32495C2 12.105 5.4 15.185 10.55 19.865L12 21.175L13.45 19.855C18.6 15.185 22 12.105 22 8.32495C22 5.24495 19.58 2.82495 16.5 2.82495ZM12.1 18.375L12 18.475L11.9 18.375C7.14 14.065 4 11.215 4 8.32495C4 6.32495 5.5 4.82495 7.5 4.82495C9.04 4.82495 10.54 5.81495 11.07 7.18495H12.94C13.46 5.81495 14.96 4.82495 16.5 4.82495C18.5 4.82495 20 6.32495 20 8.32495C20 11.215 16.86 14.065 12.1 18.375Z"
                fill="#0D6EFD"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* product details small screen */}
      <div className="bg-white my-2 border rounded-lg p-2">
        <table>
          <tbody className="">
            <tr className="text-xs">
              <td className="pt-1 text-gray-500">Condition</td>
              <td className="px-2">Brand new</td>
            </tr>

            <tr className="text-xs">
              <td className="pt-1 text-gray-500">Materials</td>
              <td className="px-2">Plastics</td>
            </tr>

            <tr className="text-xs">
              <td className="pt-1 text-gray-500">Category</td>
              <td className="px-2">Electronics gadgets</td>
            </tr>

            <tr className="text-xs">
              <td className="pt-1 text-gray-500">Item Num</td>
              <td className="px-2">23421</td>
            </tr>
          </tbody>
        </table>

        <p className="text-xs py-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
          asperiores qui facilis eum modi, deserunt laudantium numquam quos
          molestiae hic,
        </p>
        <button className="text-[#17f] text-sm font-semibold">Read more</button>
      </div>

      <div className="lg:hidden bg-white border my-4 p-2 rounded-lg">
        <div className="">
          <div className="flex border-b py-3">
            <h2 className="font-black bg-[#C6F3F1] rounded-sm px-3 text-[#4CA7A799] py-1 text-lg">
              R
            </h2>
            <p className="text-sm ms-2">
              Supplier <br /> Guanjo Trading LLC
            </p>
          </div>

          <div className="flex mt-2">
            <div className="flex px-1 py-0.5">
              <img src={flag} alt="" width={21} height={21} />
              <p className="text-xs text-[#8B96A5] ms-1">Germany</p>
            </div>

            <div className="flex px-1 py-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 0.833374L2.5 4.16671V9.16671C2.5 13.7917 5.7 18.1167 10 19.1667C14.3 18.1167 17.5 13.7917 17.5 9.16671V4.16671L10 0.833374ZM15.8333 9.16671C15.8333 12.9334 13.35 16.4084 10 17.4417C6.65 16.4084 4.16667 12.9334 4.16667 9.16671V5.25004L10 2.65837L15.8333 5.25004V9.16671ZM6.175 9.65837L5 10.8334L8.33333 14.1667L15 7.50004L13.825 6.31671L8.33333 11.8084L6.175 9.65837Z"
                  fill="#8B96A5"
                />
              </svg>
              <p className="text-xs text-[#8B96A5] ms-1">verified</p>
            </div>

            <div className="flex px-1 py-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.9915 1.66663C5.3915 1.66663 1.6665 5.39996 1.6665 9.99996C1.6665 14.6 5.3915 18.3333 9.9915 18.3333C14.5998 18.3333 18.3332 14.6 18.3332 9.99996C18.3332 5.39996 14.5998 1.66663 9.9915 1.66663ZM15.7665 6.66663H13.3082C13.0415 5.62496 12.6582 4.62496 12.1582 3.69996C13.6915 4.22496 14.9665 5.29163 15.7665 6.66663ZM9.99984 3.36663C10.6915 4.36663 11.2332 5.47496 11.5915 6.66663H8.40817C8.7665 5.47496 9.30817 4.36663 9.99984 3.36663ZM3.54984 11.6666C3.4165 11.1333 3.33317 10.575 3.33317 9.99996C3.33317 9.42496 3.4165 8.86663 3.54984 8.33329H6.3665C6.29984 8.88329 6.24984 9.43329 6.24984 9.99996C6.24984 10.5666 6.29984 11.1166 6.3665 11.6666H3.54984ZM4.23317 13.3333H6.6915C6.95817 14.375 7.3415 15.375 7.8415 16.3C6.30817 15.775 5.03317 14.7166 4.23317 13.3333ZM6.6915 6.66663H4.23317C5.03317 5.28329 6.30817 4.22496 7.8415 3.69996C7.3415 4.62496 6.95817 5.62496 6.6915 6.66663ZM9.99984 16.6333C9.30817 15.6333 8.7665 14.525 8.40817 13.3333H11.5915C11.2332 14.525 10.6915 15.6333 9.99984 16.6333ZM11.9498 11.6666H8.04984C7.97484 11.1166 7.9165 10.5666 7.9165 9.99996C7.9165 9.43329 7.97484 8.87496 8.04984 8.33329H11.9498C12.0248 8.87496 12.0832 9.43329 12.0832 9.99996C12.0832 10.5666 12.0248 11.1166 11.9498 11.6666ZM12.1582 16.3C12.6582 15.375 13.0415 14.375 13.3082 13.3333H15.7665C14.9665 14.7083 13.6915 15.775 12.1582 16.3ZM13.6332 11.6666C13.6998 11.1166 13.7498 10.5666 13.7498 9.99996C13.7498 9.43329 13.6998 8.88329 13.6332 8.33329H16.4498C16.5832 8.86663 16.6665 9.42496 16.6665 9.99996C16.6665 10.575 16.5832 11.1333 16.4498 11.6666H13.6332Z"
                  fill="#8B96A5"
                />
              </svg>

              <p className="text-xs text-[#8B96A5] ms-1">shipping</p>
            </div>
          </div>
        </div>
      </div>

      {/* product other details */}
      <div className="hidden lg:flex flex-row">
        <div className="bg-white my-3 p-3 rounded-lg border-2">
          <div className="flex border-b-2">
            <p className=" text-xs text-[#0D6EFD] border-b-2 border-[#0D6EFD]">
              Description
            </p>
            <p className="ms-10 text-xs text-gray-500 ">Reviews</p>
            <p className="ms-10 text-xs text-gray-500 ">Shipping</p>
            <p className="ms-10 text-xs text-gray-500 ">About seller</p>
          </div>

          <p className="text-xs py-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            asperiores qui facilis eum modi, deserunt laudantium numquam quos
            molestiae hic, debitis explicabo ad et ab! Quasi, fugit! Laborum,
            quod dolorem. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quaerat corporis blanditiis animi nobis corrupti, eos cumque
            fugit. Exercitationem illum nisi deserunt ad quaerat aut sequi quia
            magni in? Neque, quam.
          </p>

          <table>
            <tbody className="border">
              <tr className="text-xs border-b border-gray-300">
                <td className="bg-gray-200 w-32 p-1">model</td>
                <td className="px-2">#8786687</td>
              </tr>

              <tr className="text-xs border-b border-gray-300">
                <td className="bg-gray-200 w-32 p-1">Style</td>
                <td className="px-2">Classic style</td>
              </tr>

              <tr className="text-xs border-b border-gray-300">
                <td className="bg-gray-200 w-32 p-1">Certificate</td>
                <td className="px-2">ISO-898921212</td>
              </tr>

              <tr className="text-xs border-b border-gray-300">
                <td className="bg-gray-200 w-32 p-1">Size</td>
                <td className="px-2">34mm x 450mm x 19mm</td>
              </tr>

              <tr className="text-xs border-b border-gray-300">
                <td className="bg-gray-200 w-32 p-1">Memory</td>
                <td className="px-2">36GB RAM</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-2">
            <div className="flex mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7.32923 13.2291L3.85423 9.75414L2.6709 10.9291L7.32923 15.5875L17.3292 5.58748L16.1542 4.41248L7.32923 13.2291Z"
                  fill="#8B96A5"
                />
              </svg>
              <p className="text-xs ms-2">Some great feature name here</p>
            </div>

            <div className="flex mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7.32923 13.2291L3.85423 9.75414L2.6709 10.9291L7.32923 15.5875L17.3292 5.58748L16.1542 4.41248L7.32923 13.2291Z"
                  fill="#8B96A5"
                />
              </svg>
              <p className="text-xs ms-2">
                Lorem ipsum dolar sit amet, consectetur
              </p>
            </div>

            <div className="flex mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7.32923 13.2291L3.85423 9.75414L2.6709 10.9291L7.32923 15.5875L17.3292 5.58748L16.1542 4.41248L7.32923 13.2291Z"
                  fill="#8B96A5"
                />
              </svg>
              <p className="text-xs ms-2">
                Duis aute irure dolar in reprehander it
              </p>
            </div>

            <div className="flex mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7.32923 13.2291L3.85423 9.75414L2.6709 10.9291L7.32923 15.5875L17.3292 5.58748L16.1542 4.41248L7.32923 13.2291Z"
                  fill="#8B96A5"
                />
              </svg>
              <p className="text-xs ms-2">Some great feature name here</p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="bg-white my-3 p-3 rounded-lg border-2">
            <h4 className="text-sm">You may like</h4>
            <div className="flex my-2">
              <div>
                <img
                  src={ProductImage5}
                  width={70}
                  alt=""
                  className="border rounded-md p-1"
                />
              </div>
              <div className="ms-2">
                <h5 className="text-xs font-medium">
                  Men blazers sets elegant formal
                </h5>
                <p className="text-xs text-[#8B96A5]">$7.00 - $99.50</p>
              </div>
            </div>

            <div className="flex my-2">
              <div>
                <img
                  src={ProductImage5}
                  width={70}
                  alt=""
                  className="border rounded-md p-1"
                />
              </div>
              <div className="ms-2">
                <h5 className="text-xs font-medium">
                  Men Shirt Sleeve Polo Contrast
                </h5>
                <p className="text-xs text-[#8B96A5]">$7.00 - $99.50</p>
              </div>
            </div>

            <div className="flex my-2">
              <div>
                <img
                  src={ProductImage5}
                  width={70}
                  alt=""
                  className="border rounded-md p-1"
                />
              </div>
              <div className="ms-2">
                <h5 className="text-xs font-medium">
                  Apple Watch Series Space Gray
                </h5>
                <p className="text-xs text-[#8B96A5]">$7.00 - $99.50</p>
              </div>
            </div>

            <div className="flex my-2">
              <div>
                <img
                  src={ProductImage5}
                  width={70}
                  alt=""
                  className="border rounded-md p-1"
                />
              </div>
              <div className="ms-2">
                <h5 className="text-xs font-medium">
                  Basketball Crew Socks Long Stuff
                </h5>
                <p className="text-xs text-[#8B96A5]">$7.00 - $99.50</p>
              </div>
            </div>

            <div className="flex my-2">
              <div>
                <img
                  src={ProductImage5}
                  width={70}
                  alt=""
                  className="border rounded-md p-1"
                />
              </div>
              <div className="ms-2">
                <h5 className="text-xs font-medium">
                  New Summer Men's Castrol T-Shirts
                </h5>
                <p className="text-xs text-[#8B96A5]">$7.00 - $99.50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProDetails;
