import Sidebar from "./Component/Sidebar";
import Main from "./Component/Main";
import { useState, useEffect } from "react";

export default function App() {
  const [selectedOption, setSelectedOption] = useState("Home");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const updateWindowDimensions = () => {
    setIsDesktop(window.innerWidth > 1385);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return (
    <div>
      <Sidebar onOptionChange={handleOptionChange} />
      <Main selectedOption={selectedOption} />
      {/* {isDesktop && <Sidebar onOptionChange={handleOptionChange} />}
      {isDesktop && <Main selectedOption={selectedOption} />} */}
    </div>
  );
}
