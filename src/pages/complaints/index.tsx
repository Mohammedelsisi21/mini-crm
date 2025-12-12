import { AlertCircle, CheckCircle, Clock, Star } from "lucide-react"
import CompCateCard from "../../components/cards/CompCateCard"
import MainCardPage from "../../components/cards/MainCardPage"
import TableToolbar from "../../components/tables/TableToolbar"
import Pagination from "../../components/common/Pagination"
import ComplaintsTable from "../../components/tables/ComplaintsTable"
import CreateComplaint from "../../components/crud/complaintCrud/CreateComplaint"

const ComplaintsPage = () => {
  return (
    <div className="space-y-5">
      <MainCardPage title="إدارة الشكاوى" des="متابعة وحل شكاوى العملاء لتحسين الخدمة">
        <CreateComplaint />
      </MainCardPage>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <CompCateCard variant="error" Icon={AlertCircle} text="عاجل" number={8} title="شكاوى قيد المعالجة"/>
        <CompCateCard variant="warning" Icon={Clock} text="متابعة" number={12} title="شكاوى تحت المراجعة"/>
        <CompCateCard variant="success" Icon={CheckCircle} text="تم" number={145} title="شكاوى محلولة"/>
        <CompCateCard variant="primary" Icon={Star} text="معدل" number={92} title="معدل الحل"/>
      </div>
      <TableToolbar placeholder="البحث عن المشكلات..." />
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <ComplaintsTable />
        <Pagination />
      </div>
    </div>
  )
}

export default ComplaintsPage