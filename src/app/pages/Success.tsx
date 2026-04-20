export function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md w-full">
        
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Оплата успішна 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          Дякуємо за покупку!  
          Гайд скоро буде надісланий на ваш email.
        </p>

        <a
          href="/"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
        >
          Повернутись на головну
        </a>

      </div>
    </div>
  );
}