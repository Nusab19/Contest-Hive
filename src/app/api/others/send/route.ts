import { NextRequest } from "next/server";
import { JsonResponse } from "@/app/api/default";
import sendToAuthor from "@/server/sendMessage";


const URL = process.env.URL;

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-real-ip") ?? "127.0.0.1";
  const jsonData = await req.json();
  const message = String(jsonData.message).trim();

  if (!message) {
    const data = {
      ok: false,
      message: "Empty message!",
    };
    return await JsonResponse(data, 400);
  }

  const result = await sendToAuthor(message, ip);
  return await JsonResponse(result, result.status_code);
}
