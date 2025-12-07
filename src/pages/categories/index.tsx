import MainCardPage from "../../components/cards/MainCardPage"

const CategoriesPage = () => {
  return (
    <div className="space-y-5">
      <MainCardPage title="تصنيفات العملاء" des="تنظيم العملاء في مجموعات لسهولة الاستهداف" textBtn="إضافة تصنيف"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      </div>
    </div>
  )
}

export default CategoriesPage