import { Button } from './ui/button';
import { ArrowRight, Shield, Clock, Zap } from 'lucide-react';

export function CTA() {

  const benefits = [
    { icon: Clock, text: "Доступ назавжди" },
    { icon: Zap, text: "Результат з першого тижня" },
    { icon: Shield, text: "Перевірена система" }
  ];

  const handleBuy = async () => {
    const res = await fetch('/.netlify/functions/create-payment', {
      method: 'POST',
    });

    const data = await res.json();

    if (data.pageUrl) {
      window.location.href = data.pageUrl;
    } else {
      alert("Помилка оплати");
      console.log(data);
    }
  };

  return (
    <section id="cta" className="py-16 md:py-24 bg-gradient-to-br from-pink-600 via-pink-500 to-purple-600 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,...")`
        }} />
      </div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Почни змінювати своє тіло вже сьогодні!
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Отримай гайд і дізнайся, як харчуватися правильно
          </p>
          <p className="text-lg text-white/80">
            Це не чергова дієта. Це система, яка працює.
          </p>
        </div>
        
        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4">
                <benefit.icon className="w-6 h-6 text-pink-600" />
              </div>
              <p className="text-white font-semibold">{benefit.text}</p>
            </div>
          ))}
        </div>
        
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto">
          <div className="text-center space-y-6">

            {/* PRICE */}
            <div>
              <div className="flex items-center justify-center space-x-4">
                <p className="text-5xl md:text-6xl font-bold text-pink-600">299 грн</p>
              </div>
            </div>
            
            {/* WHAT YOU GET */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 space-y-3">
              <p className="font-semibold text-gray-800">Що ти отримаєш:</p>
              <ul className="space-y-2 text-left">
                <li className="flex"><span className="text-pink-600 mr-2">✓</span>PDF гайд</li>
                <li className="flex"><span className="text-pink-600 mr-2">✓</span>Шаблони</li>
                <li className="flex"><span className="text-pink-600 mr-2">✓</span>Список продуктів</li>
                <li className="flex"><span className="text-pink-600 mr-2">✓</span>Раціони</li>
                <li className="flex"><span className="text-pink-600 mr-2">✓</span>Доступ назавжди</li>
              </ul>
            </div>

            {/* BUTTON */}
            <Button
              onClick={handleBuy}
              className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-6 text-lg rounded-full"
            >
              Купити гайд за 299 грн
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <p className="text-sm text-gray-500">
              Безпечна оплата.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}