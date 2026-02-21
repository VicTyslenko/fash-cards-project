import type { HTMLProps, ReactNode } from "react";

import { Button } from "./styles";

interface DefaultButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit";
  children: ReactNode;
}

export const DefaultButton = ({ type = "button", className, children, ...props }: DefaultButtonProps) => {
  return (
    <Button type={type} {...props} className={`default-button ${className ?? ""} `}>
      {children}
    </Button>
  );
};
