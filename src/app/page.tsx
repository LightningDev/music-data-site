"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const logOut = async () => {
    try {
      const response = await fetch("/api/auth/signout", {
        method: "POST",
      });

      const data = await response.json();

      if (data.success) {
        router.replace("/auth/signin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white border-r dark:border-gray-600 dark:bg-gray-800 flex flex-col justify-between py-4 pr-6 pl-8">
        {/* Logo Section */}
        <div className="flex items-center justify-start mb-16">
          {/* <img src="/path/to/logo.png" alt="Your logo" className="h-10 w-10" /> */}
          <span className="ml-2 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Dashboard
          </span>
        </div>
        <nav className="flex-grow mt-5 mb-4">
          <Link
            href="/dashboard/home"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg mb-2 transition-colors dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-600"
          >
            Home
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg mb-2 transition-colors dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-600"
          >
            Settings
          </Link>
          <button
            className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg mb-2 transition-colors dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-600"
            onClick={logOut}
          >
            Logout
          </button>
          {/* Add more links as needed */}
        </nav>
      </div>
      <div className="flex-1 p-10 ml-64">
        <h1 className="text-2xl font-semibold mb-4">Dashboard Home</h1>
        <p>Welcome to the dashboard home.</p>
      </div>
    </div>
  );
}
