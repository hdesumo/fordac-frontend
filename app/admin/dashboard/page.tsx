import AdminGuard from "@/components/admin/AdminGuard";

export default function DashboardPage() {
  return (
    <AdminGuard>
      <h1 className="text-3xl font-bold">
        Dashboard Administration FORDAC
      </h1>
    </AdminGuard>
  );
}
