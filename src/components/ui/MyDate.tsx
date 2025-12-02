import { useMemo } from "react"

const MyDate = () => {

    const { dayName, formatedDate } = useMemo(() => {
        const date = new Date()
        const dayName = date.toLocaleDateString("ar-EG", {weekday: "long"});
        const formatedDate = date.toLocaleDateString("ar-EG", {
            "day": "numeric",
            "month": "long",
            "year": "numeric"
        });
        return {dayName, formatedDate}
    }, [])
    return (
        <div className="text-right">
            <p className="text-sm font-bold text-gray-800">{dayName}</p>
            <p className="text-xs text-gray-500">{formatedDate}</p>
        </div>
        )
}

export default MyDate