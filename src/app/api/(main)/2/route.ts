import { getResponse, JsonResponse } from "@/app/api/default";
import { updateData as updateStatsData } from "@/db/updateStats";

export async function GET() {
  await updateStatsData("api");
  const data = await getResponse("codechef");

  return await JsonResponse(data);
}
