import type { ReactNode } from "react"

interface IProps {
    bg: string
    icon: ReactNode
    backgroundIcon: string
    title: string
    des: string
}
const CardAuth = ({bg ,icon, backgroundIcon,title, des}: IProps) => {
return (
    <div className={`${bg} mt-8 px-2 py-4 rounded-md border border-primary-100 border-r-3 border-r-primary-500`}>
        <div className="flex items-start gap-1 flex-col">
            <div className="flex items-center space-x-1 ">
                <div style={{background: `var(--${backgroundIcon})`}} className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0">
                {icon}
                </div>
                <h4 className="font-bold text-text-heading text-sm mb-1">{title}</h4>
            </div>
            <div>
                <p className="text-xs text-text-body leading-relaxed">
                    {des}
                </p>
            </div>
        </div>
    </div>
)
}

export default CardAuth