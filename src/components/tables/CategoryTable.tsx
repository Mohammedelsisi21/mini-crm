import { Package } from "lucide-react"
import MainTable from "./MainTable"
import ViewCategory from "../crud/categoryCrud/ViewCategory"
import UpdateCategory from "../crud/categoryCrud/UpdateCategory"
import DeleteCategory from "../crud/categoryCrud/DeleteCategory"

const data = [
        { category: 'عادي' ,item: 5 },
        { category: 'VIP' ,item: 3 },
        { category: 'جديد' ,item: 1 },
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
                        <div className="bg-gradient-primary w-11 h-11 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <Package size={24} className="text-white"/>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">{category.category}</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">
                    <span className="text-gray-700 font-medium">{category.item}</span>
                </td>
                <td className="px-6 py-4">
                    <div className="flex gap-2">
                        <ViewCategory category={category}/>
                        <UpdateCategory category={category}/>
                        <DeleteCategory id={i}/>
                    </div>
                </td>
            </tr>
    ))}
    />
)}

export default CategoryTable