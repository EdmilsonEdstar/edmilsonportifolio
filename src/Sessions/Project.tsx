import { CardWork } from "../Components/CardWork"
import { Title } from "../Components/Title"

export function Project(){
    return(
        <main className="w-full text-2xl">
            <div className="space-y-6 mx-6">  
                <Title titulo="Projectos" id="projects" />
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
                <div className="items-center text-center lg:flex lg:justify-between lg:flex-wrap gap-6 space-y-4 lg:space-y-0">
                    <CardWork image="./procano.png"  linkproj="https://www.procano.pt" linkgit="https://github.com/EdmilsonEdstar?tab=repositories" title="Procano" subtitle="Construindo aplicações de alta performance com React e precisão. " />
                    <CardWork image="./gaming.png"  linkproj="https://ed-games.vercel.app/" linkgit="https://github.com/EdmilsonEdstar?tab=repositories" title="Gaming Hub" subtitle="Construindo aplicações de alta performance com React e precisão." />
                </div>
            </div>
        </main>
        
    )
}