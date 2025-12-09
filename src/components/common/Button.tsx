import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/utils";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    onClick?: () => void
    variant?: "default" | "secondary" | "danger" | "dark" | "success" | "outline";
    type?: "submit" | "button" | "reset";
    isLoading?: boolean
    ariaLabel: string
    w?: "w-full" | "w-fit"
}

const Button = ({ children, onClick, variant = "default", type, isLoading ,ariaLabel, w = "w-full", ...rest}: IProps) => {
    const baseStyles = "px-3 py-2 rounded-md font-medium duration-300";
    const variantStyles = {
        default: `bg-gradient-primary ${w} cursor-pointer text-white py-3 rounded-xl hover:shadow-xl transition-all font-bold text-md flex items-center justify-center gap-2 group`,
        secondary: `bg-gradient-secondary ${w} cursor-pointer text-white py-3 rounded-xl hover:shadow-xl transition-all font-bold text-md flex items-center justify-center gap-2 group`,
        danger: `bg-gradient-denger ${w} cursor-pointer text-white py-3 rounded-xl hover:shadow-xl transition-all font-bold text-lg flex items-center justify-center gap-2 group`,
        dark: `bg-gradient-dark ${w} cursor-pointer text-white py-3 rounded-xl hover:shadow-xl transition-all font-bold text-lg flex items-center justify-center gap-2 group`,
        success: `bg-gradient-success ${w} cursor-pointer text-white py-3 rounded-xl hover:shadow-xl transition-all font-bold text-lg flex items-center justify-center gap-2 group`,
        outline: `flex items-center ${w} cursor-pointer justify-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-medium`
    };

return (
    <button aria-label={ariaLabel} type={type} disabled={isLoading} onClick={onClick} className={cn(baseStyles, variantStyles[variant])} {...rest}>
        {children}
    </button>
  );
};

export default Button;