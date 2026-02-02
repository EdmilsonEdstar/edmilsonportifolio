import { NavBar } from "../Layout/NavBar"
import { Link } from "../Components/Link"
import { Download,Github, Linkedin, Send } from "lucide-react"

export function Hero(){
    return(
        <main className="w-[100%] text-2xl">
            <video
              autoPlay
              loop
              muted 
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover -z-10">

    <source src="/ed.mp4" type="video/mp4" />
    {/* Fallback caso o vídeo falhe */}
    O teu navegador não suporta vídeos.
  </video>
            <NavBar/>
            <div className="my-5 mx-6 lg:flex  lg:justify-between lg:mx-[10rem] lg:gap-12 pt-[10rem]">
                <div>
                    <div className="w-fit my-6 text-sm p-3 bg-gray-800/50 text-green-300 rounded-2xl">
                        Software Developer - React specialist
                    </div>
                    <h1 className="w-fit my-6  text-4xl font-bold leading-tight lg:w-[35rem]">Building high-performance <span className="text-blue-300 font-black">applications</span> with React and Precision. </h1>
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
                        <Link href="#" classN="w-fit my-6 text-sm p-3 bg-gray-800/50 text-blue-300 rounded-2xl mr-2"><Github size={15} /></Link> 
                        <Link href="#" classN="w-fit my-6 text-sm p-3 bg-gray-800/50 text-blue-300 rounded-2xl"><Linkedin size={15} /></Link> 
                    </div>
                </div>
               
                <div>
                    <img className="rounded-xl w-xl h-xl lg:w-[25rem] lg:h-[30rem] lg:ml-5" src="/ed1.png" alt="" />
                </div>
            </div>
        </main>
        
    )
}