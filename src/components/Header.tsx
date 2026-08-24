import { useState } from "react";
import * as MenuPrimitive from "@radix-ui/react-menu";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu as MenuIcon, X as XIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const Menu = MenuPrimitive.Root;
  const MenuTrigger = MenuPrimitive.Trigger;
  const MenuContent = MenuPrimitive.Content;
  const MenuItem = MenuPrimitive.Item;

  // Handle scroll event for sticky header
  // Note: In a real app, we would use useEffect, but for simplicity we'll use inline handler
  // In a real implementation, we would add this in useEffect
  // For now, we'll rely on Tailwind's sticky and handle scroll in a separate effect if needed

  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo placeholder */}
            <span className="text-xl font-bold text-gray-900">راما العرب للزجاج</span>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/* Navigation links */}
            <nav className="space-x-8">
              <Link to="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                الرئيسية
              </Link>
              <Link to="#services" className="text-gray-700 hover:text-gray-900 transition-colors">
                الخدمات
              </Link>
              <Link to="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">
                أعمالنا
              </Link>
              <Link to="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
                من نحن
              </Link>
              <Link to="#areas" className="text-gray-700 hover:text-gray-900 transition-colors">
                مناطق الخدمة
              </Link>
              <Link to="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
                تواصل معنا
              </Link>
            </nav>
            
            {/* CTA Button */}
            <Button variant="default" size="sm" className="px-6 py-2 text-sm">
              تواصل معنا
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <Button 
              variant="outline" 
              size="icon" 
              aria-label="فتح القائمة"
              onClick={() => setIsMenuOpen(true)}
            >
              {isMenuOpen ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <Menu open={isMenuOpen} onOpenChange={setIsMenuOpen} className="z-50">
        <MenuContent className="w-56">
          <MenuItem onClick={() => setIsMenuOpen(false)} className="text-left">
            الرئيسية
          </MenuItem>
          <MenuItem onClick={() => setIsMenuOpen(false)} className="text-left">
            الخدمات
          </MenuItem>
          <MenuItem onClick={() => setIsMenuOpen(false)} className="text-left">
            أعمالنا
          </MenuItem>
          <MenuItem onClick={() => setIsMenuOpen(false)} className="text-left">
            من نحن
          </MenuItem>
          <MenuItem onClick={() => setIsMenuOpen(false)} className="text-left">
            مناطق الخدمة
          </MenuItem>
          <MenuItem onClick={() => setIsMenuOpen(false)} className="text-left">
            تواصل معنا
          </MenuItem>
        </MenuContent>
      </Menu>
    </header>
  );
};

export default Header;