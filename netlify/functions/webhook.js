import { addRow } from "./googleSheets.js";

export async function handler(event) {
  try {
    const data = JSON.parse(event.body);

    console.log("FULL DATA:", JSON.stringify(data));

    const status = data.status;
    const reference = data.reference || "";
    const [order, email] = reference.split("|");

    console.log("STATUS:", status);
    console.log("EMAIL:", email);
    console.log("ORDER:", order);

    if (status === "success" && email) {
      await addRow(order, email);
      console.log("SUCCESS PAYMENT → ADDED");
    } else {
      console.log("SKIPPED");
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