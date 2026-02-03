import { CardWork } from "../Components/CardWork"
import { Title } from "../Components/Title"

export function Project(){
    return(
        <main className="w-full text-2xl">
            <div className="space-y-6 mx-6">  
            <Title titulo="Projetos" id="projects" />

            <div className="lg:flex lg:justify-between lg:gap-6 text-xl text-center space-y-8 mb-12">
              <div className="lg:flex lg:justify-between lg:flex-wrap lg:gap-6 space-y-6">

                <p className="lg:w-[60%] text-left text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="text-green-300 pr-2">Explore meus projetos,</span>
                  <span className="italic">onde crio soluções funcionais e elegantes que atendem às necessidades reais dos usuários.</span>
                </p>

                <p className="text-left text-xl text-gray-400">
                  Entre os destaques estão sistemas completos como <span className="text-green-300 font-bold">Procano.pt</span>, apps educacionais como Pomodoro e Gaming Hub, e projetos de aprendizado contínuo, sempre priorizando eficiência, experiência do usuário e resultados visíveis.
                </p>

              </div>
            </div>

                <div className="items-center text-center lg:flex lg:justify-between lg:flex-wrap gap-6 space-y-4 lg:space-y-0">
                    <CardWork image="./procano.png"  linkproj="https://www.procano.pt" linkgit="https://github.com/EdmilsonEdstar?tab=repositories" title="Procano" subtitle="Sistema web de prestação de serviços de canalização construída com React, focada em alta performance e precisão. " />
                    <CardWork image="./gaming.png"  linkproj="https://ed-games.vercel.app/" linkgit="https://github.com/EdmilsonEdstar?tab=repositories" title="Gaming Hub" subtitle="Sistema web interativo para gestão de jogos, rankings e comunidade, desenvolvido com React e focado em experiência do usuário e desempenho." />
                </div>
            </div>
        </main>
        
    )
}