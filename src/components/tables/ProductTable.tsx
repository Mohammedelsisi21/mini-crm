import { ArrowDown, ArrowUp, Package } from "lucide-react"
import MainTable from "./MainTable"
import FeatureIcon from "../common/FeatureIcon"
import type { ReactNode } from "react"

const data = [
        { name: 'خدمة الخياطة', price: 500, sales: 89, trend: 'عالي', change: 15, status: 'نشط' },
        { name: 'منتج A', price: 250, sales: 67, trend: 'عالي', change: 8, status: 'نشط' },
        { name: 'خدمة التفصيل', price: 800, sales: 54, trend: 'منخفض', change: -3, status: 'نشط' },
        { name: 'منتج B', price: 150, sales: 123, trend: 'عالي', change: 22, status: 'نشط' },
        { name: 'خدمة C', price: 350, sales: 12, trend: 'منخفض', change: -5, status: 'غير نشط' }
    ]
interface IProps {
    children: ReactNode
}
const ProductTable = ({children} : IProps) => {
    const textHead = ["المنتج/الخدمة" ,"السعر" ,"الكمية" ,"الأداء" ,"الحالة" ,"الإجراءات"]
return (
    <MainTable
    dataText={textHead}
    children={data.map((product, i) => (
            <tr key={i} className="hover:bg-primary-50 transition-all groعالي">
                <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div style={{background: 'var(--gradient-secondary)'}} className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md groعالي-hover:scale-110 transition-transform">
                            <Package size={24} className="text-white"/>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">{product.name}</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">
                    <span className="font-bold text-gray-800">{product.price} <span className="text-sm text-gray-600">ج.م</span></span>
                </td>
                <td className="px-6 py-4">
                    <span className="text-gray-700 font-medium">{product.sales}</span>
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                        {product.trend === 'عالي' ? (
                            <FeatureIcon Icon={<ArrowUp size={14} className="text-success-800"/>} color="success" text={product.trend}/>
                        ) : (
                            <FeatureIcon Icon={<ArrowDown size={14} className="text-error-800"/>} color="error" text={product.trend}/>
                        )}
                    </div>
                </td>
                <td className="px-6 py-4">
                    {product.status === 'نشط' ?
                        <FeatureIcon color="success" text={product.status}/>
                    :
                        <FeatureIcon color="default" text={product.status}/>
                    }
                </td>
                <td className="px-6 py-4">
                    <div className="flex gap-2">
                        {children}
                    </div>
                </td>
            </tr>
    ))}
    />
)}

export default ProductTable