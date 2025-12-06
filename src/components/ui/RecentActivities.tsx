import { ChevronDown } from "lucide-react";
import ActivityCard from "../cards/ActivityCard";
import { useState } from "react";


const recentActivities = [
    { id: 1, customer: 'أحمد محمد', action: 'تواصل جديد', employee: 'سارة أحمد', time: 'منذ 5 دقائق', type: 'call', status: 'success' },
    { id: 2, customer: 'فاطمة علي', action: 'طلب جديد', employee: 'محمد حسن', time: 'منذ 15 دقيقة', type: 'order', status: 'pending' },
    { id: 3, customer: 'عمر خالد', action: 'شكوى جديدة', employee: 'نور الدين', time: 'منذ ساعة', type: 'complaint', status: 'warning' },
    { id: 4, customer: 'منى سعيد', action: 'متابعة', employee: 'علي كمال', time: 'منذ 2 ساعة', type: 'followup', status: 'info' },
    { id: 5, customer: 'أحمد محمد', action: 'تواصل جديد', employee: 'سارة أحمد', time: 'منذ 5 دقائق', type: 'call', status: 'success' },
    { id: 6, customer: 'فاطمة علي', action: 'طلب جديد', employee: 'محمد حسن', time: 'منذ 15 دقيقة', type: 'order', status: 'pending' },
    { id: 7, customer: 'عمر خالد', action: 'شكوى جديدة', employee: 'نور الدين', time: 'منذ ساعة', type: 'complaint', status: 'warning' },
];

const RecentActivities = () => {
    const [showAll, setShowAll] = useState(false);

    const displayedActivities = showAll
        ? recentActivities
        : recentActivities.slice(0, 3);

return (
    <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-6 ${showAll ? "h-[780px]" : "h-[400px]"}`}>
        <div className="flex justify-between items-center mb-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">الأنشطة الأخيرة</h2>
                <p className="text-gray-500 text-sm mt-1">آخر التحديثات والتفاعلات</p>
            </div>
            <button onClick={() => setShowAll((prev) => !prev)} className="text-blue-600 hover:text-blue-700 cursor-pointer text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                <span>{showAll ? "عرض اقل" : "عرض أكثر"}</span>
                <ChevronDown size={16} className={`transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
        </div>
            <div className="space-y-3">
            {displayedActivities.map(activity => (
                <ActivityCard
                key={activity.id}
                status={activity.status}
                type={activity.type}
                customer={activity.customer}
                action={activity.action}
                employee={activity.employee}
                time={activity.time}/>
            ))}
        </div>

    </div>
)
}

export default RecentActivities