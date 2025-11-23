import type { ReactNode } from "react"
import { Link } from "react-router-dom"

interface IProps {
    text: string
    icon?: ReactNode
    color: string
    hover: string
    url?: string
    algin?: string
    textSize?: "text-md" | "text-sm" | "text-lg"
}
const AuthLink = ({text, icon, color, hover, algin, textSize ="text-sm", url= ""} : IProps) => {
return (<>
    <Link to={url} type="button" className={`cursor-pointer ${algin} ${textSize} font-semibold ${color} ${hover} transition-all flex justify-center items-center group`} >
        {icon}
        {text}
    </Link>
</>)
}

export default AuthLink