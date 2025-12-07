import type { ReactNode } from "react"

interface IProps {
    color: "primary" | "secondary" | "warning" | "success"
    icon: ReactNode
    title: string
    number: string
}
const colorVariants = {
    primary: {
        bg: "bg-primary-100 border-primary-200",
        title: "text-primary-700",
        number: "text-primary-800",
    },
    secondary: {
        bg: "bg-secondary-100 border-secondary-200",
        title: "text-secondary-700",
        number: "text-secondary-800",
    },
    warning: {
        bg: "bg-warning-100 border-warning-200",
        title: "text-warning-700",
        number: "text-warning-800",
    },
    success: {
        bg: "bg-success-100 border-success-200",
        title: "text-success-700",
        number: "text-success-800",
    },
}
const CustomersCard = ({color, icon, number, title} : IProps) => {
    const styles = colorVariants[color]
return (
    <div className={`rounded-xl p-4 border ${styles.bg}`}>
        <div className="flex items-center justify-between">
            <div>
                <p className={`${styles.title} text-sm font-medium mb-1`}>{title}</p>
                <p className={`text-2xl font-bold ${styles.number}`}>{number}</p>
            </div>
            {icon}
        </div>
    </div>
    )
}

export default CustomersCard