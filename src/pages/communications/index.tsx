import MainCardPage from "../../components/cards/MainCardPage"

const CommunicationsPage = () => {
  return (
    <div className="space-y-5">
      <MainCardPage title="سجل التواصلات" des="تتبع جميع المكالمات والرسائل مع العملاء" textBtn="إضافة تواصل"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      </div>
    </div>
  )
}

export default CommunicationsPage