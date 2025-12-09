
import MainTable from "./MainTable"
import FeatureIcon from "../common/FeatureIcon"
import type { ReactNode } from "react"

const data = [
        { name: "أحمد محمد", contactType: "مكالمة هاتفية", employee: "سارة أحمد", status: "عاجل", description: "العميل مهتم بالخدمة ويريد معرفة الأسعار والمواعيد.", since: 4},
        { name: "فاطمة علي", contactType: "بريد إلكتروني", employee: "محمد حسن", status: "متوسط", description: "تم إرسال عرض سعر والعميلة تفاوض على السعر.", since: 3},
        { name: "عمر خالد", contactType: "اجتماع", employee: "نور الدين", status: "عادي", description: "تم الاتفاق على مشروع جديد.", since: 1},
    ]

interface IProps {
    children: ReactNode
}
const CommunicationsTable = ({children}: IProps) => {
    const textHead = [ "العميل", "وسيلة التواصل", "الموظف", "الحالة", "الوصف", "منذ", "الإجراءات"]
return (<>
    <MainTable
    dataText={textHead}
    children={data.map((communication, i) => (
            <tr key={i} className="hover:bg-primary-50 transition-all group">
                <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div style={{background: 'var(--gradient-primary)'}} className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <span className="text-white font-bold text-sm">{communication.name[0]}</span>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">{communication.name}</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">
                    <p className="text-gray-700 font-medium">{communication.contactType}</p>
                </td>
                <td className="px-6 py-4">
                    <p className="text-gray-700 font-medium">{communication.employee}</p>
                </td>
                <td className="px-6 py-4">
                    {communication.status === 'عاجل' ?
                        <FeatureIcon color="error" text={communication.status}/>
                    :
                    communication.status === "متوسط" ?
                        <FeatureIcon color="success" text={communication.status}/>
                    :
                        <FeatureIcon color="default" text={communication.status}/>
                    }
                </td>
                <td className="px-6 py-4">
                    <p className="text-gray-700 font-medium">{communication.description}</p>
                </td>
                <td className="px-6 py-4">
                    <p className="text-gray-600 text-sm">منذ {communication.since} {communication.since === 1 ? 'يوم' : 'أيام'}</p>
                </td>
                <td className="px-6 py-4">
                    <div className="flex gap-2">
                    {children}
                    </div>
                </td>
            </tr>
    ))}
    />
</>)}

export default CommunicationsTable