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

  return (
    <header className="bg-white/80 backdrop-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              راما العرب للزجاج
            </span>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <nav className="space-x-6">
              <Link to="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                الرئيسية
              </Link>
              <Link to="#services" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                الخدمات
              </Link>
              <Link to="#projects" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                أعمالنا
              </Link>
              <Link to="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                من نحن
              </Link>
              <Link to="#areas" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                مناطق الخدمة
              </Link>
              <Link to="#contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                تواصل معنا
              </Link>
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
          <MenuItem onClick={() => setIsMenuOpen(false)} className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
            الرئيسية
          </MenuItem>
          <MenuItem onClick={() => setIsMenuOpen(false)} className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
            الخدمات
          </MenuItem>
          <MenuItem onClick={() => setIsMenuOpen(false)} className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
            أعمالنا
          </MenuItem>
          <MenuItem onClick={() => setIsMenuOpen(false)} className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
            من نحن
          </MenuItem>
          <MenuItem onClick={() => setIsMenuOpen(false)} className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
            مناطق الخدمة
          </MenuItem>
          <MenuItem onClick={() => setIsMenuOpen(false)} className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
            تواصل معنا
          </MenuItem>
        </MenuContent>
      </Menu>
    </header>
  );
};

export default Header;