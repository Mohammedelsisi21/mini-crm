import { Edit2, Eye, Trash2 } from "lucide-react"
import TextHead from "./TextHead"

const data = [
        { name: 'أحمد محمد علي', phone: '01234567891', email: 'ahmed@example.com', category: 'VIP', status: 'نشط', days: 1 },
        { name: 'فاطمة حسن', phone: '01234567892', email: 'fatima@example.com', category: 'عادي', status: 'نشط', days: 3 },
        { name: 'عمر خالد', phone: '01234567893', email: 'omar@example.com', category: 'جديد', status: 'غير نشط', days: 5 },
        { name: 'منى سعيد', phone: '01234567894', email: 'mona@example.com', category: 'VIP', status: 'نشط', days: 2 },
        { name: 'علي كمال', phone: '01234445495', email: 'ali@example.com', category: 'VIP', status: 'غير نشط', days: 15 },
        { name: 'هنا محمد', phone: '01557575595', email: 'hana@example.com', category: 'عادي', status: 'نشط', days: 6 },
        { name: 'مروج محمد', phone: '01055454545', email: 'morog@example.com', category: 'VIP', status: 'نشط', days: 7 },
        { name: 'محمد احمد', phone: '01011707632', email: 'mohamed@example.com', category: 'VIP', status: 'غير نشط', days: 11 },
        { name: 'عبدالرافع محمد', phone: '01510445005', email: 'abdo@example.com', category: 'عادي', status: 'نشط', days: 9 },
        { name: 'عبدالرحمن محمد', phone: '01350450574', email: 'abdo@example.com', category: 'VIP', status: 'نشط', days: 8 },
    ]
const CustomersTable = () => {
return (
    <div className="overflow-x-auto">
        <table className="w-full">
            <thead className="bg-linear-to-r from-background to-background-alt">
                <tr>
                    <TextHead text="العميل" />
                    <TextHead text="التواصل" />
                    <TextHead text="التصنيف" />
                    <TextHead text="الحالة" />
                    <TextHead text="آخر تواصل" />
                    <TextHead text="الإجراءات" />
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
            {data.map((customer, i) => (
                <tr key={i} className="hover:bg-primary-50 transition-all group">
                    <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                            <div style={{background: 'var(--gradient-primary)'}} className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                <span className="text-white font-bold text-sm">{customer.name[0]}</span>
                            </div>
                            <div>
                                <p className="font-bold text-gray-800">{customer.name}</p>
                                <p className="text-sm text-gray-500">{customer.email}</p>
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4">
                        <p className="text-gray-700 font-medium">{customer.phone}</p>
                    </td>
                    <td className="px-6 py-4">
                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                            customer.category === 'VIP' ? 'bg-purple-100 text-purple-700 border border-purple-200' :
                            customer.category === 'جديد' ? 'bg-primary-100 text-primary-700 border border-primary-200' :
                            'bg-gray-100 text-gray-700 border border-gray-200'
                        }`}>
                            {customer.category}
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                            customer.status === 'نشط' ? 'bg-success-100 text-success-700 border border-success-200' :
                            customer.status === 'جديد' ? 'bg-primary-100 text-primary-700 border border-primary-200' :
                            'bg-gray-100 text-gray-700 border border-gray-200'
                        }`}>
                            {customer.status}
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <p className="text-gray-600 text-sm">منذ {customer.days} {customer.days === 1 ? 'يوم' : 'أيام'}</p>
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex gap-2">
                            <button className="p-2.5 cursor-pointer text-primary-600 hover:bg-primary-50 rounded-lg transition-all" title="عرض">
                                <Eye size={18} />
                            </button>
                            <button className="p-2.5 text-success-600 hover:bg-success-50 rounded-lg transition-all" title="تعديل">
                                <Edit2 size={18} />
                            </button>
                            <button className="p-2.5 text-error-600 hover:bg-error-50 rounded-lg transition-all" title="حذف">
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
)
}

export default CustomersTable