import { PanelGroup, Panel} from "react-resizable-panels"
import { useEffect, useState } from "react"
import SideRightBar from "../components/ui/SideRightBar"
import TopBar from "../components/ui/TopBar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 780);
  const [sidebarOpen , setSidebarOpen ] = useState<boolean>(true)


  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 991);
    window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="flex-1 flex flex-col">
        <PanelGroup direction="horizontal" className="flex-1">
          <Panel minSize={isSmallScreen ? 30 : sidebarOpen ? 15 : 5} maxSize={isSmallScreen ? 30 : sidebarOpen ? 15 : 5} className="text-white transition-all duration-300 flex flex-col shadow-2xl" style={{background: "var(--gradient-dark)"}}>
            <SideRightBar sidebarOpen={sidebarOpen} onClickMenu={() => setSidebarOpen(prev => !prev)}/>
          </Panel>
          <Panel defaultSize={80} minSize={20} className="bg-gray-50 flex flex-col overflow-hidden">
            <TopBar />
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