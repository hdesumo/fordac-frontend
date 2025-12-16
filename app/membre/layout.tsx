export default function MembreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="font-bold text-lg mb-4">Espace Militant</h2>
      </aside>

      <main className="flex-1 bg-gray-100 p-6">
        {children}
      </main>
    </div>
  );
}
