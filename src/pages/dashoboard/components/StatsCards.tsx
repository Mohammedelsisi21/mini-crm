import { Users, ShoppingBag, CheckCircle } from "lucide-react"

const cards = [
    {
        title: "New clients",//Fake data
        value: 12,
        icon: <Users size={28} />,
        color: "bg-blue-100 text-blue-700"
    },
    {
        title: "Sales",//Fake data
        value: 45,
        icon: <ShoppingBag size={28} />,
        color: "bg-green-100 text-green-700"
    },
    {
        title: "Completed tasks",// Fake data
        value: 8,
        icon: <CheckCircle size={28} />,
        color: "bg-purple-100 text-purple-700"
    }
]

export default function StatsCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {cards.map((c, i) => (
                <div
                    key={i}
                    className="rounded-xl shadow-sm p-5 bg-white border flex items-center space-x-4"
                >
                    <div className={`p-3 rounded-full ${c.color}`}>
                        {c.icon}
                    </div>
                    <div>
                        <p className="text-gray-500">{c.title}</p>
                        <p className="text-2xl font-semibold">{c.value}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
