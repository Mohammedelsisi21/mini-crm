import { TrendingUp } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";

const data = [
    { day: "الثلاثاء", revenue: 2000 },
    { day: "الإربعاء", revenue: 7000 },
    { day: "الخميس", revenue: 2500 },
    { day: "الجمعة", revenue: 3000 },
    { day: "السبت", revenue: 7500 },
    { day: "الأحد", revenue: 2200 },
    { day: "الإثنين", revenue: 4500 },
];

const RevenueAreaChart = () => {
    return (
    <div className="bg-white p-4 rounded-xl h-96 font-main">
        <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                    <TrendingUp size={20} className="text-primary-600"/>
                </div>
                <h2 className="font-bold text-xl text-gray-800">اتجاه الإيرادات اليومية</h2>
            </div>
            <p className="text-gray-500 text-sm font-medium">أداء آخر 7 أيام</p>
        </div>
        <ResponsiveContainer width="100%" height="80%">
            <AreaChart data={data}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" fill="#93c5fd" stroke="#3b82f6" />
            </AreaChart>
        </ResponsiveContainer>
    </div>
)}

export default RevenueAreaChart