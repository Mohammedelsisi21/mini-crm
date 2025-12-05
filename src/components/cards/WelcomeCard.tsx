import { Calendar, Clock, Plus } from "lucide-react"
import useCurrentDate from "../common/DatePicker"

const WelcomeCard = () => {
    const {dayName, formatedDate} = useCurrentDate()
return (
    <div style={{background: "var(--gradient-primary)"}} className="rounded-2xl p-8 text-white shadow-2xl w-full">
        <div className="flex justify-between items-start">
            <div>
                <h1 className="text-4xl font-bold mb-3">مرحباً بك، محمد 👋</h1>
                <p className="text-primary-100 text-lg">إليك نظرة عامة على أداء نظامك اليوم</p>
                <div className="flex gap-6 mt-6">
                    <div className="flex items-center gap-2">
                        <Clock size={18} className="text-primary-200" />
                        <span className="text-primary-100">آخر تحديث: منذ 5 دقائق</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-primary-200" />
                        <span className="text-primary-100">{dayName}, {formatedDate}</span>
                    </div>
                </div>
            </div>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all border border-white/30">
                <Plus size={20} />
                <span className="font-semibold">إضافة عميل</span>
            </button>
        </div>
    </div>
)
}

export default WelcomeCard