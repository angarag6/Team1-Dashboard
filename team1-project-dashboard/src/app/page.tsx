import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Inco from "@/components/income";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Inco />
      </div>
    </main>
  );
}
