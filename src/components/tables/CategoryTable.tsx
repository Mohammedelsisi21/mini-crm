import { Edit2, Eye, Package, Trash2 } from "lucide-react"
import MainTable from "./MainTable"

const data = [
        { category: 'عادي' ,number: 4 },
        { category: 'VIP' ,number: 4 },
        { category: 'جديد' ,number: 4 },
    ]
const CategoryTable = () => {
    const textHead = ["التصنيف","العدد","الإجراءات"]
return (
    <MainTable
    dataText={textHead}
    children={data.map((category, i) => (
            <tr key={i} className="hover:bg-primary-50 transition-all group">
                <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div style={{background: 'var(--gradient-primary)'}} className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <Package size={24} className="text-white"/>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">{category.category}</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">
                    <span className="text-gray-700 font-medium">{category.number}</span>
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
    />
)}

export default CategoryTable