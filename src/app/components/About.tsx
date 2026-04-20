import { Target, Award, Users } from 'lucide-react';

export function About() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Хто я</h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Я тренер та нутриціолог з <span className="font-bold text-pink-600">7 річним досвідом</span>, який працює через систему.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Допомагаю людям прийти до результату, де важлива не просто вага - а <span className="font-bold text-pink-600">вигляд тіла</span>.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              І саме це я заклала в цей гайд.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl border-2 border-pink-100">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-600 text-white p-3 rounded-xl">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Системний підхід</h3>
                  <p className="text-gray-600">Працюю через перевірені методики, а не модні тренди</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-100">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 text-white p-3 rounded-xl">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Реальні результати</h3>
                  <p className="text-gray-600">Фокус на природні форми, а не лише на циферках ваг</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl border-2 border-pink-100">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-600 text-white p-3 rounded-xl">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">7 років досвіду</h3>
                  <p className="text-gray-600">Сотні клієнтів, які досягли своїх цілей</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
