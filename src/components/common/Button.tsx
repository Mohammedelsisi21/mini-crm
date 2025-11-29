import { type ReactNode } from "react";
import { cn } from "../../lib/utils";

interface IProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: "default" | "secondary" | "danger" | "outline";
    type?: "submit" | "button" | "reset";
    isLoading?: boolean
    ariaLabel: string
}

const Button = ({ children, onClick, variant = "default", type, isLoading ,ariaLabel}: IProps) => {
    const baseStyles = "px-3 py-2 rounded-md font-medium duration-300";
    const variantStyles = {
        default: "bg-gradient-primary w-full cursor-pointer text-white py-2 rounded-xl hover:shadow-xl transition-all font-bold text-md flex items-center justify-center gap-2 group",
        secondary: "bg-gradient-secondary w-full cursor-pointer text-white py-4 rounded-xl hover:shadow-xl transition-all font-bold text-lg flex items-center justify-center gap-2 group",
        danger: "bg-gradient-denger w-full cursor-pointer text-white py-4 rounded-xl hover:shadow-xl transition-all font-bold text-lg flex items-center justify-center gap-2 group",
        outline: "flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-medium"
    };

return (
    <button aria-label={ariaLabel} type={type} disabled={isLoading} onClick={onClick} className={cn(baseStyles, variantStyles[variant])}>
        {children}
    </button>
  );
};

export default Button;