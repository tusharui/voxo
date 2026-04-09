import { cookies } from "next/headers";
import { DashboardSidebar } from "@/features/dashboard/components/dashboard-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const sidebarState = cookieStore.get("sidebar_state")?.value;
  const defaultOpen = sidebarState ? sidebarState === "true" : true;

  return (
    <SidebarProvider defaultOpen={defaultOpen} className="min-h-svh w-full bg-muted/20">
      <DashboardSidebar />
      <SidebarInset className="min-h-svh min-w-0 overflow-hidden">
        <header className="flex h-16 shrink-0 items-center gap-3 border-b border-border/60 bg-background px-4 lg:hidden">
          <SidebarTrigger />
          <div className="text-sm font-medium text-muted-foreground">
            Dashboard
          </div>
        </header>

        <div className="flex flex-1 flex-col overflow-y-auto p-4 md:p-6">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
