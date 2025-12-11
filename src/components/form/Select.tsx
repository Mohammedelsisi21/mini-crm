import { ChevronDown } from 'lucide-react';
import { type ReactNode, type SelectHTMLAttributes } from 'react';


interface IProps extends SelectHTMLAttributes<HTMLSelectElement>{
    children: ReactNode
    error?: boolean
}

const Select = ({children,error , ...rest} : IProps) => {
return (
    <div className="relative">
        <select {...rest} className={`w-full px-4 py-4 pr-10 bg-white text-text-body border-2 ${error ? "border-error-600": "border-gray-300" } rounded-lg text-sm appearance-none cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 ${error ? "focus:ring-error-600" : "focus:ring-primary-500"} focus:border-transparent transition-all`}>
                {children}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown className="w-4 h-4 text-gray-800" />
        </div>
    </div>
)}


export default Select