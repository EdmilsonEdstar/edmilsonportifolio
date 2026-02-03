import { NavBar } from "../Layout/NavBar"
import { Link } from "../Components/Link"
import { ArrowDown, Download,Github, Linkedin, Send } from "lucide-react"

export function Hero(){
    return(
        <main className="w-[100%] text-2xl bg-hero-pattern" id="home">
            <NavBar/>
            <div className="mb-5 pt-[5rem] mx-6  lg:flex  lg:justify-between lg:mx-[10rem] lg:gap-12 lg:pt-[10rem]">
                <div className="fade-in1">
                    <div className="w-fit my-6 text-sm p-3 bg-gray-800/90 text-green-300 rounded-2xl">
                        Software Developer - Focado em React
                    </div>
                    <h1 className="w-fit my-6 text-4xl font-bold leading-tight lg:w-[35rem]">Construindo <span className="text-blue-400 font-black">aplicações</span> de alta performance com React e precisão.</h1>

                    <p className="w-fit my-6 text-sm leading-5 text-gray-400 lg:w-[30rem]">
                        Olá! Sou Edmilson António, desenvolvedor de software especializado em criar soluções digitais completas.  
                        Aproveitando minha experiência em React e TypeScript, desenvolvo interfaces de alta performance, seguras e escaláveis.  
                        No back-end, utilizo PHP para garantir arquiteturas robustas e eficientes. Minha missão é unir rigor técnico a uma experiência de usuário excepcional, transformando ideias complexas em produtos poderosos e reais.
                    </p>

                    <div className="flex py-6 text-sm">
                        <Link href="#contacts" target="" rel="" classN="flex w-fit bg-blue-500 text-gray-100 hover:bg-blue-900 border border-transparent rounded-2xl py-3 px-6 mr-4 shadow-lg  hover:shadow-none duration-300"><Send size={18} /><span className="pl-3">Contacto</span></Link> 
                        <Link href="#" target="" rel="" classN="flex w-fit border border-gray-400 rounded-2xl py-3 px-6 hover:bg-gray-900 duration-300"><span className="pr-3">Meu CV</span> <Download size={18} /></Link> 
                    </div>
                    <div className="flex text-xl">
                        <a className="w-fit my-6 text-sm p-3 text-white rounded-2xl">Siga-me:</a> 
                        <Link href="https://github.com/EdmilsonEdstar?tab=repositories" target="" rel="" classN="w-fit my-6 text-sm p-3 bg-gray-800/50 text-blue-400 rounded-2xl mr-2"><Github size={15} /></Link> 
                        <Link href="https://www.linkedin.com/in/edmilson-ant%C3%B3nio-44a1b1266/" target="" rel="" classN="w-fit my-6 text-sm p-3 bg-gray-800/50 text-blue-400 rounded-2xl"><Linkedin size={15} /></Link> 
                    </div>
                </div>
               
                <div className="p-[1px] bg-gradient-to-br from-cyan-800 via-gray-900 to-indigo-600 rounded-[60%_40%_55%_45%/45%_55%_45%_55%] lg:h-[520px]  fade-in2">
                <img className="rounded-[60%_40%_55%_45%/45%_55%_45%_55%] object-cover object-top w-[380px] h-[420px]" src="/ed.png" alt="" />

                </div>
            </div>
            <div className="flex justify-center columns-1">
                <p className="arrowdown"><ArrowDown/></p>
            </div>
        </main>
        
    )
}