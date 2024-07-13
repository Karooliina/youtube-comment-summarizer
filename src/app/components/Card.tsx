import { ReactNode } from "react";

export const Card = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-slate-400 rounded-md p-3 min-w-[300px] min-h-[100px]">
      <p className="font-bold">{title}</p>
      {children}
    </div>
  );
};
