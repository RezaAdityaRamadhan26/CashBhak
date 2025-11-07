import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

export default function ProfilePage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <SidebarInset className="flex-1 bg-[var(--gray-custom)]">
          {/* Konten utama halaman profile di sini */}
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--black-custom)" }}>
              Profile
            </h1>
            {/* Tambahkan konten profile sesuai kebutuhan */}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
