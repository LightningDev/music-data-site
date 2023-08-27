import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="bg-white w-64 flex flex-col p-4">
        <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
        <nav>
          <Link
            href="/dashboard/home"
            className="block py-2 px-4 hover:bg-gray-200"
          >
            Home
          </Link>
          <Link
            href="/dashboard/settings"
            className="block py-2 px-4 hover:bg-gray-200"
          >
            Settings
          </Link>
          {/* Add more links as needed */}
        </nav>
      </div>
      <div className="flex-1 p-10">
        <h1 className="text-2xl font-semibold mb-4">Dashboard Home</h1>
        <p>Welcome to the dashboard home.</p>
      </div>
    </div>
  );
}
