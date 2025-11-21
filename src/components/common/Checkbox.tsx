import { useState, type InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    text: string
}

const Checkbox = ({text, ...rest} : IProps) => {
    const [rememberMe, setRememberMe] = useState(false);
return (<>
    <label className="flex items-center gap-2 cursor-pointer">
        <input {...rest} type="checkbox" name="acceptTerms" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="w-5 h-5 rounded border-gray-300 text-primary-500 focus:ring-primary-500"/>
        <span className="text-sm text-gray-700 font-medium">{text}</span>
    </label>
</>)
}

export default Checkbox