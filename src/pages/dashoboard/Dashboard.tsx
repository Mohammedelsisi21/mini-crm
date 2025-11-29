
import StatsCards from "./components/StatsCards"
import TodoList from "./components/TodoList"

const Dashboard = () => {
    return (
        <div className="p-6 space-y-8 font-main">
            <h1 className="text-3xl font-bold">Welcome 👋</h1>

            <StatsCards />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TodoList />
            </div>
        </div>
    )
}

export default Dashboard
