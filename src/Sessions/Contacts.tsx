import { Title } from "../Components/Title"
import { CardAbout } from "../Components/CardAbout"
import { Github, Linkedin, Mail } from "lucide-react"
export function Contacts(){
    return(
        <main className="w-full text-2xl">
            <div className="space-y-6 mx-6">  
                <Title titulo="Contactos" id="contacts" />
                <div className="lg:flex lg:justify-between lg:gap-6 text-xl text-center space-y-8 mb-12">
                    <div className="lg:flex lg:justify-between lg:flex-wrap lg:gap-6 space-y-6">
                        <p className="lg:w-[60%] text-left text-3xl lg:text-4xl font-bold leading-tight">
                            <span className="text-green-300 pr-2">Descubra minha jornada,</span><span className="italic">explorando o caminho da lógica central até soluções digitais modernas.</span>
                        </p>
                        <div className="space-y-6">
                            <p className="text-left text-xl text-gray-400">
                                Construindo aplicações de alta performance com React e precisão.
                            </p>
                        </div>
                       
                    </div>
                </div>
                <div className="items-center text-center lg:flex lg:justify-between lg:flex-wrap space-y-6">
                        <CardAbout icon={<Mail/>} title="E-mail" subtitle="edmilsonantoniooficial@gmail.com" />
                        <CardAbout icon={<Linkedin/>} title="Linkedin" subtitle="https://www.linkedin.com/in/edmilson-ant%C3%B3nio-44a1b1266/" />
                        <CardAbout icon={<Github/>} title="GitHub" subtitle="https://github.com/EdmilsonEdstar?tab=repositories" />
                </div>
            </div>
        </main>
        
    )
}