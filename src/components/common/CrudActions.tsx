import { Edit2, Eye, Trash2 } from "lucide-react"

interface IProps {
    variant: "view" | "update" | "delete"
    onClick?: () => void
}

const variants = {
    view: {
        color: "text-primary-600 hover:bg-primary-100",
        Icon: Eye,
        title: "view"
    },
    update: {
        color: "text-success-600 hover:bg-success-100",
        Icon: Edit2,
        title: "update"
    },
    delete: {
        color: "text-error-600 hover:bg-error-100",
        Icon: Trash2,
        title: "delete"
    }
}

const CrudActions = ({variant, onClick} : IProps) => {
    const { color, Icon, title} = variants[variant]
    return (
    <button className={`p-2.5 cursor-pointer ${color} rounded-lg transition-all`} title={title} onClick={onClick}>
        <Icon size={18} />
    </button>
  )
}

export default CrudActions