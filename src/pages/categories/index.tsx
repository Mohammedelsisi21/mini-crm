import { Newspaper, Star, User } from "lucide-react"
import CompCateCard from "../../components/cards/CompCateCard"
import MainCardPage from "../../components/cards/MainCardPage"
import TableToolbar from "../../components/tables/TableToolbar"
import Pagination from "../../components/common/Pagination"
import CategoryTable from "../../components/tables/CategoryTable"
import CreateCategory from "../../components/crud/categoryCrud/CreateCategory"

const CategoriesPage = () => {
  return (
    <div className="space-y-5">
      <MainCardPage title="تصنيفات العملاء" des="تنظيم العملاء في مجموعات لسهولة الاستهداف">
        <CreateCategory />
      </MainCardPage>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <CompCateCard variant="primary" Icon={User} title="عملاء عادين" number={50}/>
        <CompCateCard variant="secondary" Icon={Star} title="عملاء VIP" number={20}/>
        <CompCateCard variant="warning" Icon={Newspaper} title="عملاء جدد" number={40}/>
      </div>
      <TableToolbar placeholder="البحث عن عميل بالاسم..." />
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <CategoryTable />
        <Pagination />
      </div>

    </div>
  )
}

export default CategoriesPage