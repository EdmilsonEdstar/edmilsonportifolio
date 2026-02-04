import { useState } from "react";
import { MenuIcon, PhoneCall, X } from "lucide-react";
import { Link } from "../Components/Link";

export function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault(); // evita recarregar a página
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed z-10 top-0 left-0 w-full flex justify-between items-center text-center px-8 py-4 backdrop-blur-md border-b-2 border-white/10">
      <div>
        <Link target="" rel="" href="#home" children="EA" classN="font-bold" />
        <span className="text-blue-400 font-bold">.</span>
      </div>

      {/* Menu desktop */}
      <div className="hidden md:flex text-base lg:bg-gray-800/50 lg:py-2 lg:px-8 lg:rounded-4xl duration-500">
        <Link href="#about" children="Sobre mim" classN="p-2 hover:text-blue-400 duration-300" />
        <Link href="#projects" children="Projectos" classN="p-2 hover:text-blue-400 duration-300" />
        <Link href="#experience" children="Experiência" classN="p-2 hover:text-blue-400 duration-300" />
        <Link href="#contacts" children="Contactos" classN="p-2 hover:text-blue-400 duration-300" />
      </div>

      {/* Ícone do menu mobile */}
      <div className="md:hidden">
        <a href="#" onClick={toggleMenu}>
         {showMenu ? <X/> : <MenuIcon />} 
        </a>
      </div>

      {/* Menu mobile */}
      <div className={`absolute top-full left-0 w-full flex flex-col bg-gray-950/95 text-xl font-bold text-center py-6 transform transition-all duration-300 ease-in-out ${showMenu ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
        <Link href="#about" onclick={()=> setShowMenu(false)} children="Sobre mim" classN="p-2 hover:text-blue-400 duration-300" />
        <Link href="#projects" onclick={()=> setShowMenu(false)} children="Projectos" classN="p-2 hover:text-blue-400 duration-300" />
        <Link href="#experience" onclick={()=> setShowMenu(false)} children="Experiência" classN="p-2 hover:text-blue-400 duration-300" />
        <Link href="#contacts" onclick={()=> setShowMenu(false)} children="Contactos" classN="p-2 hover:text-blue-400 duration-300" />
      </div>

      {/* Ícone de telefone desktop */}
      <div className="hidden md:block">
        <Link target="" rel="" href="#contacts" children={<PhoneCall />} classN="hover:text-blue-400 duration-300" />
      </div>
    </nav>
  );
}
