import { AlertCircle, ArrowUp, Bell, DollarSign, TrendingUp, User } from "lucide-react"
import FeatureIcon from "../common/FeatureIcon"


const colorVariants = {
    primary: {
        bg: "bg-gradient-blue",
        borderColor: "border-r-primary-600",
        mainIcon: User,
        featureIcon: "up"
    },
    secondary: {
        bg: "bg-gradient-purple",
        borderColor: "border-r-secondary-600",
        mainIcon: TrendingUp,
        featureIcon: "up"
    },
    warning: {
        bg: "bg-gradient-warning",
        borderColor: "border-r-warning-600",
        mainIcon: DollarSign,
        featureIcon: "alet"
    },
    success: {
        bg: "bg-gradient-success",
        borderColor: "border-r-success-600",
        mainIcon: AlertCircle,
        featureIcon: "up"
    },
}
interface IProps {
    variant: "primary" | "secondary" | "warning" | "success"
    title: string
    des: string
    num: number
    up: number
}
const HomeCard = ({ variant, title, des, num, up} : IProps) => {

    const styles = colorVariants[variant]
    const Icon = styles.mainIcon


return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 border-r-4 ${styles.borderColor} hover:shadow-xl transition-all group`}>
        <div className="flex justify-between items-start mb-4">
            <div className={`${styles.bg} w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                <Icon className="text-white" size={28} />
            </div>
            {styles.featureIcon === "up" ?
            <>
                <FeatureIcon color="success"  text={up.toLocaleString("en-US")} Icon={<ArrowUp size={12} className="text-success-800" />}/>
            </> :
            <>
                <FeatureIcon color="error"  text={"عاجل"} Icon={<Bell size={12} className="text-error-800" />} />
            </>}
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-1">{num.toLocaleString("en-US")}</h2>
        <p className="text-gray-600 font-medium">{title}</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">{des}</p>
        </div>
    </div>
)
}

export default HomeCard