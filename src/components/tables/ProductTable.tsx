import { ArrowDown, ArrowUp, Edit2, Eye, Package, Trash2 } from "lucide-react"
import MainTable from "./MainTable"

const data = [
        { name: 'خدمة الخياطة', type: 'خدمة', price: 500, sales: 89, revenue: 44500, trend: 'up', change: 15, status: 'نشط' },
        { name: 'منتج A', type: 'منتج', price: 250, sales: 67, revenue: 16750, trend: 'up', change: 8, status: 'نشط' },
        { name: 'خدمة التفصيل', type: 'خدمة', price: 800, sales: 54, revenue: 43200, trend: 'down', change: -3, status: 'نشط' },
        { name: 'منتج B', type: 'منتج', price: 150, sales: 123, revenue: 18450, trend: 'up', change: 22, status: 'نشط' },
        { name: 'خدمة C', type: 'خدمة', price: 350, sales: 12, revenue: 4200, trend: 'down', change: -5, status: 'غير نشط' }
    ]
const ProductTable = () => {
    const textHead = ["المنتج/الخدمة", "النوع" ,"السعر" ,"المبيعات" ,"الإيرادات" ,"الأداء" ,"الحالة" ,"الإجراءات"]
return (
    <MainTable
    dataText={textHead}
    children={data.map((product, i) => (
            <tr key={i} className="hover:bg-primary-50 transition-all group">
                <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div style={{background: 'var(--gradient-secondary)'}} className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <Package size={24} className="text-white"/>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">{product.name}</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                        product.type === 'خدمة' ? 'bg-success-100 text-success-700 border border-success-200' :
                        product.type === 'منتج' ? 'bg-primary-100 text-primary-700 border border-primary-200' :
                        'bg-gray-100 text-gray-700 border border-gray-200'
                    }`}>
                        {product.type}
                    </span>
                </td>
                <td className="px-6 py-4">
                    <span className="font-bold text-gray-800">{product.price} <span className="text-sm text-gray-600">ج.م</span></span>
                </td>
                <td className="px-6 py-4">
                    <span className="text-gray-700 font-medium">{product.sales}</span>
                </td>
                <td className="px-6 py-4">
                    <span className="font-bold text-green-600">{product.revenue.toLocaleString()} ج.م</span>
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                        {product.trend === 'up' ? (
                            <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                                <ArrowUp size={14} className="text-green-600" />
                                <span className="text-xs text-green-600 font-bold">{product.change}%</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-1 bg-red-50 px-2 py-1 rounded-full">
                                <ArrowDown size={14} className="text-red-600" />
                                <span className="text-xs text-red-600 font-bold">{Math.abs(product.change)}%</span>
                            </div>
                        )}
                    </div>
                </td>
                <td className="px-6 py-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                        product.status === 'نشط' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-gray-100 text-gray-700 border border-gray-200'
                    }`}>
                        {product.status}
                    </span>
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

export default ProductTable