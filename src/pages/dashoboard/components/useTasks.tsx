import { useEffect, useState } from "react";

export type Task = {
  id: string;
  title: string;
  status: "todo" | "inprogress" | "done";
};

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      status: "todo",
    };
    setTasks((prev) => [...prev, newTask]);
  };

  return { tasks, addTask };
}
