import { Chart as ChartJS, ArcElement, Tooltip, Legend, type ChartOptions } from 'chart.js';
import { AlertCircle } from "lucide-react";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
    legend: {
        display: false,
    },
    title: {
        display: false,
    }},
};

const data = {
    labels: ['جديدة', 'قيد المراجعة', 'قيد الحل', 'تم الحل', 'مرفوضة'],
    datasets: [
    {
        label: '# of Votes',
        data: [18, 12, 25, 40, 5],
        backgroundColor: [
            '#3b82f6',
            '#facc15',
            '#f97316',
            '#22c55e',
            '#ef4444',
        ],
        borderColor: [
            '#1d4ed8',
            '#fbbf24',
            '#ea580c',
            '#047857',
            '#b91c1c',
        ],
        borderWidth: 1,
    }],
};

const dataLable = [
    { name: "جديدة", value: 18, fill: "#3b82f6" },
    { name: "قيد المراجعة", value: 12, fill: "#facc15" },
    { name: "قيد الحل", value: 25, fill: "#f97316" },
    { name: "تم الحل", value: 40, fill: "#22c55e" },
    { name: "مرفوضة", value: 40, fill: "#ef4444" },
];

const ComplaintsChart = () => {
    return (
    <div className="bg-white p-4 rounded-xl font-main shadow">
        <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-warning-100 rounded-xl flex items-center justify-center">
                    <AlertCircle size={20} className="text-warning-600"/>
                </div>
                <h2 className="font-bold text-xl text-gray-800">توزيع حالة الشكاوي</h2>
            </div>
            <p className="text-gray-500 text-sm font-medium">عرض تفصيلي لحالات الطلبات بالارقام</p>
        </div>
        <div className="flex flex-col space-x-5 justify-between md:flex-row items-center">
            <ul className="flex-1 self-start">
                {dataLable.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center px-3 py-2 bg-gray-100 font-main mb-2 rounded-lg hover:scale-105">
                        <div className="flex items-center space-x-2">
                            <span style={{background: item.fill}} className={`block h-3 w-3 rounded-full`}></span>
                            <span className="text-md ">{item.name}</span>
                        </div>
                        <p className="">{item.value}</p>
                    </li>
                ))}
            </ul>
            <div className="flex-1 lg:h-64">
                <Doughnut data={data} options={options}/>
            </div>
        </div>
    </div>
)}

export default ComplaintsChart 