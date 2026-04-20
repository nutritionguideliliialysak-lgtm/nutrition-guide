import { addRow } from "./googleSheets.js";

export async function handler(event) {
  try {
    const data = JSON.parse(event.body);

    console.log("MONO WEBHOOK:", data);

    const status = data.status;
    const email = data?.merchantPaymInfo?.comment; // 👈 беремо email
    const order = data?.reference;

    // 👉 записуємо ТІЛЬКИ успішні оплати
    if (status === "success" && email) {
      await addRow(order, email);
    }

    return {
      statusCode: 200,
      body: "ok",
    };

  } catch (error) {
    console.error("WEBHOOK ERROR:", error);

    return {
      statusCode: 500,
      body: "error",
    };
  }
}