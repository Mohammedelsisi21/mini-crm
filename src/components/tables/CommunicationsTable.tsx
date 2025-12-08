import { Edit2, Eye, Trash2 } from "lucide-react"
import MainTable from "./MainTable"
import FeatureIcon from "../common/FeatureIcon"

const data = [
        { name: "أحمد محمد", contactType: "مكالمة هاتفية", employee: "سارة أحمد", status: "عاجل", description: "العميل مهتم بالخدمة ويريد معرفة الأسعار والمواعيد.", since: 4},
        { name: "فاطمة علي", contactType: "بريد إلكتروني", employee: "محمد حسن", status: "متوسط", description: "تم إرسال عرض سعر والعميلة تفاوض على السعر.", since: 3},
        { name: "عمر خالد", contactType: "اجتماع", employee: "نور الدين", status: "عادي", description: "تم الاتفاق على مشروع جديد.", since: 1},
    ]
const CommunicationsTable = () => {
    const textHead = [ "العميل", "وسيلة التواصل", "الموظف", "الحالة", "الوصف", "منذ", "الإجراءات"]
return (
    <MainTable
    dataText={textHead}
    children={data.map((customer, i) => (
            <tr key={i} className="hover:bg-primary-50 transition-all group">
                <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div style={{background: 'var(--gradient-primary)'}} className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <span className="text-white font-bold text-sm">{customer.name[0]}</span>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">{customer.name}</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">
                    <p className="text-gray-700 font-medium">{customer.contactType}</p>
                </td>
                <td className="px-6 py-4">
                    <p className="text-gray-700 font-medium">{customer.employee}</p>
                </td>
                <td className="px-6 py-4">
                    {customer.status === 'عاجل' ?
                        <FeatureIcon color="error" text={customer.status}/>
                    :
                    customer.status === "متوسط" ?
                        <FeatureIcon color="success" text={customer.status}/>
                    :
                        <FeatureIcon color="default" text={customer.status}/>
                    }
                </td>
                <td className="px-6 py-4">
                    <p className="text-gray-700 font-medium">{customer.description}</p>
                </td>
                <td className="px-6 py-4">
                    <p className="text-gray-600 text-sm">منذ {customer.since} {customer.since === 1 ? 'يوم' : 'أيام'}</p>
                </td>
                <td className="px-6 py-4">
                    <div className="flex gap-2">
                        <button className="p-2.5 cursor-pointer text-primary-600 hover:bg-primary-100 rounded-lg transition-all" title="عرض">
                            <Eye size={18} />
                        </button>
                        <button className="p-2.5 text-success-600 hover:bg-success-100 rounded-lg transition-all" title="تعديل">
                            <Edit2 size={18} />
                        </button>
                        <button className="p-2.5 text-error-600 hover:bg-error-100 rounded-lg transition-all" title="حذف">
                            <Trash2 size={18} />
                        </button>
                    </div>
                </td>
            </tr>
    ))}
    />
)}

export default CommunicationsTable