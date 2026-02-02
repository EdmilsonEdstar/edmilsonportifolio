import { NavBar } from "../Layout/NavBar"
import { Link } from "../Components/Link"
import { Download,Github, Linkedin, Send } from "lucide-react"

export function Hero(){
    return(
        <main className="w-[100%] text-2xl bg-hero-pattern">
            <NavBar/>
            <div className="mb-5 pt-[5rem] mx-6  lg:flex  lg:justify-between lg:mx-[10rem] lg:gap-12 lg:pt-[10rem]">
                <div>
                    <div className="w-fit my-6 text-sm p-3 bg-gray-800/50 text-green-300 rounded-2xl">
                        Software Developer - React specialist
                    </div>
                    <h1 className="w-fit my-6  text-4xl font-bold leading-tight lg:w-[35rem]">Building high-performance <span className="text-blue-400 font-black">applications</span> with React and Precision. </h1>
                    <p className="w-fit my-6  text-sm leading-tight text-gray-400 lg:w-[30rem]">
                        Hi! I'm Edmilson António, a Software Developer specialized in building end-to-end digital solutions. 
                        Leveraging my expertise in React and TypeScript, I create high-performance, secure, and scalable interfaces.
                        On the back-end, I use PHP to ensure robust and efficient architectures. My mission is to merge technical 
                        rigor with exceptional user experience, turning complex ideas into powerful, real-world products.
                    </p>
                    <div className="flex py-6 text-sm">
                        <Link href="#" classN="flex w-fit bg-blue-400 text-gray-100 rounded-2xl py-3 px-6 mr-4 shadow-lg shadow-blue-500/50"><Send size={18} /><span className="pl-3">Contacto</span></Link> 
                        <Link href="#" classN="flex w-fit border border-gray-700 rounded-2xl py-3 px-6"><span className="pr-3">Meu CV</span> <Download size={18} /></Link> 
                    </div>
                    <div className="flex text-xl">
                        <Link href="#" classN="w-fit my-6 text-sm p-3 text-white rounded-2xl">Siga-me:</Link> 
                        <Link href="#" classN="w-fit my-6 text-sm p-3 bg-gray-800/50 text-blue-400 rounded-2xl mr-2"><Github size={15} /></Link> 
                        <Link href="#" classN="w-fit my-6 text-sm p-3 bg-gray-800/50 text-blue-400 rounded-2xl"><Linkedin size={15} /></Link> 
                    </div>
                </div>
               
                <div className="p-[3px] bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 
            rounded-[60%_40%_55%_45%/45%_55%_45%_55%] shadow-2xl">
                    <img className="rounded-[60%_40%_55%_45%/45%_55%_45%_55%] object-cover w-[380px] h-[420px]" src="/ed.png" alt="" />
                </div>
            </div>
        </main>
        
    )
}