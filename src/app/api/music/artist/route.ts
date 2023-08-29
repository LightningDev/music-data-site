import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const top = url.searchParams.get("top");

    const serverRes = await fetch(
      `${process.env.API_URL}/music/artists?top=${top}`,
      {
        method: "GET",
        headers: {
          authorization: req.headers.get("authorization") || "",
        },
      }
    );
    console.log(serverRes);
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
