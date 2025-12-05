import { AlertCircle, Clock, Package, Phone } from "lucide-react"



interface IProps {
    status: "success" | "warning" | "pending" | string
    type: "call" | "order" | "complaint" | "followup" | string
    customer: string
    employee: string
    action: string
    time: string
}
const ActivityCard = ({status, type, customer, employee, action, time} : IProps) => {
return (
    <div className="flex items-center gap-4 p-4 bg-linear-to-r from-gray-50 to-white rounded-xl hover:shadow-md transition-all border border-gray-100 group">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform ${
        status === 'success' ? 'bg-linear-to-br from-success-400 to-success-500' :
        status === 'warning' ? 'bg-linear-to-br from-warning-400 to-warning-500' :
        status === 'pending' ? 'bg-linear-to-br from-primary-400 to-primary-500' :
        'bg-linear-to-br from-purple-400 to-purple-500'
        }`}>
            {type === 'call' && <Phone size={20} className="text-white" />}
            {type === 'order' && <Package size={20} className="text-white" />}
            {type === 'complaint' && <AlertCircle size={20} className="text-white" />}
            {type === 'followup' && <Clock size={20} className="text-white" />}
    </div>
        <div className="flex-1">
            <h3 className="font-bold text-gray-800 mb-1">{customer}</h3>
            <p className="text-sm text-gray-600">{action} . {employee}</p>
        </div>
        <div className="text-left">
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{time}</span>
        </div>
    </div>

    )
}

export default ActivityCard