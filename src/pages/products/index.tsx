import { CheckCircle, DollarSign, Package, TrendingUp } from "lucide-react"
import ShearCard from "../../components/cards/ShearCard"
import MainCardPage from "../../components/cards/MainCardPage"
import Pagination from "../../components/common/Pagination"
import ProductTable from "../../components/tables/ProductTable"
import TableToolbar from "../../components/tables/TableToolbar"

const ProductsPage = () => {
  return (
    <div className="space-y-5">
      <MainCardPage title="المنتجات والخدمات" des="إدارة المنتجات وتتبع الأداء والمبيعات" textBtn="إضافة منتج/خدمة"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <ShearCard title="إجمالي المنتجات" number={305} variant="primary" Icon={Package} />
        <ShearCard title="منتجات نشطة" number={125} variant="success" Icon={CheckCircle} />
        <ShearCard title="إجمالي المبيعات" number={55} variant="secondary" Icon={TrendingUp} />
        <ShearCard title="الإيرادات" number={125} variant="warning" Icon={DollarSign}/>
      </div>
      <TableToolbar placeholder="البحث عن منتج بالاسم..." />
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <ProductTable />
        <Pagination />
      </div>
    </div>
  )
}

export default ProductsPage