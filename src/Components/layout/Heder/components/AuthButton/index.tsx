"use client";
import { UserRound } from "lucide-react";

type AuthButtonProps = {
  onClick?: () => void;
};

const AuthButton = ({ onClick }: AuthButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
      flex
        group
        relative
        overflow-hidden
        rounded-xl
        border
        border-[#E30076]
        px-5
        py-2.5
        text-sm
        font-bold
        text-[#E30076]
        hover:shadow-lg
        active:scale-95
        cursor-pointer
      "
    >
      <UserRound size={20} />
      <span className="relative z-10">ورود / ثبت نام</span>

      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-linear-to-r
          from-transparent
          via-white/30
          to-transparent
          transition-transform
          duration-1000
          group-hover:translate-x-full
        "
      />
    </button>
  );
};

export default AuthButton;
