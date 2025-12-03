import { Calendar, Search } from "lucide-react"
import Input from "../common/Input"
import useCurrentDate from "./MyDate"

const TopBar = () => {
  const {dayName, formatedDate} = useCurrentDate()
  return (
    <div className="bg-white shadow-md border-b border-gray-200 px-8 py-5 sticky top-0 z-10 backdrop-blur-sm bg-opacity-95">
      <div className="flex justify-between items-center space-x-40">
        <div className=" flex-1">
          <Input type="text" placeholder="بحث سريع في النظام..." name="search" icon={<Search size={20}/>} pl="pl-4"/>
        </div>
        <div className="flex items-center gap-4">
          <button aria-label="Calendar" className="p-3 hover:bg-gray-100 rounded-xl transition-all">
            <Calendar size={22} className="text-gray-600" />
          </button>
          <div className="h-8 w-px bg-gray-300 mx-2"></div>
            <div className="text-right">
              <p className="text-sm font-bold text-gray-800">{dayName}</p>
              <p className="text-xs text-gray-500">{formatedDate}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default TopBar