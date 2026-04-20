import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2, BookOpen, Calculator, Apple, ListChecks, FileText, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

import img1 from '../../imports/IMG_4981.jpeg';
import img2 from '../../imports/food6.jpg';
import img3 from '../../imports/food5.jpg';
import img4 from '../../imports/food4.jpg';
import img5 from '../../imports/food3.jpg';
import img6 from '../../imports/food2.jpg';

const images = [img1, img2, img3, img4, img5, img6];

export function WhatsInside() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: BookOpen,
      title: "Що таке калорії і як вони реально працюють",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: Calculator,
      title: "Повне пояснення БЖВ простими словами",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: CheckCircle2,
      title: "Як самостійно розрахувати свою норму під ціль (схуднення / підтримка / рекомпозиція)",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: Apple,
      title: "Як підбирати продукти і складати раціон",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: ListChecks,
      title: "Список продуктів + варіанти замін",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: FileText,
      title: "Приклади раціону",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Shield,
      title: "Правила, які допомагають тримати форму без зривів",
      color: "bg-pink-100 text-pink-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            В гайді ти знайдеш:
          </h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              
              {images.map((img, index) => (
                <ImageWithFallback
                  key={index}
                  src={img}
                  alt="Здорове харчування"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] ${
                    index === currentIndex
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-105 z-0'
                  }`}
                />
              ))}

            </div>
          </div>
          
          {/* FEATURES */}
          <div className="order-1 lg:order-2 space-y-2">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start space-x-2 p-2 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all"
              >
                <div className={`flex-shrink-0 p-3 rounded-xl ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {feature.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Твоє тіло - це не випадковість.
            </p>
            <p className="text-xl md:text-2xl text-pink-600 font-semibold">
              Це система, яку ти в силах контролювати!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}