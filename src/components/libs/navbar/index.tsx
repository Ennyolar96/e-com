import { useState } from "react";
import Navbar from "./nav";
import Sidebar from "./sidebar";
import SubNavBar from "./subNavBar";

const Navigation = () => {
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <SubNavBar />
    </>
  );
};

export default Navigation;
