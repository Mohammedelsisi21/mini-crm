import { Link } from "react-router-dom"

interface IProps {
    text: string
    color: string
    hover: string
    url?: string
}
const AuthLink = ({text, color, hover, url= ""} : IProps) => {
return (<>
    <Link to={url} type="button" className={`cursor-pointer text-sm font-semibold ${color} ${hover} transition-all`} >
        {text}
    </Link>
</>)
}

export default AuthLink