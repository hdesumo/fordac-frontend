"use client";

import StatusBadge from "./StatusBadge";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  status: string;
  tags?: string[];
  notes?: string[];
}

interface StatsHeaderProps {
  messages: ContactMessage[];
}

export default function StatsHeader({ messages }: StatsHeaderProps) {
  const total = messages.length;
  const unread = messages.filter((m) => m.status === "new").length;
  const pending = messages.filter((m) => m.status === "pending").length;
  const done = messages.filter((m) => m.status === "done").length;
  const archived = messages.filter((m) => m.status === "archived").length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-[#0f3a2d] p-4 rounded border border-[#1d6047]">
        <p className="text-gray-300 text-sm">Total</p>
        <p className="text-2xl font-bold">{total}</p>
      </div>

      <div className="bg-[#0f3a2d] p-4 rounded border border-[#1d6047]">
        <p className="text-gray-300 text-sm">Non lus</p>
        <p className="text-2xl font-bold">{unread}</p>
      </div>

      <div className="bg-[#0f3a2d] p-4 rounded border border-[#1d6047]">
        <p className="text-gray-300 text-sm">En attente</p>
        <p className="text-2xl font-bold">{pending}</p>
      </div>

      <div className="bg-[#0f3a2d] p-4 rounded border border-[#1d6047]">
        <p className="text-gray-300 text-sm">Trait&eacute;s</p>
        <p className="text-2xl font-bold">{done}</p>
      </div>

      <div className="bg-[#0f3a2d] p-4 rounded border border-[#1d6047]">
        <p className="text-gray-300 text-sm">Archivé</p>
        <p className="text-2xl font-bold">{archived}</p>
      </div>
    </div>
  );
}
