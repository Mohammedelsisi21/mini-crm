import { CheckCircle, Star, User, UserPlus } from "lucide-react"
import MainCardPage from "../../components/cards/MainCardPage"
import CustomersTable from "../../components/tables/CustomersTable"
import Pagination from "../../components/common/Pagination"
import ShearCard from "../../components/cards/ShearCard"
import TableToolbar from "../../components/tables/TableToolbar"
import CreateCustomer from "../../components/crud/customerCrud/CreateCustomer"
import ViewCustomer from "../../components/crud/customerCrud/ViewCustomer"
import UpdateCustomer from "../../components/crud/customerCrud/UpdateCustomer"
import DeleteCustomer from "../../components/crud/customerCrud/DeleteCustomer"

const CustomersPage = () => {
  return (
    <div className="space-y-5">
      <MainCardPage title="إدارة العملاء" des="إدارة وتتبع جميع بيانات العملاء">
        <CreateCustomer />
      </MainCardPage>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <ShearCard title="إجمالي العملاء" number={305} variant="primary" Icon={User}/>
        <ShearCard title="عملاء نشطين" number={125} variant="success" Icon={CheckCircle}/>
        <ShearCard title="عملاء VIP" number={55} variant="secondary" Icon={Star}/>
        <ShearCard title="عملاء جدد" number={125} variant="warning" Icon={UserPlus}/>
      </div>
      <TableToolbar placeholder="البحث عن عميل بالاسم، الهاتف، أو البريد..." />
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <CustomersTable>
          <ViewCustomer />
          <UpdateCustomer />
          <DeleteCustomer />
        </CustomersTable>
        <Pagination />
      </div>
    </div>
  )
}

export default CustomersPage