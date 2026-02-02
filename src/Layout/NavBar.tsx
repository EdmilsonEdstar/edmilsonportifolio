import { MenuIcon, PhoneCall } from "lucide-react";
import { Link } from "../Components/Link";

export function NavBar(){
    return(
        <nav className="fixed top-0 left-0 w-full flex  justify-between align-middle text-center px-8 py-4 backdrop-blur-md border-b-2 border-white/10">
            <div>
                <Link href="#" children="EA" classN="font-bold" /><span className="text-blue-300 font-bold">.</span>
            </div>
            <div className="hidden md:block text-base lg:bg-gray-800/50 lg:py-4 lg:px-8 lg:rounded-4xl">
                <Link href="#" children="About Me" classN="p-2 hover:text-blue-300 duration-300" />
                <Link href="#" children="Projects" classN="p-2 hover:text-blue-300 duration-300" />
                <Link href="#" children="Experience" classN="p-2 hover:text-blue-300 duration-300" />
                <Link href="#" children="Contact Me" classN="p-2 hover:text-blue-300 duration-300" />
            </div>
            <div>
                <Link href="#" children={<PhoneCall/>} classN="hidden md:block hover:text-blue-300 duration-300" />
                <Link href="#" children={<MenuIcon />} classN="md:hidden"  />
            </div>

        </nav>
    )
}