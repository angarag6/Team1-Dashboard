import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Dashbo from "@/components/dashboard";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Dashbo />
      </div>
    </main>
  );
}
