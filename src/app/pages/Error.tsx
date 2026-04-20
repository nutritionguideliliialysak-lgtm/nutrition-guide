export function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md w-full">
        
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Помилка оплати ❌
        </h1>

        <p className="text-gray-600 mb-6">
          Щось пішло не так. Спробуйте ще раз або перевірте дані.
        </p>

        <a
          href="/#cta"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition"
        >
          Спробувати ще раз
        </a>

      </div>
    </div>
  );
}