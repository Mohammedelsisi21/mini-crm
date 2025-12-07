
interface IProps {
    text: string
}
const TextHead = ({text}: IProps) => {
return (
    <th className="px-6 py-4 text-right text-sm font-bold text-gray-700">{text}</th>
)
}

export default TextHead