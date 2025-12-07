import WelcomeCard from "../../components/cards/WelcomeCard"
import RecentActivities from "../../components/ui/RecentActivities"
import TopProduct from "../../components/ui/TopProduct"
import CategoriesBarChart from "../../components/Charts/CategoriesBarChart"
import ComplaintsChart from "../../components/Charts/ComplaintsChart"
import AreaChart from "../../components/Charts/AreaChart"
import HomeCard from "../../components/cards/HomeCard"


const HomePage = () => {
  return (
    <div className="space-y-5">
      <WelcomeCard />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <HomeCard
          variant="primary"
          up={12}
          num={1055}
          title="إجمالي العملاء"
          des="+150 عميل جديد هذا الشهر"/>
        <HomeCard
          variant="success"
          up={8}
          num={45}
          title="صفقات نشطة"
          des="+27 صفقة قيد الإنجاز"/>
        <HomeCard
          variant="secondary"
          up={15}
          num={125000}
          title="إيرادات الشهر"
          des="+إيرادات الشهرالهدف: 150,000 ج.م"/>
        <HomeCard
          variant="warning"
          up={6}
          num={12}
          title="شكاوى قيد المعالجة"
          des="+5 تتطلب إجراء فوري"/>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
        <AreaChart />
        <ComplaintsChart />
        <RecentActivities />
        <TopProduct />
      </div>
      <div className="grid grid-cols-1 w-full md:w-[600px] m-auto">
        <CategoriesBarChart />
      </div>
    </div>
  )
}

export default HomePage