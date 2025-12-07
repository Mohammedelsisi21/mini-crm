
const Pagination = () => {
return (
    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
        <p className="text-sm text-gray-600">عرض 1-5 من 1,247 عميل</p>
        <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-white transition-all text-sm font-medium">السابق</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm font-medium">1</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-white transition-all text-sm font-medium">2</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-white transition-all text-sm font-medium">3</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-white transition-all text-sm font-medium">التالي</button>
        </div>
    </div>
  )
}

export default Pagination