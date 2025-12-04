import { AlertCircle, DollarSign, TrendingUp, User } from "lucide-react"
import HomeCard from "../../components/cards/HomeCard"
import WelcomeCard from "../../components/cards/WelcomeCard"

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <WelcomeCard />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <HomeCard
          bg="blue"
          color="#2563eb"
          icon={<User size={28} className="text-white"/>}
          up={12}
          num={1055}
          title="إجمالي العملاء"
          des="+150 عميل جديد هذا الشهر"/>
        <HomeCard
          bg="success"
          color="#059669"
          icon={<TrendingUp size={28} className="text-white"/>}
          up={8}
          num={45}
          title="صفقات نشطة"
          des="+27 صفقة قيد الإنجاز"/>
        <HomeCard
          bg="purple"
          color="#7c3aed"
          icon={<DollarSign size={28} className="text-white"/>}
          up={15}
          num={125000}
          title="إيرادات الشهر"
          des="+إيرادات الشهرالهدف: 150,000 ج.م"/>
        <HomeCard
          bg="warning"
          warning
          color="#ea580c"
          icon={<AlertCircle size={28} className="text-white"/>}
          up={12}
          num={1055}
          title="شكاوى قيد المعالجة"
          des="+5 تتطلب إجراء فوري"/>
      </div>
      <div className="gird grid-cols-1 md:grid-cols-2">
        <div className="">
          
        </div>
        <div className="">
          
        </div>
      </div>
      <div className=""></div>
    </div>
  )
}

export default HomePage