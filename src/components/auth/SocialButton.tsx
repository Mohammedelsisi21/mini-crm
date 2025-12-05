import type { ReactNode } from "react"

interface IProps {
    icon: ReactNode
    name: string
}
const SocialButton = ({icon, name} : IProps) => {
return (<>
    <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-medium">
        <span className="text-sm">{name}</span>
        {icon}
    </button>
</>)
}

export default SocialButton