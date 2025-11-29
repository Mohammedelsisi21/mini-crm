import React from "react";

interface TaskCardProps {
  title: string;
  description?: string;
  status: "todo" | "inprogress" | "done";
  onClick?: () => void;
}

const statusColors = {
  todo: "#ffb74d",
  inprogress: "#64b5f6",
  done: "#81c784",
};

export default function TaskCard({
  title,
  description,
  status,
  onClick,
}: TaskCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "16px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        cursor: onClick ? "pointer" : "default",
        borderLeft: `6px solid ${statusColors[status]}`,
        transition: "transform 0.15s ease",
      }}
    >
      <h3 style={{ margin: 0, marginBottom: "8px", fontSize: "18px" }}>{title}</h3>
      {description && (
        <p style={{ margin: 0, opacity: 0.7, fontSize: "14px" }}>{description}</p>
      )}
    </div>
  );
}
