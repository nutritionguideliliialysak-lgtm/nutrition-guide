export async function handler(event) {
  try {
    const { email } = JSON.parse(event.body);

    const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    const text = `Нова оплата 💰\nEmail: ${email}`;

    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
      }),
    });

    return {
      statusCode: 200,
      body: "ok",
    };

  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: "error",
    };
  }
}