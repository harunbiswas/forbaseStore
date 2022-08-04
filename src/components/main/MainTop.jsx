import { useState } from "react";

export default function MainTop() {
  const [options, setOptions] = useState([
    "Featured",
    "Best Selling",
    "Alphabetically: A-Z",
    "Alphabetically: Z-A",
    "Price: Low to High",
    "Price: High to Low",
    "Date: New to Old",
    "Date: Old to New",
  ]);
  return (
    <div className="main-top">
      <h3>ForbesWomen</h3>
      <select name="" id="">
        {options &&
          options.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
}
