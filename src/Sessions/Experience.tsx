import { Title } from "../Components/Title"
import { CardAbout } from "../Components/CardAbout"

export function Experience() {
    return (
        /* Mantemos o z-0 para o conteúdo não subir sobre o menu fixo */
        <main className="w-full text-2xl relative z-0">
            <div className="space-y-6 mx-6">  
                <Title titulo="Experiência" id="experience" />
                
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

                {/* Container da Timeline - O 'relative' aqui é importante para a linha vertical */}
                <div className="relative ml-4 space-y-12 border-l-2 border-teal-500/30 pl-8">
                    
                    {/* CARD 1 - Adicionado 'relative' de volta */}
                    <div className="relative">
                        {/* Ponto da Timeline - Agora ele sabe que deve ficar ao lado deste card */}
                        <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-slate-950 bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)] z-10"></div>
                        
                        <CardAbout href="#projects"
                            icon="JAN-2026 -> FEV-2026" 
                            title="React Developer(Freelancer) - Sistema de Prestação de Serviços Procano" 
                            subtitle="Construindo aplicações de alta performance com React e precisão." 
                        />
                    </div>

                    {/* CARD 2 - Adicionado 'relative' de volta */}
                    <div className="relative">
                        <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-slate-950 bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)] z-10"></div>
                        
                        <CardAbout href="#projects"
                            icon="FEV-2023 -> JUL-2023" 
                            title="Software Developer(Insutec) - Sistema de Gestão Escolar " 
                            subtitle="Construindo aplicações de alta performance com React e precisão." 
                        />
                    </div>

                    {/* CARD 3 - Adicionado 'relative' de volta */}
                    <div className="relative">
                        <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-slate-950 bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)] z-10"></div>
                        
                        <CardAbout href="#projects"
                            icon="SET-2021 -> NOV-2022" 
                            title="Fullstack Developer(Freelance) - Loja online e Sistema de Prestação de Serviços " 
                            subtitle="Construindo aplicações de alta performance com React e precisão." 
                        />
                    </div>

                </div>
            </div>
        </main>
    )
}