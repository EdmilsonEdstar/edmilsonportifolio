import { Title } from "../Components/Title"
import { CardAbout } from "../Components/CardAbout"

export function Experience() {
    return (
        /* Mantemos o z-0 para o conteúdo não subir sobre o menu fixo */
        <main className="w-full text-2xl relative z-0">
            <div className="space-y-6 mx-6">  
                <Title titulo="Experience" />
                
                <div className="lg:flex lg:justify-between lg:gap-6 text-xl text-center space-y-8 mb-12">
                    <div className="lg:flex lg:justify-between lg:flex-wrap lg:gap-6 space-y-6">
                        <p className="lg:w-[50%] text-left text-4xl font-bold leading-tight">
                            <span className="text-green-300 pr-2">Discover my journey,</span>
                            <span className="italic">exploring the path from core logic to modern digital solutions.</span>
                        </p>
                        <div className="space-y-6">
                            <p className="text-left text-xl text-gray-400">
                                Building high-performance applications with React and Precision.
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
                        
                        <CardAbout 
                            icon="2026 - Present" 
                            title="Freelance" 
                            subtitle="high-performance React apps with Precision" 
                        />
                    </div>

                    {/* CARD 2 - Adicionado 'relative' de volta */}
                    <div className="relative">
                        <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-slate-950 bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)] z-10"></div>
                        
                        <CardAbout 
                            icon="2026 - Present" 
                            title="Insutec" 
                            subtitle="high-performance React apps with Precision" 
                        />
                    </div>

                    {/* CARD 3 - Adicionado 'relative' de volta */}
                    <div className="relative">
                        <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-slate-950 bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)] z-10"></div>
                        
                        <CardAbout 
                            icon="2026 - Present" 
                            title="Freelance" 
                            subtitle="high-performance React apps with Precision" 
                        />
                    </div>

                </div>
            </div>
        </main>
    )
}