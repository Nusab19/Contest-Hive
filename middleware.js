import { NextResponse } from "next/server";

export async function middleware(req) {
  const { nextUrl } = req;
  const origin = String(nextUrl.origin) + "/";
  const href = String(nextUrl.href);

  // Exclude some paths
  const excludedValues = ["_next", "favicon", "assets"];
  for (const value of excludedValues) {
    if (href.toLowerCase().includes(value)) return NextResponse.next();
  }
  1;
  async function makeReq() {
    await fetch(`${origin}/api/others/stats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ href }),
    });
  }
  console.log("middleware done:", href);

  await makeReq();
  return NextResponse.next();
}
