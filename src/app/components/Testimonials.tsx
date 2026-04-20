import { useState, useRef, useEffect } from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const testimonials = [
    {
      name: "Олена",
      age: "28 років",
      result: "Краща форма, вже на перший тиждень",
      text: "Якщо чесно мені якось було лячно підіймати вуглеводи. Але перший тиждень і форма тільки краще стає. He знаю як прес, aлe ямочки нa попі, під певним освітленням, видніються гарно",
      rating: 5
    },
    {
      name: "Марія",
      age: "22 роки",
      result: "Бургер вже не так і смачно заходить",
      text: "Ну як сказати. В режимі мені більше подобається харчуватися. Звикаєш до правильного харчування і бургер вже не так смачно заходить",
      rating: 5
    },
    {
      name: "Яна",
      age: "42 роки",
      result: "Не тільки краса, а і здоров'я",
      text: "Дякую тобі за цінні навички в плані харчування. Мені зараз значно простіше готувати корисну їжу, з урахуванням своїх потреб і проблем зі здоров'ям. Думаю, що через З місяці такого режиму в менеі аналізи будуть в нормі і стан здоров'я в цілому.",
      rating: 5
    },
    {
      name: "Катерина",
      age: "27 років",
      result: "Натхнення на нові ідеї",
      text: "Я тепер кажу що треба фотосесію пресу робити)",
      rating: 5
    },
    {
      name: "Христина",
      age: "19 років",
      result: "Така сухенька",
      text: "Ой, мені зараз так подобається! Така сухенька",
      rating: 5
    },
    {
      name: "Анна",
      age: "37 років",
      result: "Приємні зайві витрати",
      text: "Звичайно помітні) Треба гардероб скоро міняти.",
      rating: 5
    }
  ];

  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 3);

    const isFirstRender = useRef(true);

  // 🔥 Скрол при "Сховати"
 useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return;
  }

  if (!showAll && buttonRef.current) {
    buttonRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }
}, [showAll]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Відгуки клієнтів
          </h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600">
            Реальні історії, реальні результати
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`
                bg-white rounded-3xl shadow-xl overflow-hidden
                transform transition-all duration-500
                hover:shadow-2xl
                ${showAll ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}
              `}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="p-6 space-y-4">

                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Result */}
                <div className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full">
                  <span className="font-bold text-pink-600">
                    {testimonial.result}
                  </span>
                </div>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.age}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div ref={buttonRef} className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-lg transition-all"
          >
            {showAll ? "Сховати" : "Показати ще"}
          </button>
        </div>

      </div>
    </section>
  );
}