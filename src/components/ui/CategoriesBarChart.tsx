import { BarChart3 } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    { name: "عملاء VIP", فعلي: 800, المتوقع: 1100 },
    { name: "عملاء نشطون", فعلي: 700, المتوقع: 900 },
    { name: "عملاء جدد", فعلي: 950, المتوقع: 850 },
];

const CategoriesBarChart = () => {
return (
    <div className="bg-white p-6 rounded-2xl shadow border border-gray-100">
        <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <BarChart3 size={20} className="text-primary-800" />
                </div>
                <h2 className="font-bold text-xl text-gray-800">أداء الفئات</h2>
            </div>
            <p className="text-gray-500 text-sm font-medium">
                مقارنة الأداء الفعلي بالمتوقع حسب الفئات
            </p>
        </div>
        <BarChart
            style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
            }}
        >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Tooltip />
                <Legend />
                <Bar dataKey="فعلي" fill="#3b82f6" activeBar={<Rectangle fill="#2563eb" stroke="blue" />} />
                <Bar dataKey="المتوقع" fill="#ea580c" activeBar={<Rectangle fill="#f59e0b" stroke="purple" />} />
        </BarChart>


    </div>
);
};


export default CategoriesBarChart