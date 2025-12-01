import SideTabBar from "../components/ui/SideTabBar"
import TopBar from "../components/ui/TopBar"
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels"

const MainLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <SideTabBar />
      <div className="flex-1 flex flex-col">
        <PanelGroup direction="horizontal" className="flex-1">
          <Panel defaultSize={20} minSize={15} maxSize={15} className="bg-white overflow-auto">
            <div className="p-4">
              <h1>العمود الأول</h1>
            </div>
          </Panel>
          <PanelResizeHandle className="w-2 bg-gray-200 hover:bg-gray-300 transition-colors cursor-col-resize"/>
          <Panel defaultSize={80} minSize={20} className="bg-gray-50 flex flex-col overflow-hidden">
            <div className="h-16 border-b bg-white shadow-sm shrink-0">
              <TopBar />
            </div>
            <div className="flex-1 overflow-auto p-4">
              <h1>العمود الثاني</h1>
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  )
}

export default MainLayout