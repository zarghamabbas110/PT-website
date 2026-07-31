import AdminConsole from "@/components/admin/AdminConsole";

export const metadata = {
  title: "Admin — PhysioFlow",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminConsole />;
}
