import { Plus } from "lucide-react"
import Button from "../common/Button"

interface IProps {
    title: string
    des: string
    textBtn: string
}
const MainCardPage = ({title, des, textBtn} : IProps) => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
                <p className="text-gray-500 mt-1">{des}</p>
            </div>
            <Button ariaLabel="add-user" w="w-fit">
                <Plus size={20} />
                <span>{textBtn}</span>
            </Button>
    </div>
)
}

export default MainCardPage