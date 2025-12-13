import { ArrowDown, ArrowUp } from "lucide-react"
import FeatureIcon from "../common/FeatureIcon"

interface IProps {
    name: string
    change: number
    sales: number
    revenue: number
}
const TopProCard = ({name, change, sales, revenue} : IProps) => {
    
return (
    <>
    <div className="flex justify-between items-start">
        <div>
            <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-800">{name}</span>
                {sales >= 50 ? (
                    <FeatureIcon
                    text={change}
                    Icon={<ArrowUp size={12} className="text-success-800" />}
                    color="success"/>
                ) : (
                    <FeatureIcon
                    text={Math.abs(change)}
                    Icon={<ArrowDown size={12} className="text-error-800" />}
                    color="error"/>
                )}
            </div>
            <span className="text-sm text-gray-600">{sales} طلب</span>
        </div>
        <span className="text-sm font-bold text-gray-700">{revenue.toLocaleString("ar-EG")} ج.م</span>
    </div>
    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
        <div
            className={`h-2 rounded-full transition-all duration-500
            ${
                sales >= 90 ? "bg-gradient-primary" :
                sales >= 80 ? "bg-gradient-secondary" :
                sales >= 70 ? "bg-gradient-success" :
                sales >= 60 ? "bg-gradient-info" :
                sales >= 50 ? "bg-gradient-warning" :
                "bg-gradient-error)"
            }`}
            style={{ width: `${sales}%`}}
        />
        </div>
    </>
  )
}

export default TopProCard