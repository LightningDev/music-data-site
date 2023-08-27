import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const serverRes = await fetch(`${process.env.API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await serverRes.json();

    return new NextResponse(JSON.stringify(data), {
      status: serverRes.status,
    });
  } catch (error) {
    const err = { success: false, message: "Internal Server Error" };

    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}
