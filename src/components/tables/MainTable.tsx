import type { ReactNode } from "react"
import TextHead from "./TextHead"

interface IProps {
    dataText: string[]
    children: ReactNode
}
const MainTable = ({ dataText, children} : IProps) => {
    return (
    <div className="overflow-x-auto">
        <table className="w-full">
            <thead className="bg-linear-to-r from-background to-background-alt">
                <tr>
                    {dataText.map((item,i) => (
                        <TextHead key={i} text={item} />
                    ))}
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {children}
            </tbody>
        </table>
    </div>
    )
}

export default MainTable