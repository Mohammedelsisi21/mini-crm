import { ChevronDown, LogOut, Menu, Settings, X } from "lucide-react"
import { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

interface IProps {
  sidebarOpen: boolean
  onClickMenu: () => void
}
const SideRightBar = ({sidebarOpen, onClickMenu} : IProps) => {
  const [showUserMenu, setShowUserMenu] = useState(false)
  return (
    <aside className="h-full flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center justify-between">
          {sidebarOpen && (
            <div>
              <Link to={"/"} className="text-2xl font-bold bg-linear-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">نظام CRM</Link>
                <p className="text-gray-400 text-xs mt-1">إدارة علاقات العملاء</p>
              </div>
            )}
            <button aria-label="Closed" onClick={onClickMenu} className="p-2.5 hover:bg-gray-700 rounded-xl transition-all">
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
        </div>
      </div>
      <Navbar sidebarOpen={sidebarOpen}/>
      <div className="p-4 border-t border-gray-700 relative">
          <button onClick={() => setShowUserMenu(prev => !prev)} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-xl transition-all">
              <div style={{background: "var(--gradient-primary)"}} className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
                <span className="font-bold">م</span>
              </div>
              {sidebarOpen && (
                <>
                  <div className="flex-1 text-right">
                    <p className="font-bold text-sm">محمد أحمد</p>
                    <p className="text-xs text-gray-400">مدير النظام</p>
                  </div>
                  <ChevronDown size={18} className={`transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
                </>
              )}
            </button>
            {showUserMenu && sidebarOpen && (
              <div className="absolute bottom-full left-0 right-0 mb-2 bg-gray-800 rounded-xl shadow-xl border border-gray-700 overflow-hidden">
                <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-all">
                  <Settings size={18} />
                  <span className="text-sm">الإعدادات</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-all text-red-400">
                  <LogOut size={18} />
                  <span className="text-sm">تسجيل الخروج</span>
                </button>
              </div>
            )}
      </div>
    </aside>
  )
}

export default SideRightBar