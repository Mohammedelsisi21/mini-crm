import MainCardPage from "../../components/cards/MainCardPage"

const ProductsPage = () => {
  return (
    <div className="space-y-5">
      <MainCardPage title="المنتجات والخدمات" des="إدارة المنتجات وتتبع الأداء والمبيعات" textBtn="إضافة منتج/خدمة"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      </div>
    </div>
  )
}

export default ProductsPage