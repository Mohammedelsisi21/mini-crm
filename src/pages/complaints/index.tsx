import { AlertCircle, CheckCircle, Clock, Star } from "lucide-react"
import ComplaintsCard from "../../components/cards/ComplaintsCard"
import MainCardPage from "../../components/cards/MainCardPage"

const ComplaintsPage = () => {
  return (
    <div className="space-y-5">
      <MainCardPage title="إدارة الشكاوى" des="متابعة وحل شكاوى العملاء لتحسين الخدمة" textBtn="إضافة شكوي"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <ComplaintsCard variant="error" Icon={AlertCircle} text="عاجل" number={8} title="شكاوى قيد المعالجة"/>
        <ComplaintsCard variant="warning" Icon={Clock} text="متابعة" number={12} title="شكاوى تحت المراجعة"/>
        <ComplaintsCard variant="success" Icon={CheckCircle} text="تم" number={145} title="شكاوى محلولة"/>
        <ComplaintsCard variant="primary" Icon={Star} text="معدل" number={92} title="معدل الحل"/>
      </div>
    </div>
  )
}

export default ComplaintsPage