'use client'
import SignInPage from "@/app/auth/signin/page";
import { selectAuthenticated } from "@/lib/redux";
import { useSelector } from "react-redux";

export default function AuthProvider(props: React.PropsWithChildren) {
  const authenticated = useSelector(selectAuthenticated)
  
  if (!authenticated)
    return <SignInPage />

  return <>{props.children}</>
}