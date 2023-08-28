import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const cookieStore = cookies();
    cookieStore.delete("token");

    return new NextResponse(JSON.stringify({ success: true, message: "Logged out successfully" }), {
      status: 200,
    });
  } catch (error) {
    const err = { success: false, message: "Internal Server Error" };

    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}
