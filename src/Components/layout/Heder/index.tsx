"use client";
import Logo from "./components/logo";
import Navigation from "./components/Navigation/Navigation";
import AuthButton from "./components/AuthButton";

const Header = () => {
  return (
    <>
      <header
        className="
          sticky
          top-0
          z-50
          w-full
          bg-white
          border-b
          border-slate-100
          shadow-sm
          transition-all
          duration-300
        "
      >
        <div
          className="ّ
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-4
            py-3
            lg:px-8
          "
        >
          <Logo />

          <Navigation className="hidden lg:block" />

          <div
            className="
              flex
              items-center
              gap-3
              lg:gap-5
            "
          ></div>
          <AuthButton/>
        </div>
      </header>
    </>
  );
};

export default Header;
