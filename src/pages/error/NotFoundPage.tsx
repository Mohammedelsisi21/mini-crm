import { ArrowRight, Home, RefreshCw, Search } from "lucide-react"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-primary-50 via-secondary-50 to-pink-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="text-center">
          <div className="mb-8 relative">
            <div className="text-9xl font-black bg-linear-to-r from-primary-600 via-secondary-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-linear-to-r from-primary-400 to-secondary-400 rounded-full opacity-20 animate-ping"></div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-linear-to-br from-primary-500 to-secondary-500 rounded-3xl flex items-center justify-center shadow-2xl animate-bounce">
              <Search size={48} className="text-white" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-text-heading mb-4">الصفحة غير موجودة</h1>
          <p className="text-xl text-text-body mb-8 leading-relaxed">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to={"/"} style={{background: "var(--gradient-primary)"}} className="text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-3 font-bold text-lg group">
              <Home size={24} />
              <span>العودة للرئيسية</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="/" className="bg-white text-text-heading px-8 py-4 rounded-xl border-2 border-gray-200 hover:bg-gray-50 transition-all flex items-center justify-center gap-3 font-bold text-lg">
              <RefreshCw size={24} />
              <span>إعادة المحاولة</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage