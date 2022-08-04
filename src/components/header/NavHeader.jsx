import { useState } from "react";

export default function NavHeader({ isToggle }) {
  const [items, setItems] = useState([
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/",
      name: "30 Under 30",
    },
    {
      link: "/",
      name: "ForbeseWomen",
    },
    {
      link: "/",
      name: "Forbes X Boys Lie",
    },
    {
      link: "/",
      name: "Core Collectios",
    },
    {
      link: "/",
      name: "Shop All",
    },
  ]);
  return (
    <div className={`header-nav ${(isToggle && "show") || ""}`}>
      <ul className="header-nav-menu">
        {items &&
          items.map((item, i) => (
            <li key={i} className="header-nav-menu-item">
              <a href={item.link} className="header-nav-menu-link">
                {item.name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
