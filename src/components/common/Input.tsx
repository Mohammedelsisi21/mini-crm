import type { ReactNode } from "react"

interface IProps {
    icon?: ReactNode
    type: "email" | "checkbox" | "text" | "password"
    name: string
    placeholder: string
    cheldreen?: ReactNode
    pl: string
}
const Input = ({icon, type, name, placeholder, cheldreen, pl} : IProps) => {
return (<>
        <div className="relative">
            {icon && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>}
            <input type={type} name={name} placeholder={placeholder} className={`w-full pr-12 ${pl} py-4 border-2 border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}/>
            {cheldreen}
        </div>
    </>)
}

export default Input