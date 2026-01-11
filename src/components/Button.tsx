import React from "react";

interface ButtonProps {
    chidlren: React.ReactNode;
    className: string;
}

const Button = ({children, className = ''}: ButtonProps): React.FC<ButtonProps> => {
  return <button>{children}</button>;
};

export default Button;
