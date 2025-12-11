import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/utils";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    onClick?: () => void
    variant?: "default" | "secondary" | "danger" | "dark" | "success" | "outline" | "warning"| "blue";
    type?: "submit" | "button" | "reset";
    isLoading?: boolean
    ariaLabel: string
    w?: "w-full" | "w-fit"
}

const Button = ({ children, onClick, variant = "default", type, isLoading ,ariaLabel, w = "w-full", ...rest}: IProps) => {
    const baseStyles = "px-3 py-2 rounded-md font-medium duration-300";
    const variantStyles = {
        default: `bg-gradient-primary flex items-center justify-center ${w} gap-2 px-4 py-2 rounded-lg text-sm border cursor-pointer border-white text-white transition`,
        secondary: `bg-gradient-secondary flex items-center justify-center ${w} gap-2 px-4 py-2 rounded-lg text-sm border cursor-pointer border-white text-white transition`,
        danger: `bg-gradient-error flex items-center justify-center ${w} gap-2 px-4 py-2 rounded-lg text-sm border cursor-pointer border-white text-white transition`,
        dark: `bg-gradient-dark flex items-center justify-center ${w} gap-2 px-4 py-2 rounded-lg text-sm border cursor-pointer border-white text-white transition`,
        success: `bg-gradient-success flex items-center justify-center ${w} gap-2 px-4 py-2 rounded-lg text-sm border cursor-pointer border-white text-white transition`,
        warning: `bg-gradient-warning flex items-center justify-center ${w} gap-2 px-4 py-2 rounded-lg text-sm border cursor-pointer border-white text-white transition`,
        blue: `bg-gradient-blue flex items-center justify-center ${w} gap-2 px-4 py-2 rounded-lg text-sm border cursor-pointer border-white text-white hover:bg-primary-700 transition`,
        outline: `flex items-center justify-center ${w} gap-2 px-4 py-2 rounded-lg text-sm border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-100 transition`
    };

return (
    <button aria-label={ariaLabel} type={type} disabled={isLoading} onClick={onClick} className={cn(baseStyles, variantStyles[variant])} {...rest}>
        {children}
    </button>
  );
};

export default Button;