import NavigationBar from "../components/navigation/NavigationBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavigationBar>{children}</NavigationBar>
    </section>
  );
}
