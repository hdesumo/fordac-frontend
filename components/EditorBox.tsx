"use client";

export default function EditorBox({
  value,
  onChange,
  placeholder = "",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <textarea
      className="w-full border rounded-md p-3 min-h-[160px] focus:outline-none focus:ring-2 
                 focus:ring-[#166534] bg-white"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}
