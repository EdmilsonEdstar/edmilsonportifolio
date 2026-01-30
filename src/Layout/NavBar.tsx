import { MenuIcon } from "lucide-react";
import { Link } from "../Components/link";

export function NavBar(){
    return(
        <nav className="flex justify-between align-middle text-center p-4">
            <div>
                <Link href="#" children="EA" classN="font-bold" /><span className="text-blue-400 font-bold">.</span>
            </div>
            <div className="hidden md:block">
                <Link href="#" children="About" classN="p-2" />
                <Link href="#" children="Projects" classN="p-2" />
                <Link href="#" children="Experience" classN="p-2" />
            </div>
            <div>
                <Link href="#" children="Contact" classN="hidden md:block" />
                <Link href="#" children={<MenuIcon />} classN="md:hidden"  />
            </div>

        </nav>
    )
}