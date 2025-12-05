import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/layout/Header"
import Sidebar from "../components/layout/Sidebar"

const MainLayout = () => {
  const [sidebarOpen , setSidebarOpen ] = useState<boolean>(true)


  return (
    <div className="flex h-screen w-screen overflow-hidden">
        <div className="w-screen flex ">
          <div className={`${sidebarOpen ? "w-96" : "w-20"} text-white transition-all duration-300 flex flex-col shadow-2xl`} style={{background: "var(--gradient-dark)"}}>
            <Sidebar sidebarOpen={sidebarOpen} onClickMenu={() => setSidebarOpen(prev => !prev)}/>
          </div>
          <div className="w-full bg-gray-50 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-auto p-10">
              <Outlet />
            </main>
          </div>
      </div>
    </div>
  )
}

export default MainLayout