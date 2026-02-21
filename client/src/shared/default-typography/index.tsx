import { type ReactNode } from "react";

import "./styles.css";

type Props = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "strong";
  children: ReactNode;
  className?: string;
};

export const DefaultTypography = ({ as, children, ...props }: Props) => {
  const Component = as ?? "p";

  return (
    <Component className="default-typography" {...props}>
      {children}
    </Component>
  );
};
