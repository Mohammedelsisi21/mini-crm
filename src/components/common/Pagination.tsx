import Button from "./Button";
import { useState } from "react"
const Pagination = () => {
    const totalPages = 4
    const [currentPage, setCurrentPage] = useState(1);
    return (
    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
        <p className="text-sm text-gray-600">
        صفحة {currentPage} من {totalPages}
        </p>
        <div className="flex gap-2">
        <Button ariaLabel="next-btn" variant="outline" w="w-fit" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
            السابق
        </Button>
        {[...Array(totalPages)].map((_, i) => (
            <Button
                ariaLabel={``}
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-5 py-2 rounded-lg transition-all text-sm font-medium
                ${currentPage === i + 1 ? "bg-blue-600 text-white" : "border border-gray-300 hover:bg-white"}
            `}>
                {i + 1}
            </Button>
        ))}
        <Button ariaLabel="prev-btn" variant="outline" w="w-fit" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
            التالي
        </Button>
    </div>
    </div>
    );
};

export default Pagination;
