export async function handler(event) {
  const data = JSON.parse(event.body);

  console.log("MONO WEBHOOK:", data);

  return {
    statusCode: 200,
    body: "ok",
  };
}