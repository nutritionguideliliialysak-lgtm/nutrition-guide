import { Instagram, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Гайд по харчуванню</h3>
            <p className="text-gray-400">
              Системний підхід до харчування від тренера-нутриціолога з 7 річним досвідом.
            </p>
          </div>
          

          {/* Contacts */}
<div className="space-y-3">
  <a 
    href="https://instagram.com/lilya_lysak" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center text-gray-400 hover:text-white transition-colors"
  >
    <Instagram className="w-5 h-5 mr-2" />
    @lilya_lysak
  </a>

  <a 
    href="https://t.me/lilyalysak" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center text-gray-400 hover:text-white transition-colors"
  >
    <MessageCircle className="w-5 h-5 mr-2" />
    @lilyalysak
  </a>
    <a 
    href="https://mail.google.com/mail/?view=cm&to=lilya.fitcoach@gmail.com&su=Питання по гайду"
target="_blank"
rel="noopener noreferrer"
    className="flex items-center text-gray-400 hover:text-white transition-colors"
  >
    <Mail className="w-5 h-5 mr-2" />
    lilya.fitcoach@gmail.com
  </a>

</div>
          
          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Соціальні мережі</h3>
            <p className="text-gray-400 mb-4">
              Підписуйтесь, щоб не пропустити корисні поради та спеціальні пропозиції!
            </p>
           <div className="flex space-x-4">
  <a 
    href="https://instagram.com/lilya_lysak"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors"
  >
    <Instagram className="w-5 h-5" />
  </a>

  <a 
    href="https://t.me/lilyalysak"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors"
  >
    <MessageCircle className="w-5 h-5" />
  </a>
</div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Гайд по харчуванню. Всі права захищені.</p>
          <p className="mt-2 text-sm">
            Цей продукт створено виключно з освітньою метою і не є медичною консультацією.
          </p>
        </div>
      </div>
    </footer>
  );
}
