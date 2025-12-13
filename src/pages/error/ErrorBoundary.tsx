import { ArrowRight, Home, RefreshCw, ServerCrash } from "lucide-react"
import { Link } from "react-router-dom"

const ErrorBoundary = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="text-center">

          <div className="mb-8 relative">
            <div className="text-9xl font-black bg-linear-to-r from-error-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              500
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-linear-to-r from-red-400 to-orange-400 rounded-full opacity-20 animate-ping"></div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="bg-gradient-orange w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl">
              <ServerCrash size={48} className="text-white animate-pulse" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-4">خطأ في الخادم</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            عذراً، حدث خطأ غير متوقع في الخادم. فريقنا يعمل على حل المشكلة الآن
          </p>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-error-500 rounded-full animate-pulse"></div>
              <span className="text-error-600 font-bold">جاري العمل على حل المشكلة</span>
            </div>
            <p className="text-gray-600 text-sm">
              الخدمة متوقفة مؤقتاً. نتوقع عودة الخدمة خلال دقائق قليلة.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to={"/"} className="bg-gradient-orange text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-3 font-bold text-lg group">
              <Home size={24} />
              <span>العودة للرئيسية</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="/" className="bg-white text-text-heading px-8 py-4 rounded-xl border-2 border-gray-200 hover:bg-gray-50 transition-all flex items-center justify-center gap-3 font-bold text-lg">
              <RefreshCw size={24} />
              <span>إعادة المحاولة</span>
            </a>
          </div>

          <details className="bg-gray-900 rounded-2xl p-6 text-right">
            <summary className="text-white font-bold cursor-pointer mb-4 flex items-center justify-between">
              <span>تفاصيل الخطأ (للمطورين)</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="font-mono text-sm text-gray-300 bg-gray-800 rounded-xl p-4 text-left">
              <p className="text-error-400 mb-2">Error Code: 500</p>
              <p className="text-warning-400 mb-2">Internal Server Error</p>
              <p className="text-gray-400 mb-2">Timestamp: {new Date().toISOString()}</p>
              <p className="text-gray-400">Path: /api/customers</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}

export default ErrorBoundary