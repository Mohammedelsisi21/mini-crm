import { type LucideIcon } from "lucide-react"

interface IProps {
    variant: "primary" | "secondary" | "warning" | "success" | "error"
    title: string
    text?: string
    number: number
    Icon: LucideIcon
}
const colorVariants = {
    primary: {
        bg: "bg-gradient-primary border-white",
    },
    secondary: {
        bg: "bg-gradient-secondary border-white",
    },
    warning: {
        bg: "bg-gradient-warning border-white",
    },
    success: {
        bg: "bg-gradient-success border-white",
    },
    error: {
    bg: "bg-gradient-error border-white",
    },
}
const CompCateCard = ({variant, number, title, Icon, text} : IProps) => {
    const {bg} = colorVariants[variant]
return (
    <div className={`text-white rounded-2xl p-6 hover:shadow-lg transition-all ${bg}`}>
        <div className="flex items-center justify-between mb-4">
            {<Icon size={32} />}
            {text && <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">{text}</span>}
        </div>
        <h3 className="text-4xl font-bold mb-2">{number.toLocaleString()}</h3>
        <p className="text-white font-medium">{title}</p>
    </div>
    )
}
export default CompCateCard
