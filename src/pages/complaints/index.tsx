import MainCardPage from "../../components/cards/MainCardPage"

const ComplaintsPage = () => {
  return (
    <div className="space-y-5">
      <MainCardPage title="إدارة الشكاوى" des="متابعة وحل شكاوى العملاء لتحسين الخدمة" textBtn="إضافة شكوي"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      </div>
    </div>
  )
}

export default ComplaintsPage