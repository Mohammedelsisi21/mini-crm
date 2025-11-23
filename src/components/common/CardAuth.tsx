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
    <div className={`${bg} mt-8 p-6 rounded-2xl border border-primary-100`}>
        <div className="flex items-start gap-3">
            <div style={{background: `var(--${backgroundIcon})`}} className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-text-heading text-sm mb-1">{title}</h4>
                <p className="text-xs text-text-body leading-relaxed">
                    {des}
                </p>
            </div>
        </div>
    </div>
)
}

export default CardAuth