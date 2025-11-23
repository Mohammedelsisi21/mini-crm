import type React from "react"

interface IProps extends React.LabelHTMLAttributes<HTMLLabelElement>{
    text: string
    center?: string
    htmlFor?:string
}
const Label = ({text , center, htmlFor}: IProps) => {
return (<>
    <label className={`block text-sm font-bold text-text-body mb-2 ${center}`} htmlFor={htmlFor}>{text}</label>
</>)
}

export default Label 