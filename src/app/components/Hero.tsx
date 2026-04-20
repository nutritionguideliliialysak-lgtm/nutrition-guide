import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

import img1 from '../../imports/IMG_0067.jpeg';
import img2 from '../../imports/2.jpeg';
import img3 from '../../imports/3.jpeg';
import img4 from '../../imports/4.jpeg';
import img5 from '../../imports/5.jpeg';
import img6 from '../../imports/6.jpeg';

const images = [img1, img2, img3, img4, img5, img6];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollToCTA = () => {
    const ctaSection = document.getElementById('cta');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 to-purple-100/20" />

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* TEXT */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-pink-100 rounded-full">
              <span className="text-pink-600 font-semibold text-sm">
                Гайд по харчуванню
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Перестань гадати, що їсти
            </h1>

            <p className="text-xl md:text-2xl text-gray-700">
              Я навчу розуміти, як це працює
            </p>

            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Гайд, який навчить тебе рахувати БЖВ, складати раціон і отримувати бажаний результат без крайнощів.
            </p>

            <div className="space-y-3">
              <p className="text-gray-700 font-medium">
                Ніякого хаосу та "інтуїтивного харчування".
              </p>
              <p className="text-lg font-semibold text-pink-600">
                Чітка система, яку ти зможеш використовувати все життя!
              </p>
            </div>

            <Button
              onClick={handleScrollToCTA}
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg rounded-full group"
              size="lg"
            >
              Отримати гайд
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] lg:h-[600px]">
              
              {images.map((img, index) => (
                <ImageWithFallback
                  key={index}
                  src={img}
                  alt="Тренер нутриціолог"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] ${
                    index === currentIndex
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-105 z-0'
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent z-20" />
            </div>

            {/* FLOATING CARD */}
          <div className="
  absolute 
  bottom-4 left-4 
  lg:-bottom-6 lg:-left-6 
  bg-white rounded-2xl shadow-xl 
  p-4 lg:p-6 
  z-30
">
  <div className="text-3xl font-bold text-pink-600">7 років</div>
  <div className="text-gray-600">досвіду</div>
</div>
          </div>

        </div>
      </div>
    </section>
  );
}