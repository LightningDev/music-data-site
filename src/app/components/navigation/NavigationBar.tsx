"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavigationBar({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <div className="bg-gray-100 h-screen">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Music Data Dashboard
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src="/images/avatar-1.png"
                  alt="profile-picture"
                  width="64"
                  height="64"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a onClick={logOut}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
