import { Link } from "react-router-dom";
import arabic from "../../../assets/arabic.png";
import australia from "../../../assets/australia.jpg";
import united from "../../../assets/united.png";
import italy from "../../../assets/italy.png";
import russia from "../../../assets/russia.png";
import denmark from "../../../assets/denmark.png";
import france from "../../../assets/france.png";
import china from "../../../assets/china.png";
import britain from "../../../assets/britain.png";

const Supplier = () => {
  const data = [
    { name: "Arabic Emirates", link: "shopname.ae", flag: arabic },
    { name: "Australia", link: "shopname.ae", flag: australia },
    { name: "United State", link: "shopname.ae", flag: united },
    { name: "Italy", link: "shopname.ae", flag: italy },
    { name: "Russia", link: "shopname.ae", flag: russia },
    { name: "Denmark", link: "shopname.ae", flag: denmark },
    { name: "France", link: "shopname.ae", flag: france },
    { name: "Arabic Emirates", link: "shopname.ae", flag: arabic },
    { name: "China", link: "shopname.ae", flag: china },
    { name: "Great Britain", link: "shopname.ae", flag: britain },
  ];

  return (
    <div className="container mx-auto">
      <div className="m-3 pb-10 px-1">
        <h3 className="text-2xl text-black font-semibold my-7">
          Suppliers by region
        </h3>
        <div className="flex flex-wrap -m-4">
          {data.map((item: any, index: number) => (
            <div className="lg:p-4 p-2 lg:w-1/5 md:w-1/3 w-1/2" key={index}>
              <div className="flex flex-row">
                <img src={item.flag} className="h-[20px] w-[28px]" alt="" />
                <div className="-mt-2 ms-2">
                  <p className="font-medium text-base">{item.name}</p>
                  <Link to="" className="text-xs -mt-1 block">
                    {item.link}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supplier;
