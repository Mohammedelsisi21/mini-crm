import Input from '../common/Input'
import { Download, Filter, Search } from 'lucide-react'
import Button from '../common/Button'

interface IProps {
    placeholder: string
}
const TableToolbar = ({placeholder} : IProps) => {
return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex gap-4 flex-wrap">
            <div className="flex-1">
                <Input
                type="text"
                name="search"
                placeholder={placeholder}
                icon={<Search />}
                pl="pl-4"/>
            </div>
            <Button ariaLabel="filter-btn" variant="outline" w="w-fit">
                <Filter size={20} />
                <span>تصفية متقدمة</span>
            </Button>
            <Button ariaLabel="Download-btn" variant="success" w="w-fit">
                <Download size={20} />
                <span>تصدير</span>
            </Button>
        </div>
    </div>
)}

export default TableToolbar