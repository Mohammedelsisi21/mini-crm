
interface IProps {
    text: string
}
const AuthLink = ({text} : IProps) => {
return (<>
    <button type="button" className="cursor-pointer text-sm font-semibold text-primary-500 hover:text-primary-500-dark transition-all" >
        {text}
    </button>
</>)
}

export default AuthLink