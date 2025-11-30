import type { ReactNode } from "react"

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: ReactNode
    title: string
    des: string
    background: "gradient-primary" | "gradient-secondary" | "gradient-pink" | "gradient-success"
}

const FormTitle = ({icon, title, des , background}: IProps) => {
return (<>
    <div className="text-center mb-8">
        <div style={{background: `var(--${background})`}} className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            {icon}
        </div>
        <h2 className="text-3xl font-bold text-text-heading mb-2 font-main">{title}</h2>
        <p className="text-text-body font-main">{des}</p>
    </div>
</>)
}

export default FormTitle