import { FileText, Phone, Users } from "lucide-react"
import MainCardPage from "../../components/cards/MainCardPage"
import ShearCard from "../../components/cards/ShearCard"
import TableToolbar from "../../components/tables/TableToolbar"
import CommunicationsTable from "../../components/tables/communicationsTable"
import Pagination from "../../components/common/Pagination"

const CommunicationsPage = () => {
  return (
    <div className="space-y-5">
      <MainCardPage title="سجل التواصلات" des="تتبع جميع المكالمات والرسائل مع العملاء" textBtn="إضافة تواصل"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <ShearCard title="إجمالي المكالمات" number={31} variant="success" Icon={Phone}/>
        <ShearCard title="إجمالي رسائل البريد" number={15} variant="primary" Icon={FileText}/>
        <ShearCard title="إجمالي الاجتماعات" number={5} variant="secondary" Icon={Users}/>
        <ShearCard title="إجمالي رسائل الواتساب" number={11} variant="warning" Icon={Phone}/>
      </div>
      <TableToolbar placeholder="البحث عن منتج التواصلات..." />
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <CommunicationsTable />
        <Pagination />
      </div>
    </div>
  )
}

export default CommunicationsPage