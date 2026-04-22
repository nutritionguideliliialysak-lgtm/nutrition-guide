export async function handler(event) {
  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const email = body.email || "no email";

    const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    console.log("=== DEBUG START ===");
    console.log("EMAIL:", email);
    console.log("TOKEN EXISTS:", !!TOKEN);
    console.log("CHAT_ID:", CHAT_ID);

    const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: `💰 НОВА ОПЛАТА\n📧 ${email}`,
      }),
    });

    const data = await response.json();

    console.log("TELEGRAM RESPONSE:", data);
    console.log("=== DEBUG END ===");

    return {
      statusCode: 200,
      body: "ok",
    };

  } catch (error) {
    console.error("TELEGRAM ERROR:", error);

    return {
      statusCode: 500,
      body: "error",
    };
  }
}