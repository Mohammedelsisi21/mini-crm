import { AlertCircle, BarChart3, Home, Package, Phone, Tag, Users } from "lucide-react"
import { memo } from "react"
import { NavLink } from "react-router-dom"

interface IProps {
    sidebarOpen: boolean
}
const Navbar = ({sidebarOpen} : IProps) => {
    const navItems = [
    { id: '/', icon: Home, label: 'الرئيسية', badge: null },
    { id: 'customers', icon: Users, label: 'العملاء', badge: '54' },
    { id: 'communications', icon: Phone, label: 'التواصلات', badge: '62' },
    { id: 'categories', icon: Tag, label: 'التصنيفات', badge: null },
    { id: 'products', icon: Package, label: 'المنتجات', badge: null },
    { id: 'complaints', icon: AlertCircle, label: 'الشكاوى', badge: '3' },
    { id: 'reports', icon: BarChart3, label: 'التقارير', badge: null }
  ];
return (
    <nav className="flex-1 p-4 space-y-2">
        {navItems.map(item => {
            const Icon = item.icon
            return<NavLink key={item.id} to={item.id}
                className={`w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-xl transition-all font-medium hover:bg-gray-800`}>{
                sidebarOpen ? <>
                    <Icon size={20}/>
                    <span className="flex-1 text-right">{item.label}</span>
                        {item.badge && <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {item.badge}
                    </span>
                    }</> :
                    <Icon size={20}/>
                    }
            </NavLink>
        })}
    </nav>
)}

export default memo(Navbar)