"use client";
import { setJwtToken, useDispatch } from "@/lib/redux";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function AuthProvider({
  children,
  route,
  jwtToken,
}: {
  children: React.ReactNode;
  route: string;
  jwtToken?: string;
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (jwtToken) dispatch(setJwtToken(jwtToken));
  });

  if (jwtToken === undefined && !route.includes("/auth"))
    redirect("/auth/signin");

  return <>{children}</>;
}
