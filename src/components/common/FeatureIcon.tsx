import type { ReactNode } from "react"

interface IProps {
    color: "primary" | "error" | "success" | "warning" | "secondary" | "default"
    Icon?: ReactNode
    text: string | number
}
const FeatureIcon = ({Icon, color, text} : IProps) => {

    return (<>
        <div className={`flex items-center gap-1 w-fit px-3 py-1.5
            ${color === "primary" ? "bg-primary-100" :
            color === "secondary" ? "bg-secondary-100" :
            color === "error" ? "bg-error-100" :
            color === "success" ? "bg-success-100" :
            color === "warning" ? "bg-warning-100" :
            color === "default" ? "bg-gray-100" : ""
            }
            px-3 py-1 rounded-full`}>
            {Icon}
            <span className={`text-xs
            ${color === "primary" ? "text-primary-700" :
            color === "secondary" ? "text-secondary-700" :
            color === "error" ? "text-error-700" :
            color === "success" ? "text-success-700" :
            color === "warning" ? "text-warning-700" :
            color === "default" ? "text-gray-700" : ""
            }
            font-bold`}>{text}{typeof text === "number" ? "%" : ""}</span>
        </div>
    </>)
}


export default FeatureIcon