import { BarChart3 } from "lucide-react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, type ChartOptions,} from "chart.js";

ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CategoriesBarChart = () => {
    const data = {
        labels: ["عملاء VIP", "عملاء نشطون", "عملاء جدد"],
        datasets: [
        {
            label: "فعلي",
            data: [800, 700, 950],
            backgroundColor: "#3b82f6",
            hoverBackgroundColor: "#93c5fd",
            borderColor: "#2563eb",
            borderWidth: 0,
            borderRadius: 6,
        },
        {
            label: "المتوقع",
            data: [1100, 900, 850],
            backgroundColor: "#ea580c",
            hoverBackgroundColor: "#fde68a",
            borderColor: "#c2410c",
            borderWidth: 0,
            borderRadius: 6,
        },
        ],
    };

    const options: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.618,
        plugins: {
        legend: {
            position: "bottom",
            align: "center",
            rtl: false,
            labels: {
            font: {
                family: "Cairo, sans-serif",
                size: 12,
            },
            padding: 15,
            usePointStyle: true,
            pointStyle: "circle",
            },
        },
        tooltip: {
            rtl: false,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: 12,
            bodyFont: {
                family: "Cairo, sans-serif",
                size: 13,
            },
        titleFont: {
            family: "Cairo, sans-serif",
            size: 14,
            weight: "bold" as const,
        },
        cornerRadius: 8,
        },
    },
    scales: {
        x: {
        grid: {
            display: false,
        },
        ticks: {
            font: {
                family: "Cairo, sans-serif",
                size: 12,
            },
        },
        },
        y: {
            beginAtZero: true,
            grid: {
                color: "rgba(0, 0, 0, 0.05)",
            },
            ticks: {
                font: {
                family: "Cairo, sans-serif",
                size: 12,
            },
            },
        },
    },
};

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
        <div className="w-full">
            <Bar data={data} options={options} />
        </div>
    </div>
  );
};

export default CategoriesBarChart;