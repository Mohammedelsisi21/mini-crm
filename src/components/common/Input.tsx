import { Eye, EyeOff } from "lucide-react"
import { useState, type ReactNode } from "react"

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode
    type: "email" | "checkbox" | "text" | "password" | "tel"
    name: string
    placeholder: string
    cheldreen?: ReactNode
    pl: string
    pass?: boolean
    error?: boolean
}
const Input = ({icon, type, name, placeholder, pl, cheldreen, pass = false, error, ...rest} : IProps) => {
        const [showPassword, setShowPassword] = useState(false);
return (<>
        <div className="relative">
            {icon && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>}
            <input type={pass ? showPassword ? "text" : "password" : type} name={name} placeholder={placeholder}  {...rest} className={`w-full pr-12 ${pl} caret-primary-500 text-text-body py-4 border-2 ${error ? "border-error-600" : "border-gray-300"} rounded-xl outline-none focus:ring-2 ${error ? "focus:ring-error-600" : "focus:ring-primary-500"} focus:border-transparent transition-all`}/>
            {cheldreen}
            {pass ? <>
                <button aria-label="Close Eye" type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all">
                    {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                </button>
            </> : null}
        </div>
    </>)
}

export default Input