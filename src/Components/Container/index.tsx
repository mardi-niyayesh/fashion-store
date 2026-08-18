import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`w-full max-w-[1251px] mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}
