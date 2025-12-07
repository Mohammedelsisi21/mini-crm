import type { ReactNode } from "react"

interface IProps {
    color: "primary" | "error" | "success" | "warning"
    Icon: ReactNode
    text: string | number
}
const FeatureIcon = ({Icon, color, text} : IProps) => {

    return (<>
        <div className={`flex items-center gap-1
            ${color === "primary" ? "bg-primary-100" :
            color === "error" ? "bg-error-100" :
            color === "success" ? "bg-success-100" :
            color === "warning" ? "bg-warning-100" : ""
            }
            px-3 py-1 rounded-full`}>
            {Icon}
            <span className={`text-xs
            ${color === "primary" ? "bg-primary-800" :
            color === "error" ? "text-error-800" :
            color === "success" ? "text-success-800" :
            color === "warning" ? "text-warning-800" : ""
            }
            font-bold`}>{text}{typeof text === "number" ? "%" : ""}</span>
        </div>
    </>)
}


export default FeatureIcon