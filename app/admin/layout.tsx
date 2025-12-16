import ProtectedRouteAdmin from "@/components/ProtectedRouteAdmin";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRouteAdmin>
      <div className="flex min-h-screen bg-[#F7F7F7]">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Topbar />

          <main className="flex-1 p-6 md:p-10">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRouteAdmin>
  );
}
