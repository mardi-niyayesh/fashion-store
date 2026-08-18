"use client";

import { useState } from "react";
import AnimatedMenuItem from "./AnimatedMenuItem";

type NavigationProps = {
  className?: string;
  listClassName?: string;
};

const menuItems = ["محصولات", "درباره ما", "تماس با ما", "مجله ها"];

const Navigation = ({
  className = "",
  listClassName = "",
}: NavigationProps) => {
  const [activeItem, setActiveItem] = useState("محصولات");

  return (
    <nav className={className}>
      <ul
        className={`
          flex
          items-center
          gap-6
          text-[15px]
          font-semibold
          text-slate-700
          ${listClassName}
        `}
      >
        {menuItems.map((item, index) => (
          <AnimatedMenuItem
            key={item}
            item={item}
            index={index}
            active={activeItem === item}
            onClick={() => setActiveItem(item)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;