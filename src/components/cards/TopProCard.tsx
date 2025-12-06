import { ArrowDown, ArrowUp } from "lucide-react"

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
                    <div className="flex items-center gap-1 bg-success-100 px-2 py-0.5 rounded-full">
                        <ArrowUp size={12} className="text-success-800" />
                        <span className="text-xs text-success-800 font-bold">{change}%</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-1 bg-error-100 px-2 py-0.5 rounded-full">
                        <ArrowDown size={12} className="text-error-800" />
                        <span className="text-xs text-error-800 font-bold">{Math.abs(change)}%</span>
                    </div>
                )}
            </div>
            <span className="text-sm text-gray-600">{sales} طلب</span>
        </div>
        <span className="text-sm font-bold text-gray-700">{revenue.toLocaleString("ar-EG")} ج.م</span>
    </div>
    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
        <div
            className={"h-2 rounded-full transition-all duration-500"}
            style={{ width: `${sales}%`, background: `${
                sales >= 90 ? "var(--gradient-primary)" :
                sales >= 80 ? "var(--gradient-secondary)" :
                sales >= 70 ? "var(--gradient-success)" :
                sales >= 60 ? "var(--gradient-info)" :
                sales >= 50 ? "var(--gradient-warning)" :
                "var(--gradient-error)"
            }`}}
        />
        </div>
    </>
  )
}

export default TopProCard