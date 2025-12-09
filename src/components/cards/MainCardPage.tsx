import { type ReactNode } from "react"

interface IProps {
    title: string
    des: string
    textBtn?: string
    onClick?: () => void
    children: ReactNode
}
const MainCardPage = ({title, des, children} : IProps) => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
                <p className="text-gray-500 mt-1">{des}</p>
            </div>
            {children}
    </div>
)
}

export default MainCardPage