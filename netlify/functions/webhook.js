import { addRow } from "./googleSheets.js";

export async function handler(event) {
  try {
    const data = JSON.parse(event.body);

    console.log("FULL DATA:", JSON.stringify(data));

    const status = data.status;
    const email = data?.merchantPaymInfo?.comment;
    const order = data?.reference;

    console.log("STATUS:", status);
    console.log("EMAIL:", email);
    console.log("ORDER:", order);

    // 👇 тимчасово прибираємо перевірку
    if (email) {
      await addRow(order || "no-order", email);
      console.log("ADDED TO SHEETS");
    } else {
      console.log("NO EMAIL");
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