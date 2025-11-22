import { Link } from "react-router-dom"

interface IProps {
    text: string
    color: string
    hover: string
    url?: string
    algin?: string
    textSize?: "text-md" | "text-sm" | "text-lg"
}
const AuthLink = ({text, color, hover, algin, textSize ="text-sm", url= ""} : IProps) => {
return (<>
    <Link to={url} type="button" className={`cursor-pointer block ${algin} ${textSize} font-semibold ${color} ${hover} transition-all`} >
        {text}
    </Link>
</>)
}

export default AuthLink