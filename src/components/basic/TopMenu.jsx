import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsCartFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

export default function TopMenu() {
  const [btns, setBtns] = useState([
    { link: "", icon: <BiSearch /> },
    { link: "", icon: <FaRegUserCircle /> },
    { link: "", icon: <BsCartFill /> },
  ]);
  return (
    <ul className="header-top-menu">
      {btns &&
        btns.map((item, i) => (
          <li key={i} className="header-top-menu-item">
            <a href={item.link}>{item.icon}</a>
          </li>
        ))}
    </ul>
  );
}
