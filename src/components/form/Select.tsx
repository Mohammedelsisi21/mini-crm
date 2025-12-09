import { ChevronDown } from 'lucide-react';
import { type ReactNode } from 'react';


interface IProps {
    children: ReactNode
}

const Select = ({children} : IProps) => {
return (
    <div className="relative">
        <select value={status} className="w-full px-4 py-3 pr-10 bg-white border border-gray-700 rounded-lg text-sm appearance-none cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
                {children}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown className="w-4 h-4 text-gray-800" />
        </div>
    </div>
)}


export default Select