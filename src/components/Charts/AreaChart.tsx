import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend, type ChartOptions} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { TrendingUp } from 'lucide-react';

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
    legend: {
        display: false,
        },
    title: {
        display: false,
    },
    },
};

const data = {
    labels: ['الثلاثاء', 'الإربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد', 'الإثنين'],
    datasets: [
        {
        fill: true,
        data: [2000, 7000, 2500, 7500, 2200, 4500, 3000],
        borderColor: '#3b82f6',
        backgroundColor: '#93c5fd',
        borderWidth: 2,
        tension: 0.4,
    }
]};

const AreaChart = () => {
    return (
    <div className="bg-white p-4 rounded-xl font-main shadow">
        <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                    <TrendingUp size={20} className="text-primary-600"/>
                </div>
                <h2 className="font-bold text-xl text-gray-800">اتجاه الإيرادات اليومية</h2>
            </div>
            <p className="text-gray-500 text-sm font-medium">أداء آخر 7 أيام</p>
        </div>
        <div className='w-full h-64'>
            <Line options={options} data={data} />
        </div>
    </div>
)}

export default AreaChart