import MainTable from "./MainTable"
import FeatureIcon from "../common/FeatureIcon"
import CrudActions from "../common/CrudActions"

const data = [
    { name: "أحمد محمد", issueType: "تأخر في التوصيل", description: "العميل يشتكي من تأخر كبير في توصيل الطلب.", priority: "عاجل", status: "جديدة", since: 4, assignedTo: "سارة أحمد",},
    { name: "فاطمة علي", issueType: "جودة المنتج", description: "العميلة غير راضية عن جودة التفصيل.", priority: "متوسط", status: "قيد المعالجة", since: 6, assignedTo: "محمد حسن",},
    { name: "عمر خالد", issueType: "خدمة العملاء", description: "سوء متابعة بعد الاستلام.", priority: "عادي", status: "قيد المعالجة", since: 2, assignedTo: "نور الدين",},
]
const ComplaintsTable = () => {
    const textHead = [ "العميل", "نوع المشكلة", "الوصف", "الأولوية", "الحالة", "منذ", "تم التكليف", "الإجراءات"]
return (
    <MainTable
    dataText={textHead}
    children={data.map((complaint, i) => (
            <tr key={i} className="hover:bg-primary-50 transition-all group">
                <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-gradient-primary w-11 h-11 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <span className="text-white font-bold text-sm">{complaint.name[0]}</span>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">{complaint.name}</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">
                    <p className="text-gray-700 font-medium">{complaint.issueType}</p>
                </td>
                <td className="px-6 py-4">
                    <p className="text-gray-700 font-medium">{complaint.description}</p>
                </td>
                <td className="px-6 py-4">
                    {complaint.priority === 'عاجل' ?
                        <FeatureIcon color="error" text={complaint.priority}/>
                    :
                    complaint.priority === "متوسط" ?
                        <FeatureIcon color="warning" text={complaint.priority}/>
                    :
                        <FeatureIcon color="default" text={complaint.priority}/>
                    }
                </td>
                <td className="px-6 py-4">
                    {complaint.status === 'جديدة' ?
                        <FeatureIcon color="error" text={complaint.status}/>
                    :
                    complaint.status === "قيد المعالجة" ?
                        <FeatureIcon color="warning" text={complaint.status}/>
                    :
                        <FeatureIcon color="default" text={complaint.status}/>
                    }
                </td>
                <td className="px-6 py-4">
                    <p className="text-gray-600 text-sm">منذ {complaint.since} {complaint.since === 1 ? 'يوم' : 'أيام'}</p>
                </td>
                <td className="px-6 py-4">
                    <p className="text-gray-700 font-medium">{complaint.assignedTo}</p>
                </td>
                <td className="px-6 py-4">
                    <div className="flex gap-2">
                        <CrudActions variant="view"/>
                        <CrudActions variant="update"/>
                        <CrudActions variant="delete"/>
                    </div>
                </td>
            </tr>
    ))}
    />
)}

export default ComplaintsTable