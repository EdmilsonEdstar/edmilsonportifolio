import {Code2, Rocket, Sparkles } from "lucide-react"
import { Title } from "../Components/Title"
import { CardAbout } from "../Components/CardAbout"
export function About(){
    return(
        <main className="w-full text-2xl">
            <div className="space-y-6 mx-6">  
                <Title titulo="Sobre mim" id="about" />
                <div className="lg:flex lg:justify-between lg:gap-6 text-xl text-center space-y-8 mb-12">
                    <div className="lg:flex lg:justify-between lg:flex-wrap lg:gap-6 space-y-6">
                        <p className="lg:w-[60%] text-left text-3xl lg:text-4xl font-bold leading-tight">
                            <span className="text-green-300 pr-2">Descubra minha jornada,</span><span className="italic">explorando o caminho da lógica central até soluções digitais modernas.</span>
                        </p>
                        <div className="space-y-6">
                            <p className="text-left text-xl text-gray-400">
                                Construindo aplicações de alta performance com React e precisão.
                            </p>
                            <p className="text-left text-xl text-gray-400">
                                Criando aplicações de alta performance com React e precisão." O uso de "Criando" (ou "Lapidando") transmite um toque de maior qualidade ao seu trabalho.
                            </p>
                            <p className="text-left text-xl text-gray-400">
                                Entregando aplicações React de alta performance com precisão." Mais curta, ideal para um título (headline) no topo do site.
                            </p>

                        </div>
                       
                    </div>
                </div>
                <div className="items-center text-center lg:flex lg:justify-between lg:flex-wrap space-y-6">
                    <CardAbout icon={<Code2/>} title="Código Limpo" subtitle="Aplicações React de alta performance com precisão" />
                    <CardAbout icon={<Rocket/>} title="Performance" subtitle="Aplicações React de alta performance com precisão" />
                    <CardAbout icon={<Sparkles/>} title="Inovação" subtitle="Aplicações React de alta performance com precisão" />
                </div>
            </div>
        </main>
        
    )
}