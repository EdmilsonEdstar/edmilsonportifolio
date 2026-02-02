import { Title } from "../Components/Title"
import { CardAbout } from "../Components/CardAbout"
import { Github, Linkedin, Mail } from "lucide-react"
export function Contacts(){
    return(
        <main className="w-full text-2xl">
            <div className="space-y-6 mx-6">  
                <Title titulo="Contact Me" />
                <div className="lg:flex lg:justify-between lg:gap-6 text-xl text-center space-y-8 mb-12">
                    <div className="lg:flex lg:justify-between lg:flex-wrap lg:gap-6 space-y-6">
                        <p className="lg:w-[50%] text-left text-4xl font-bold leading-tight">
                            <span className="text-green-300 pr-2">Discover my journey,</span><span className="italic">exploring the path from core logic to modern digital solutions.</span>
                        </p>
                        <div className="space-y-6">
                            <p className="text-left text-xl text-gray-400">
                                Building high-performance applications with React and Precision." Esta é a tradução direta e soa muito forte e confiável.
                            </p>
                        </div>
                       
                    </div>
                </div>
                <div className="items-center text-center lg:flex lg:justify-between lg:flex-wrap space-y-6">
                        <CardAbout icon={<Mail/>} title="E-mail" subtitle="edmilsonantoniooficial@gmail.com" />
                        <CardAbout icon={<Linkedin/>} title="Linkedin" subtitle="https://www.linkedin.com/public-profile/settings" />
                        <CardAbout icon={<Github/>} title="Innovation" subtitle="https://github.com/EdmilsonEdstar?tab=repositories" />
                </div>
            </div>
        </main>
        
    )
}