import { ArrowUp, Bell } from "lucide-react"
import type { ReactNode } from "react"

interface IProps {
    bg: string
    color: string
    icon: ReactNode
    title: string
    des: string
    num: number
    up: number
    warning?: boolean
}
const HomeCard = ({ bg, color, icon, title, des, num, up, warning = false} : IProps) => {
return (
    <div style={{borderRight: `4px solid ${color}`}} className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group`}>
        <div className="flex justify-between items-start mb-4">
            <div style={{background: `var(--gradient-${bg})`}} className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div className={`flex items-center gap-1 ${warning ? "bg-error-50" : "bg-success-50"} px-3 py-1 rounded-full`}>
                {warning ?
                <>
                    <Bell size={14} className="text-red-600" />
                    <span className="text-red-600 text-sm font-bold">عاجل</span>
                </> :
                <>
                    <ArrowUp size={14} className="text-success-600" />
                    <span className="text-success-600 text-sm font-bold">%{up.toLocaleString("en-US")}</span>
                </>}
            </div>
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-1">{num.toLocaleString("en-US")}</h3>
        <p className="text-gray-600 font-medium">{title}</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">{des}</p>
        </div>
    </div>
)
}

export default HomeCard