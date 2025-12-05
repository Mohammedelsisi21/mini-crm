import { AlertCircle } from "lucide-react";
import { Pie, PieChart } from "recharts";
const data = [
    { name: "جديدة", value: 18, fill: "#3b82f6" },
    { name: "قيد المراجعة", value: 12, fill: "#facc15" },
    { name: "قيد الحل", value: 25, fill: "#f97316" },
    { name: "تم الحل", value: 40, fill: "#22c55e" },
    { name: "مرفوضة", value: 5, fill: "#ef4444" },
];

const MyPie = () => (
    <Pie data={data} dataKey="value" nameKey="name" outerRadius="80%" innerRadius="60%" isAnimationActive={false} />
);

const ComplaintsDonutChart = () => {
    return (
    <div className="bg-white p-4 rounded-xl h-96 font-main">
        <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-warning-100 rounded-xl flex items-center justify-center">
                    <AlertCircle size={20} className="text-warning-600"/>
                </div>
                <h2 className="font-bold text-xl text-gray-800">توزيع حالة الشكاوي</h2>
            </div>
            <p className="text-gray-500 text-sm font-medium">عرض تفصيلي لحالات الطلبات بالارقام</p>
        </div>
        <div className="flex space-x-2 justify-between">
            <ul className="flex-1">
                {data.map((item) => (
                    <li className="flex justify-between items-center px-3 py-2 bg-gray-100 font-main mb-2 rounded-lg hover:scale-105">
                        <div className="flex items-center space-x-2">
                            <span style={{background: item.fill}} className={`block h-3 w-3 rounded-full`}></span>
                            <span className="text-md ">{item.name}</span>
                        </div>
                        <p className="">{item.value}</p>
                    </li>
                ))}
            </ul>
            <div className="flex-1">
                <PieChart responsive
                    style={{
                        gridColumn: '1 / 4',
                        gridRow: '3 / 4',
                        height: '70%',
                        aspectRatio: 1,
                        margin: '0 auto',
                    }}>
                    <MyPie />
                </PieChart>
            </div>
        </div>
    </div>
)}

export default ComplaintsDonutChart 