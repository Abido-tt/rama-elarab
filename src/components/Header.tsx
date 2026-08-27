import { useState } from "react";
import * as MenuPrimitive from "@radix-ui/react-menu";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu as MenuIcon, X as XIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Menu = MenuPrimitive.Root;
  const MenuTrigger = MenuPrimitive.Trigger;
  const MenuContent = MenuPrimitive.Content;
  const MenuItem = MenuPrimitive.Item;

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Account for fixed header
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/brand/rama-al-arab-logo.png"
                alt="شعار راما العرب للزجاج"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <nav className="space-x-6">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); handleScrollTo("hero"); }}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                الرئيسية
              </a>
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); handleScrollTo("services"); }}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                الخدمات
              </a>
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); handleScrollTo("projects"); }}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                أعمالنا
              </a>
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); handleScrollTo("about"); }}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                من نحن
              </a>
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); handleScrollTo("areas"); }}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                مناطق الخدمة
              </a>
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); handleScrollTo("contact"); }}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                تواصل معنا
              </a>
            </nav>
            
            <Button variant="default" size="sm" className="px-5 py-2.5 text-sm font-medium">
              تواصل معنا
            </Button>
          </div>
          
          <div className="-mr-2 flex items-center md:hidden">
            <Button 
              variant="outline" 
              size="icon" 
              aria-label="فتح القائمة"
              onClick={() => setIsMenuOpen(true)}
              className="p-2"
            >
              {isMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      <Menu open={isMenuOpen} onOpenChange={setIsMenuOpen} className="z-50 mt-2">
        <MenuContent className="w-full sm:w-56 bg-white border border-gray-100 rounded-md shadow-lg p-2">
          <MenuItem 
            onClick={() => { handleScrollTo("hero"); }}
            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
          >
            الرئيسية
          </MenuItem>
          <MenuItem 
            onClick={() => { handleScrollTo("services"); }}
            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
          >
            الخدمات
          </MenuItem>
          <MenuItem 
            onClick={() => { handleScrollTo("projects"); }}
            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
          >
            أعمالنا
          </MenuItem>
          <MenuItem 
            onClick={() => { handleScrollTo("about"); }}
            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
          >
            من نحن
          </MenuItem>
          <MenuItem 
            onClick={() => { handleScrollTo("areas"); }}
            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
          >
            مناطق الخدمة
          </MenuItem>
          <MenuItem 
            onClick={() => { handleScrollTo("contact"); }}
            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
          >
            تواصل معنا
          </MenuItem>
        </MenuContent>
      </Menu>
    </header>
  );
};

export default Header;