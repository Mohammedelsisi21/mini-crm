import { Edit2, Eye, Trash2 } from "lucide-react"

interface IProps {
    variant: "view" | "edit" | "delete"
    setIsOpen?: () => void
}

const variants = {
    view: {
        color: "text-primary-600 hover:bg-primary-100",
        Icon: Eye,
        title: "view"
    },
    edit: {
        color: "text-success-600 hover:bg-success-100",
        Icon: Edit2,
        title: "edit"
    },
    delete: {
        color: "text-error-600 hover:bg-error-100",
        Icon: Trash2,
        title: "delete"
    }
}

const CrudActions = ({variant, setIsOpen} : IProps) => {
    const { color, Icon, title} = variants[variant]
    return (
    <button className={`p-2.5 cursor-pointer ${color} rounded-lg transition-all`} title={title} onClick={setIsOpen}>
        <Icon size={18} />
    </button>
  )
}

export default CrudActions