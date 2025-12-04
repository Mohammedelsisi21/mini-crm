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
    <div className="bg-white p-4 rounded-xl h-76 font-main">
        <div className="mb-3">
            <div className="flex space-x-2 text-primary-500 items-center">
                <TrendingUp size={24}/>
                <h2 className="font-bold text-lg">اتجاه الإيرادات اليومية</h2>
            </div>
            <p className="text-gray-400 text-xs font-bold">أداء أخر 7 ايام</p>
        </div>
        <ResponsiveContainer width="100%" height="88%">
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