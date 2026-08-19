"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import AnimatedMenuItem from "./AnimatedMenuItem";
import ProductMenu from "../../ProductMenu";

type NavigationProps = {
  className?: string;
  listClassName?: string;
};

const menuItems = ["خانه", "محصولات", "درباره ما", "تماس با ما"];

const Navigation = ({
  className = "",
  listClassName = "",
}: NavigationProps) => {
  const router = useRouter();

  const [activeItem, setActiveItem] = useState("خانه");
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  const handleMenuClick = (item: string) => {
    setActiveItem(item);

    if (item === "خانه") {
      router.push("/");
      setIsProductMenuOpen(false);
      return;
    }

    if (item === "محصولات") {
      setIsProductMenuOpen((prev) => !prev);
      return;
    }

    if (item === "درباره ما") {
      router.push("/about");
      setIsProductMenuOpen(false);
      return;
    }

    if (item === "تماس با ما") {
      router.push("/Contact");
      setIsProductMenuOpen(false);
      return;
    }
  };

  return (
    <nav className={className}>
      <ul
        className={`
          flex
          items-center
          gap-6
          text-[15px]
          font-semibold
          ${listClassName}
        `}
      >
        {menuItems.map((item, index) => (
          <li key={item} className="relative">
            <AnimatedMenuItem
              item={item}
              index={index}
              active={activeItem === item}
              onClick={() => handleMenuClick(item)}
            />

            {item === "محصولات" && <ProductMenu isOpen={isProductMenuOpen} />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
