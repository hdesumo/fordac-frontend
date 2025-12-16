import ProtectedRouteAdmin from "@/components/ProtectedRouteAdmin";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRouteAdmin>
      <div className="flex">
        <Sidebar />

        <div className="flex-1 min-h-screen bg-[#F7F7F7]">
          <Topbar />
          <main className="p-8">{children}</main>
        </div>
      </div>
    </ProtectedRouteAdmin>
  );
}
