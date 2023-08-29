"use client";
import {
  selectJwtToken,
  setJwtToken,
  useDispatch,
  useSelector,
} from "@/lib/redux";
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
  const jwtTokenFromStore = useSelector(selectJwtToken);

  useEffect(() => {
    if (
      jwtToken !== undefined &&
      jwtToken !== "" &&
      jwtToken !== jwtTokenFromStore
    )
      dispatch(setJwtToken(jwtToken));
  }, []);

  if (jwtToken === undefined && !route.includes("/auth"))
    redirect("/auth/signin");

  if (jwtToken !== undefined && jwtToken !== "" && route.includes("/auth"))
    redirect("/");

  return <>{children}</>;
}
