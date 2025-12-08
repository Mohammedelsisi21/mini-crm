import { CheckCircle, Download, Filter, Search, Star, User, UserPlus } from "lucide-react"
import MainCardPage from "../../components/cards/MainCardPage"
import Input from "../../components/common/Input"
import Button from "../../components/common/Button"
import CustomersTable from "../../components/tables/CustomersTable"
import Pagination from "../../components/common/Pagination"
import CusProCard from "../../components/cards/CusProCard"

const CustomersPage = () => {
  return (
    <div className="space-y-5">
      <MainCardPage title="إدارة العملاء" des="إدارة وتتبع جميع بيانات العملاء" textBtn="إضافة عميل جديد"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <CusProCard title="إجمالي العملاء" number={305} variant="primary" Icon={User}/>
        <CusProCard title="عملاء نشطين" number={125} variant="success" Icon={CheckCircle}/>
        <CusProCard title="عملاء VIP" number={55} variant="secondary" Icon={Star}/>
        <CusProCard title="عملاء جدد" number={125} variant="warning" Icon={UserPlus}/>
      </div>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex gap-4 flex-wrap">
          <div className="flex-1">
            <Input
            type="text"
            name="search"
            placeholder="البحث عن عميل بالاسم، الهاتف، أو البريد..."
            icon={<Search />}
            pl="pl-4"/>
          </div>
          <Button ariaLabel="filter-btn" variant="outline" w="w-fit">
            <Filter size={20} />
            <span>تصفية متقدمة</span>
          </Button>
          <Button ariaLabel="Download-btn" variant="success" w="w-fit">
            <Download size={20} />
            <span>تصدير</span>
          </Button>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <CustomersTable />
        <Pagination />
      </div>
    </div>
  )
}

export default CustomersPage