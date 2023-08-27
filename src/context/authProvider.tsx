"use client";
import RegisterPage from "@/app/auth/register/page";
import SignInPage from "@/app/auth/signin/page";
import { selectAuthenticated } from "@/lib/redux";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

export default function AuthProvider({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) {
  const authenticated = useSelector(selectAuthenticated);

  if (!authenticated && !route.includes("/auth")) redirect("/auth/signin");
  if (authenticated && route.includes("/auth")) redirect("/");

  return <>{children}</>;
}
