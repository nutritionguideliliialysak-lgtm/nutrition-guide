import { useState } from "react";

export function Success() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = async () => {
    if (!email) return;

    await fetch('/.netlify/functions/send-to-telegram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    setSent(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md w-full">
        
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Оплата успішна 🎉
        </h1>

        {!sent ? (
          <>
            <p className="text-gray-600 mb-4">
              Введіть email, щоб отримати гайд:
            </p>

            <input
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-xl mb-4"
            />

            <button
              onClick={handleSend}
              className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
            >
              Отримати гайд
            </button>
          </>
        ) : (
          <p className="text-green-600 font-semibold">
            ✅ Гайд скоро буде надісланий!
          </p>
        )}

        <a
          href="/"
          className="block mt-6 text-sm text-gray-500 underline"
        >
          Повернутись на головну
        </a>

      </div>
    </div>
  );
}