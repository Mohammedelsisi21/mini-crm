import { useMemo } from "react"

const useCurrentDate  = () => {
    return useMemo(() => {
        const date = new Date()
        const dayName = date.toLocaleDateString("ar-EG", {weekday: "long"});
        const formatedDate = date.toLocaleDateString("ar-EG", {
            "day": "numeric",
            "month": "long",
            "year": "numeric"
        });
        return {dayName, formatedDate}
    }, [])
}

export default useCurrentDate