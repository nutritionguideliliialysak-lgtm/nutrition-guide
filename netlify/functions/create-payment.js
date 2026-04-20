export async function handler() {
  try {
    const invoice = {
      amount: 29900,
      ccy: 980,
      merchantPaymInfo: {
        reference: "order_" + Date.now(),
        destination: "Після успішної оплати, необхідно надіслати квитанцію з оплати в instagram:lilya_lysak",
      },
      redirectUrl: "https://nutrition-guide-liliia-lysak.netlify.app/success",
      tags:["Інформаційні послуги"], 
      webHookUrl: "https://nutrition-guide-liliia-lysak.netlify.app/.netlify/functions/webhook",
    };

    const response = await fetch("https://api.monobank.ua/api/merchant/invoice/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Token": process.env.MONO_TOKEN,
      },
      body: JSON.stringify(invoice),
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ pageUrl: data.pageUrl }),
    };

  } catch (error) {
    console.error("CREATE PAYMENT ERROR:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Payment error" }),
    };
  }
}