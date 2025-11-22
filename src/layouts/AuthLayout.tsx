import type { ReactNode } from "react"

interface IProps {
    w: string
    children: ReactNode
}
const AuthLayout = ({ w ,children } : IProps) => {
return (<>
    <div className="min-h-screen bg-linear-to-br from-background to-background-alt flex items-center justify-center md:p-10">
        <div className={`min-w-full ${w}`}>
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
                {children}
            </div>
        </div>
    </div>
</>)
}

export default AuthLayout