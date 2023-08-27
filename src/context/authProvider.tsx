"use client";
import { selectAuthenticated } from "@/lib/redux";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

export default function AuthProvider({
  children,
  route,
  jwtToken,
}: {
  children: React.ReactNode;
  route: string;
  jwtToken?: string;
}) {
  const authenticated = useSelector(selectAuthenticated);

  if (!authenticated && !route.includes("/auth")) redirect("/auth/signin");

  return <>{children}</>;
}
