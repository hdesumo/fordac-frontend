"use client";

import TagInput from "./TagInput";
import NotesPanel from "./NotesPanel";
import ReplyBox from "./ReplyBox";
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

interface ContactDetailProps {
  message: ContactMessage;
  reload: () => void;
}

export default function ContactDetail({ message, reload }: ContactDetailProps) {
  return (
    <div className="bg-[#0f3a2d] border border-[#1d6047] rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-bold">{message.name}</h2>
      <p className="text-sm text-gray-300">{message.email}</p>

      <div className="mt-4">
        <StatusBadge status={message.status} />
      </div>

      <p className="mt-4 whitespace-pre-line">{message.message}</p>

      <hr className="border-[#1d6047]" />

      <TagInput message={message} reload={reload} />
      <NotesPanel message={message} reload={reload} />
      <ReplyBox message={message} reload={reload} />
    </div>
  );
}
