"use server";
import sendToAuthor from "@/server/sendMessage";

const LOCAL = process.env.LOCAL;

export default async function sendAPImessage(message) {
  const _url = LOCAL
    ? "http://127.0.0.1:3000"
    : "https://contest-hive.vercel.app";
  const resp = await fetch(`${_url}/api/others/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });
  const x = await resp.json();
  return x;
}
