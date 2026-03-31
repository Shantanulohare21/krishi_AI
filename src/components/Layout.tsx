import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Sprout, Home, FileText, Info, BarChart3, Stethoscope, Cloud, TrendingUp, Newspaper, Phone, Languages } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navItems = [
    { href: '/', icon: Home, label: t('nav.home') },
    { href: '/analyze', icon: BarChart3, label: t('nav.analyze') },
    { href: '/disease-detection', icon: Stethoscope, label: t('nav.disease') },
    { href: '/weather', icon: Cloud, label: t('nav.weather') },
    { href: '/market', icon: TrendingUp, label: t('nav.market') },
    { href: '/schemes', icon: FileText, label: t('nav.schemes') },
    { href: '/news', icon: Newspaper, label: t('nav.news') },
    { href: '/contact', icon: Phone, label: t('nav.contact') },
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <header className="bg-primary shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <img src="/logo.png" alt="Krishi AI Logo" className="h-10 w-10 rounded-lg group-hover:scale-110 transition-transform" />
              <div className="text-primary-foreground">
                <h1 className="text-2xl font-bold">{t('brand.name')}</h1>
                <p className="text-sm opacity-90">{t('brand.subtitle')}</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link key={item.href} to={item.href}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      size="sm"
                      className={isActive ? 
                        "bg-secondary text-secondary-foreground" : 
                        "text-primary-foreground hover:bg-primary-light"
                      }
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
              </nav>
              <div className="relative">
                <Languages className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-foreground pointer-events-none" />
                <select 
                  value={i18n.language}
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                  className="bg-primary-light text-primary-foreground border border-transparent hover:border-accent rounded pl-8 pr-2 py-1 text-sm outline-none cursor-pointer focus:ring-1 focus:ring-accent appearance-none transition-all"
                >
                  <option value="mr" className="text-gray-900 bg-white">मराठी</option>
                  <option value="en" className="text-gray-900 bg-white">English</option>
                  <option value="hi" className="text-gray-900 bg-white">हिंदी</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-primary-light text-primary-foreground py-12 mt-16 pb-24 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <img src="/logo.png" alt="Krishi AI Logo" className="h-8 w-8 rounded-lg" />
                <span className="text-xl font-semibold">{t('brand.name')}</span>
              </div>
              <p className="text-sm opacity-90 max-w-xs mx-auto md:mx-0">
                {t('footer.title')}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t('nav.quick_links')}</h4>
              <nav className="flex flex-col space-y-2 text-sm opacity-80">
                <Link to="/analyze" className="hover:text-accent transition-colors">{t('nav.analyze')}</Link>
                <Link to="/market" className="hover:text-accent transition-colors">{t('nav.market')}</Link>
                <Link to="/schemes" className="hover:text-accent transition-colors">{t('nav.schemes')}</Link>
                <Link to="/contact" className="hover:text-accent transition-colors">{t('nav.contact')}</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t('nav.gov_links')}</h4>
              <p className="text-xs opacity-70 mb-4">
                {t('footer.disclaimer')}
              </p>
              <div className="text-xs opacity-60">
                &copy; {new Date().getFullYear()} Krishi AI. 
                {t('footer.all_rights')}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation - Scrollable for better responsiveness */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-primary border-t border-primary-light z-50 overflow-x-auto no-scrollbar">
        <div className="flex min-w-max px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link key={item.href} to={item.href} className="px-1 first:pl-2 last:pr-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`flex flex-col items-center py-2 h-auto min-w-[70px] whitespace-nowrap ${
                    isActive ? 
                    "text-accent bg-primary-light/20" : 
                    "text-primary-foreground hover:bg-primary-light"
                  }`}
                >
                  <Icon className="h-5 w-5 mb-1" />
                  <span className="text-[10px] sm:text-xs">{item.label}</span>
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};