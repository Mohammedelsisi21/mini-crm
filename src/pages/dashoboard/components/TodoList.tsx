import { useTasks } from "./useTasks";
import TaskCard from "./TaskCard";
import { useState } from "react";

export default function TasksList() {
  const { tasks, addTask } = useTasks();
  const [value, setValue] = useState("");

  return (
  <div className="p-6">
    {/* Input + Button */}
    <div className="flex gap-3 mb-6">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="New card…"
        className="
          flex-1 px-4 py-2 rounded-xl border 
          border-gray-300 focus:ring-2 focus:ring-blue-500
          outline-none transition
        "
      />

      <button
        onClick={() => {
          if (!value.trim()) return;
          addTask(value);
          setValue("");
        }}
        className="
          px-5 py-2 rounded-xl 
          bg-blue-600 text-white font-medium
          hover:bg-blue-700 active:scale-95 
          shadow-sm transition
        "
      >
       Add
      </button>
    </div>

    {/* Grid with cards */}
    <div
      className="
        grid gap-4
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      "
    >
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          status={task.status}
        />
      ))}
    </div>
  </div>
);

}
