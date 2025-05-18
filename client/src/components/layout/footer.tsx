import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-50/50 border-t py-5 mt-10">
      <div className="container px-4 mx-auto max-w-5xl">
        {/* Linha superior com logo e navegação minimalista */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Logo central */}
          <Link href="/" className="font-bold text-lg text-gray-800 hover:text-primary transition-colors">
            RUAN<span className="text-primary">JASIEL</span>
          </Link>
          
          {/* Links simples em linha */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
              {t('common.home')}
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
              {t('common.about')}
            </Link>
            <Link href="/resume" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
              {t('common.resume')}
            </Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
              {t('common.portfolio')}
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
              {t('common.contact')}
            </Link>
          </div>

        </div>
        
        {/* Linha de copyright extremamente minimalista */}
        <div className="mt-5 pt-4 border-t border-gray-200/70 text-center">
          <p className="text-gray-400 text-xs">
            &copy; {currentYear} Ruan Jasiel • 
            <span className="inline-block mx-2 w-1 h-1 rounded-full bg-gray-300"></span>
            Salvador, Bahia
          </p>
        </div>
      </div>
    </footer>
  );
}
