import { CheckCircle, Star, UserPlus, Users } from "lucide-react"

interface IProps {
    variant: "primary" | "secondary" | "warning" | "success"
    title: string
    number: number
}
const colorVariants = {
    primary: {
        bg: "bg-primary-100 border-primary-200",
        title: "text-primary-700",
        number: "text-primary-800",
        icon: <Users className="text-primary-800" size={32}/>
    },
    secondary: {
        bg: "bg-secondary-100 border-secondary-200",
        title: "text-secondary-700",
        number: "text-secondary-800",
        icon: <CheckCircle className="text-secondary-800" size={32}/>
    },
    warning: {
        bg: "bg-warning-100 border-warning-200",
        title: "text-warning-700",
        number: "text-warning-800",
        icon: <Star className="text-warning-800" size={32}/>
    },
    success: {
        bg: "bg-success-100 border-success-200",
        title: "text-success-700",
        number: "text-success-800",
        icon: <UserPlus className="text-success-800" size={32}/>
    },
}
const CustomersCard = ({variant, number, title} : IProps) => {
    const styles = colorVariants[variant]
return (
    <div className={`rounded-xl p-4 border ${styles.bg}`}>
        <div className="flex items-center justify-between">
            <div>
                <p className={`${styles.title} text-sm font-medium mb-1`}>{title}</p>
                <p className={`text-2xl font-bold ${styles.number}`}>{number.toLocaleString()}</p>
            </div>
            {styles.icon}
        </div>
    </div>
    )
}

export default CustomersCard