import MainTable from "./MainTable"
import FeatureIcon from "../common/FeatureIcon"
import CrudActions from "../common/CrudActions"

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
    const textHead = ["العميل", "التواصل", "التصنيف", "الحالة", "آخر تواصل", "الإجراءات"]
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
                            <p className="text-sm text-gray-500">{customer.email}</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">
                    <p className="text-gray-700 font-medium">{customer.phone}</p>
                </td>
                <td className="px-6 py-4">
                    {customer.category === 'VIP' ?
                        <FeatureIcon color="secondary" text={customer.category}/>
                    :
                    customer.category === "جديد" ?
                        <FeatureIcon color="primary" text={customer.category}/>
                    :
                        <FeatureIcon color="default" text={customer.category}/>
                    }
                </td>
                <td className="px-6 py-4">
                    {customer.status === 'نشط' ?
                        <FeatureIcon color="success" text={customer.status}/>
                    :
                    customer.status === "جديد" ?
                        <FeatureIcon color="primary" text={customer.status}/>
                    :
                        <FeatureIcon color="default" text={customer.status}/>
                    }
                </td>
                <td className="px-6 py-4">
                    <p className="text-gray-600 text-sm">منذ {customer.days} {customer.days === 1 ? 'يوم' : 'أيام'}</p>
                </td>
                <td className="px-6 py-4">
                    <div className="flex gap-2">
                        <CrudActions variant="view"/>
                        <CrudActions variant="edit"/>
                        <CrudActions variant="delete"/>
                    </div>
                </td>
            </tr>
    ))}
    />
)}

export default CustomersTable