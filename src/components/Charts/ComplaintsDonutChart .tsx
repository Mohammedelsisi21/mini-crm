import { TrendingUp } from "lucide-react";
import { ResponsiveContainer } from "recharts";



const ComplaintsDonutChart = () => {
    return (
    <div className="bg-white p-4 rounded-xl h-76 font-main">
        <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-success-100 rounded-xl flex items-center justify-center">
                    <TrendingUp size={20} className="text-success-600"/>
                </div>
                <h2 className="font-bold text-xl text-gray-800">اتجاه الإيرادات اليومية</h2>
            </div>
            <p className="text-gray-500 text-sm font-medium">أداء آخر 7 أيام</p>
        </div>
        <ResponsiveContainer width="100%" height="88%">
            <p></p>
        </ResponsiveContainer>
    </div>
)}

export default ComplaintsDonutChart 