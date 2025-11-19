import type React from "react"

interface IProps extends React.LabelHTMLAttributes<HTMLLabelElement>{
    text: string
    center?: string
}
const Label = ({text , center}: IProps) => {
return (<>
    <label className={`block text-sm font-bold text-text-body mb-2 ${center}`}>{text}</label>
</>)
}

export default Label 