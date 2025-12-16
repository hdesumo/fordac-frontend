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

interface ContactsTableProps {
  messages: ContactMessage[];
  onSelect: (message: ContactMessage) => void;
}

export default function ContactsTable({ messages, onSelect }: ContactsTableProps) {
  return (
    <div className="bg-[#0f3a2d] border border-[#1d6047] rounded-lg p-4 overflow-auto">
      <table className="w-full text-sm">
        <thead className="text-left border-b border-[#1d6047]">
          <tr>
            <th className="py-2">Nom</th>
            <th className="py-2">Email</th>
            <th className="py-2">Message</th>
            <th className="py-2">Statut</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((m) => (
            <tr
              key={m.id}
              className="border-b border-[#1d6047] hover:bg-[#14533f] cursor-pointer"
              onClick={() => onSelect(m)}
            >
              <td className="py-2">{m.name}</td>
              <td>{m.email}</td>
              <td className="truncate max-w-xs">{m.message}</td>
              <td>
                <StatusBadge status={m.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
