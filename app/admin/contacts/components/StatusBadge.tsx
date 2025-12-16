interface StatusBadgeProps {
  status: "new" | "pending" | "done" | "archived" | string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const colors: Record<string, string> = {
    new: "bg-blue-600",
    pending: "bg-yellow-600",
    done: "bg-green-600",
    archived: "bg-gray-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded text-xs font-semibold ${
        colors[status] || "bg-gray-600"
      }`}
    >
      {status.toUpperCase()}
    </span>
  );
}
