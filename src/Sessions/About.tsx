import {Code2, Rocket, Sparkles } from "lucide-react"
import { Title } from "../Components/Title"
import { CardAbout } from "../Components/CardAbout"
export function About(){
    return(
        <main className="w-full text-2xl">
            <div className="space-y-6 mx-6">  
                <Title titulo="About Me" />
                <div className="lg:flex lg:justify-between lg:gap-6 text-xl text-center space-y-8 mb-12">
                    <div className="lg:flex lg:justify-between lg:flex-wrap lg:gap-6 space-y-6">
                        <p className="lg:w-[50%] text-left text-4xl font-bold leading-tight">
                            <span className="text-green-300 pr-2">Discover my journey,</span><span className="italic">exploring the path from core logic to modern digital solutions.</span>
                        </p>
                        <div className="space-y-6">
                            <p className="text-left text-xl text-gray-400">
                                Building high-performance applications with React and Precision." Esta é a tradução direta e soa muito forte e confiável.
                            </p>
                            <p className="text-left text-xl text-gray-400 ">
                                Crafting high-performance applications with React and Accuracy." O uso de "Crafting" (lapidando/artesanal) dá um toque de maior qualidade ao teu trabalho.
                            </p>
                            <p className="text-left text-xl text-gray-400">
                                Delivering high-performance React apps with Precision." Mais curta, ideal para um título (Headline) no topo do site.
                            </p> 
                        </div>
                       
                    </div>
                </div>
                <div className="items-center text-center lg:flex lg:justify-between lg:flex-wrap space-y-6">
                        <CardAbout icon={<Code2/>} title="Clean Code" subtitle="high-performance React apps with Precision" />
                        <CardAbout icon={<Rocket/>} title="Performance" subtitle="high-performance React apps with Precision" />
                        <CardAbout icon={<Sparkles/>} title="Innovation" subtitle="high-performance React apps with Precision" />
                </div>
            </div>
        </main>
        
    )
}