import { PanelGroup, Panel} from "react-resizable-panels"
import { useState } from "react"
import SideRightBar from "../components/ui/SideRightBar"
import TopBar from "../components/ui/TopBar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  const [sidebarOpen , setSidebarOpen ] = useState<boolean>(true)

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="flex-1 flex flex-col">
        <PanelGroup direction="horizontal" className="flex-1">
          <Panel minSize={sidebarOpen ? 15 : 5} maxSize={sidebarOpen ? 15 : 5} className="text-white transition-all duration-300 flex flex-col shadow-2xl" style={{background: "var(--gradient-dark)"}}>
            <SideRightBar sidebarOpen={sidebarOpen} onClickMenu={() => setSidebarOpen(prev => !prev)}/>
          </Panel>
          <Panel defaultSize={80} minSize={20} className="bg-gray-50 flex flex-col overflow-hidden">
            <div className="h-16 border-b bg-white shadow-sm shrink-0">
              <TopBar />
            </div>
            <div className="flex-1 overflow-auto p-4">
              <Outlet />
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  )
}

export default MainLayout