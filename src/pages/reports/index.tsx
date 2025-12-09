import { Download, Settings } from "lucide-react"
import MainCardPage from "../../components/cards/MainCardPage"
import ReportCard from "../../components/cards/ReportCard"
import Button from "../../components/common/Button"
import Select from "../../components/form/Select"
import Label from "../../components/common/Label"

const ReportsPage = () => {
  return (
    <div className="space-y-5">
      <MainCardPage title="التقارير والتصدير" des="تصدير البيانات وإنشاء تقارير مفصلة"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <ReportCard color="primary" title="تقرير العملاء" des="تصدير قائمة كاملة بجميع بيانات العملاء" count={120} countType="عميل"/>
        <ReportCard color="success" title="تقرير التواصلات" des="سجل تفصيلي لجميع التواصلات والمكالمات" count={50} countType="تواصل"/>
        <ReportCard color="secondary" title="تقرير المنتجات" des="تحليل شامل لأداء المنتجات والخدمات" count={50} countType="منتج"/>
        <ReportCard color="blue" title="تقرير المبيعات" des="تصدير قائمة كاملة بجميع بيانات تفاصيل المبيعات والإيرادات الشهرية" count={10} countType="ج.م"/>
        <ReportCard color="warning" title="تقرير الشكاوى" des="تحليل الشكاوى والحلول المقترحة" count={30} countType="شكوى"/>
      </div>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-md">
            <Settings size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">تصدير مخصص</h2>
            <p className="text-gray-500 text-sm">قم بإنشاء تقرير مخصص حسب احتياجاتك</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div>
            <Label text="نوع التقرير" />
            <Select>
              <option>العملاء</option>
              <option>التواصلات</option>
              <option>المنتجات</option>
              <option>الشكاوى</option>
              <option>التصنيفات</option>
            </Select>
          </div>
          <div>
            <Label text="الفترة الزمنية" />
            <Select>
              <option>آخر 7 أيام</option>
              <option>آخر 30 يوم</option>
              <option>آخر 3 أشهر</option>
              <option>آخر 6 أشهر</option>
              <option>السنة الحالية</option>
              <option>مخصص</option>
            </Select>
          </div>
          <div>
            <Label text="التنسيق"/>
            <Select>
              <option>Excel (.xlsx)</option>
              <option>CSV (.csv)</option>
              <option>PDF (.pdf)</option>
            </Select>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="success" ariaLabel="download-btn">
            <Download size={24} />
            <span>تصدير التقرير المخصص</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ReportsPage