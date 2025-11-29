import { Trash2 } from "lucide-react"
type Task = {
    id: number
    text: string
    done: boolean
}

type TodoItemProps = {
    task: Task
    onToggle: () => void
    onDelete: () => void
}

export default function TodoItem({ task, onToggle, onDelete }: TodoItemProps) {
    return (
        <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50">
            <div className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={onToggle}
                    className="w-5 h-5"
                />
                <span className={`${task.done ? "line-through text-gray-400" : ""}`}>
                    {task.text}
                </span>
            </div>

            <button onClick={onDelete}>
                <Trash2 size={20} className="text-red-500 hover:text-red-700" />
            </button>
        </div>
    )
}
