import { ReactNode } from "react";

export const Button = ({
  children,
  ...rest
}: { children: ReactNode } & React.ComponentPropsWithoutRef<"button">) => {
  return (
    <button className="bg-black text-white rounded-md w-[150px] py-1" {...rest}>
      {children}
    </button>
  );
};
