"use client";

export default function IntranetHeader({ userName }: { userName: string }) {
  return (
    <div className="bg-[#0f4a2c] text-white py-4 text-center shadow-md">
      <h2 className="text-xl font-bold tracking-wide">
        INTRANET DU FORDAC
      </h2>
      <p className="text-sm mt-1 opacity-90">
        Militant connecté : <strong>{userName}</strong>
      </p>
    </div>
  );
}
