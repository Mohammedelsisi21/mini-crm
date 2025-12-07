import CustomersCard from "../../components/cards/CustomersCard"
import MainCardPage from "../../components/cards/MainCardPage"

const CustomersPage = () => {
  return (
    <div className="space-y-5">
      <MainCardPage title="إدارة العملاء" des="إدارة وتتبع جميع بيانات العملاء" textBtn="إضافة عميل جديد"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <CustomersCard title="إجمالي العملاء" number={305} variant="primary" />
        <CustomersCard title="عملاء نشطين" number={125} variant="success" />
        <CustomersCard title="عملاء VIP" number={55} variant="secondary" />
        <CustomersCard title="عملاء جدد" number={125} variant="warning" />
      </div>
    </div>
  )
}

export default CustomersPage