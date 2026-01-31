import { NavBar } from "../Layout/NavBar"
import { Link } from "../Components/link"
import { Download,Github, Linkedin, Send } from "lucide-react"
import { CardSkills } from "../Components/CardSkills"

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
            <div className=" my-5 mx-6">
                <div className="w-fit my-6 text-sm p-3 bg-gray-800 text-blue-400 rounded-2xl">
                    Software Developer - React specialist
                </div>
                <h1 className="w-fit my-6  text-4xl font-bold leading-tight">Construindo aplicações de <span className="text-blue-400 font-black">alta</span> performance  com React e Precisão.</h1>
                <p className="w-fit my-6  text-base leading-tight text-gray-400">
                Olá! Sou o Edmilson António, Software Developer especializado em criar soluções digitais completas.
                Com domínio em React e TypeScript, construo interfaces de alta performance, seguras e escaláveis.
                 No back-end, utilizo PHP para garantir arquiteturas robustas e eficientes. O meu foco é unir o rigor 
                 técnico do código à melhor experiência para o utilizador, transformando ideias complexas em produtos reais.
                </p>
                <div className="flex py-6 text-sm">
                    <Link href="#" classN="flex w-fit bg-blue-400 text-white rounded-2xl py-3 px-6 mr-4 shadow-lg shadow-blue-500/50"><Send size={18} /><span className="pl-3">Contacte-me</span></Link> 
                    <Link href="#" classN="flex w-fit border border-gray-700 rounded-2xl py-3 px-6"><span className="pr-3">Baixar CV</span> <Download size={18} /></Link> 
                </div>
                <div className="flex text-xl">
                    <Link href="#" classN="w-fit my-6 text-sm p-3 text-white rounded-2xl">Siga-me:</Link> 
                    <Link href="#" classN="w-fit my-6 text-sm p-3 bg-gray-800 text-blue-400 rounded-2xl mr-2"><Github size={15} /></Link> 
                    <Link href="#" classN="w-fit my-6 text-sm p-3 bg-gray-800 text-blue-400 rounded-2xl"><Linkedin size={15} /></Link> 
                </div>
                <div className="text-xl text-center">
                    <img className="bg-gray-800 text-blue-400 rounded-xl w-xl h-xl" src="/ed.png" alt="" />
                    <p className="py-8">Tecnologia que uso</p>
                    <CardSkills children="React"/>
                    <CardSkills children="Tailwind css"/>
                    <CardSkills children="Typescript"/>
                    <CardSkills children="Javascript"/>
                    <CardSkills children="Php"/>
                    <CardSkills children="Git"/>
                    <CardSkills children="Github"/>
                    <CardSkills children="Mysql"/>
                </div>
            </div>
        </main>
        
    )
}