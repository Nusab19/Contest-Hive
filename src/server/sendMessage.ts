"use server"

const URL = process.env.URL;



export default async function sendToAuthor(message: string, ip: string) {
  const sanitizedMessage = message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  const content = `
📧 New message from ${ip}
Message:

${sanitizedMessage}
`.replace(/(?:\r\n|\r|\n)/g, "%0A");

  const url = URL + content;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.ok) {
      return {
        ok: true,
        status_code: 200,
        message: "Message sent successfully!",
        description: "Thanks for your feedback.",
      };
    }

    return {
      ok: false,
      status_code: 400,
      message: "Message wasn't sent!",
      description: "Maybe poor connection? Please try again!",
    };
  } catch (error) {
    return {
      ok: false,
      status_code: 500,
      message: "Something went wrong.",
      description: "Server failed to respond. Please try again!",
    };
  }
}
