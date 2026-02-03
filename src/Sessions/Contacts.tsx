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
                    <span className="text-green-300 pr-2">Entre em contato,</span>
                    <span className="italic">e vamos transformar ideias em soluções digitais.</span>
                  </p>

                  <p className="text-left text-xl text-gray-400">
                    Estou disponível para colaborações, projetos freelance ou oportunidades profissionais.
                  </p>

                </div>
              </div>

                <div className="items-center text-center lg:flex lg:justify-between lg:flex-wrap space-y-6 lg:space-y-0">
                        <CardAbout href="https://mail.google.com/mail/?view=cm&fs=1&to=edmilsonantoniooficial@gmail.com" target="_blanck" rel="noopener noreferrer"  icon={<Mail/>} title="E-mail" subtitle="edmilsonantoniooficial@gmail.com" />
                        <CardAbout href="https://www.linkedin.com/in/edmilson-ant%C3%B3nio-44a1b1266/" target="" rel="" icon={<Linkedin/>} title="Linkedin" subtitle="https://www.linkedin.com/in/edmilson-ant%C3%B3nio-44a1b1266/" />
                        <CardAbout href="https://github.com/EdmilsonEdstar?tab=repositories" target="" rel="" icon={<Github/>} title="GitHub" subtitle="https://github.com/EdmilsonEdstar?tab=repositories" />
                </div>
            </div>
        </main>
        
    )
}