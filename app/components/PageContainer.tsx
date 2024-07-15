import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  maxWidth: number;
}

const PageContainer = ({ children, maxWidth }: Props) => {
  return (
    <div
      className="flex flex-col gap-2 min-h-[100vh] justify-center mx-auto"
      style={{ maxWidth }}
    >
      {children}
    </div>
  );
};

export default PageContainer;
