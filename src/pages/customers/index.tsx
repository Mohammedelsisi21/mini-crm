import { CheckCircle, Star, UserPlus, Users } from "lucide-react"
import CustomersCard from "../../components/cards/CustomersCard"
import MainCardPage from "../../components/cards/MainCardPage"

const CustomersPage = () => {
  return (
    <div className="space-y-5">
      <MainCardPage title="إدارة العملاء" des="إدارة وتتبع جميع بيانات العملاء" textBtn="إضافة عميل جديد"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <CustomersCard title="إجمالي العملاء" number="305" color="primary" icon={<Users className="text-blue-800 opacity-50" size={32}/>}/>
        <CustomersCard title="عملاء نشطين" number="125" color="success" icon={<CheckCircle className="text-success-800 opacity-50" size={32}/>}/>
        <CustomersCard title="عملاء VIP" number="55" color="secondary" icon={<Star className="text-secondary-800 opacity-50" size={32}/>}/>
        <CustomersCard title="عملاء جدد" number="125" color="warning" icon={<UserPlus className="text-warning-800 opacity-50" size={32}/>}/>
      </div>
    </div>
  )
}

export default CustomersPage