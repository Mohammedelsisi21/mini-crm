import { AlertCircle, DollarSign, Download, FileText, Package, Phone, Users } from "lucide-react"
import Button from "../common/Button"

interface IProps {
    color: "primary" | "success" | "secondary" | "warning" | "blue"
    title: string
    des: string
    count: number
    countType: string
}
const colorVariants = {
    primary: {
        bg: "bg-gradient-primary",
        Icon: Users
    },
    success: {
        bg: "bg-gradient-success",
        Icon: Phone
    },
    secondary: {
        bg: "bg-gradient-secondary",
        Icon: Package
    },
    warning: {
        bg: "bg-gradient-warning",
        Icon: AlertCircle
    },
    blue: {
        bg: "bg-gradient-blue",
        Icon: FileText
    },
    green: {
        bg: "bg-gradient-green",
        Icon: DollarSign
    },
}
const ReportCard = ({color, count, countType, des, title} : IProps) => {
    const {Icon, bg} = colorVariants[color]
return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all group">
        <div className={`w-16 h-16 ${bg} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-105 transition-transform`}>
            <Icon size={32} className="text-white" />
        </div>
        <h3 className="font-bold text-gray-800 text-xl mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{des}</p>
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
            <span className="text-sm text-gray-500">حجم البيانات</span>
            <span className="text-sm font-bold text-gray-700">{count}{' '}{countType}</span>
        </div>
        <Button  ariaLabel="download-btn" variant="dark">
            <Download size={20} />
            <span>تصدير Excel</span>
        </Button>
    </div>
)
}

export default ReportCard