import { type LucideIcon } from "lucide-react"

interface IProps {
    variant: "primary" | "secondary" | "warning" | "success"
    title: string
    number: number
    Icon: LucideIcon
}
const colorVariants = {
    primary: {
        bg: "bg-primary-100 border-primary-200",
        colorIcon: "text-primary-500",
        colorTitle: "text-primary-700",
        colorNumber: "text-primary-800",
    },
    secondary: {
        bg: "bg-secondary-100 border-secondary-200",
        colorIcon: "text-secondary-500",
        colorTitle: "text-secondary-700",
        colorNumber: "text-secondary-800",
    },
    warning: {
        bg: "bg-warning-100 border-warning-200",
        colorIcon: "text-warning-500",
        colorTitle: "text-warning-700",
        colorNumber: "text-warning-800",
    },
    success: {
        bg: "bg-success-100 border-success-200",
        colorIcon: "text-success-500",
        colorTitle: "text-success-700",
        colorNumber: "text-success-800",
    },
}
const CusProCard = ({variant, number, title, Icon} : IProps) => {
    const {bg, colorIcon, colorNumber, colorTitle} = colorVariants[variant]
return (
    <div className={`rounded-xl p-4 border ${bg}`}>
        <div className="flex items-center justify-between">
            <div>
                <p className={`${colorTitle} text-sm font-medium mb-1`}>{title}</p>
                <p className={`text-2xl font-bold ${colorNumber}`}>{number.toLocaleString()}</p>
            </div>
            {<Icon className={`${colorIcon}`} size={32} />}
        </div>
    </div>
    )
}

export default CusProCard