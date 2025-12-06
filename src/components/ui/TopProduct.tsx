import { ChevronDown } from "lucide-react";
import { useState } from "react";
import TopProCard from "../cards/TopProCard";

const topProducts = [
    { name: 'منتج  A', sales: 90, revenue: 45000, change: 20 },
    { name: 'منتج B', sales: 86, revenue: 33500, change: 18 },
    { name: 'منتج C', sales: 70, revenue: 27000, change: 15 },
    { name: 'منتج D', sales: 66, revenue: 40000, change: 9 },
    { name: 'منتج E', sales: 55, revenue: 45000, change: 6 },
    { name: 'منتج F', sales: 30, revenue: 30110, change: 3 }
];

const TopProduct = () => {
    const [isShow, setIsShowAll] = useState(false)
    const displayedProduct = isShow ?
        topProducts :
        topProducts.slice(0,3)


return (
    <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-[450px] ${isShow ? "h-[670px]" : "h-[400px]"}`}>
        <div className="flex justify-between items-center mb-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">الأكثر طلباً</h2>
                <p className="text-gray-500 text-sm mt-1">المنتجات الأعلى مبيعاً</p>
            </div>
            <button onClick={() => setIsShowAll(prev => !prev)} className="text-blue-600 hover:text-blue-700 cursor-pointer text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                <span>{isShow ? "عرض اقل" : "عرض أكثر"}</span>
                <ChevronDown size={16} className={`transition-transform ${isShow ? 'rotate-180' : ''}`} />
            </button>
        </div>
        <div className="space-y-4">
            {displayedProduct.map((product, index) => (
                <TopProCard key={index} name={product.name} sales={product.sales} revenue={product.revenue} change={product.change} />
                ))}
        </div>
    </div>
)
}



export default TopProduct