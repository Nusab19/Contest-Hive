
import { db } from "@/db/drizzle";
import { stats } from "@/db/schema";
import { updateData } from "@/db/updateStats";
import { fetchStats } from "@/db/cachedStats";
import { NextRequest } from "next/server";
import { JsonResponse } from "@/app/api/default";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const jsonData = await req.json();
    const { path } = jsonData;
    await updateData(path);
    return JsonResponse({ ok: true });
  } catch {
    return JsonResponse({ ok: false }, 500);
  }
}

export async function GET(req: NextRequest) {
  try {
    const result = await db.select().from(stats).where(eq(stats.id, 1));
    const data: any = {
      ok: true,
      ...result[0],
      href: req.nextUrl.href,
      ip: req.headers.get("x-real-ip") || "127.0.0.1",
    };
    
    if (data.id) delete data.id;

    return JsonResponse(data);
  } catch (e) {
    console.error(e);
    const cachedStats = await fetchStats();
    return JsonResponse(
      {
        ok: false,
        ...cachedStats,
        href: req.nextUrl.href,
        ip: req.headers.get("x-real-ip") || "127.0.0.1",
      },
      200,
    );
  }
}