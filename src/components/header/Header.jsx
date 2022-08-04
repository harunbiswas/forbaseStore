import { useEffect, useState } from "react";
import MidHeader from "./MidHeader";
import NavHeader from "./NavHeader";
import TopHeader from "./TopHeader";

export default function Header() {
  const [isToggle, setIsToggle] = useState(false);
  const toggleHandler = () => {
    if (isToggle) {
      setIsToggle(false);
    } else setIsToggle(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.innerWidth > 768 && window.screenY < 100) {
        setIsToggle(false);
      }
    });
  }, []);
  return (
    <header className="header">
      <TopHeader />
      <MidHeader handler={toggleHandler} />
      <NavHeader isToggle={isToggle} />
    </header>
  );
}
