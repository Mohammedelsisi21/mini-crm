
interface IProps {
    text: string
    color: string
    hover: string
}
const AuthLink = ({text, color, hover} : IProps) => {
return (<>
    <button type="button" className={`cursor-pointer text-sm font-semibold ${color} ${hover} transition-all`} >
        {text}
    </button>
</>)
}

export default AuthLink