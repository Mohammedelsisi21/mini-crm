
interface IProps {
    text: string
}
const LableForm = ({text}: IProps) => {
return (<>
    <label className="block text-sm font-bold text-text-body mb-2 ">{text}</label>
</>)
}

export default LableForm