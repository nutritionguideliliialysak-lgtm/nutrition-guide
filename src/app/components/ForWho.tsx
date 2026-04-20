import { X, Check } from 'lucide-react';

export function ForWho() {
  const problems = [
    "не розумієш, скільки тобі потрібно їсти насправді",
    "плутаєшся в калоріях, білках, жирах і вуглеводах",
    "або взагалі не рахуєш - і не бачиш результату",
    "худнеш, але виглядаєш \"м'яко\"",
    "хочеш самостійно контролювати форму"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Цей гайд для тебе, якщо ти:</h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto rounded-full" />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-3">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 py-2 rounded-xl hover:bg-pink-50 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-pink-600 text-white rounded-full p-1">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-lg text-gray-700 flex-1">{problem}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Звучить знайомо?
            </p>
            <p className="text-lg text-gray-600">
              Тоді цей гайд саме для тебе! 👇
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
