import { CardWork } from "../Components/CardWork"
import { Title } from "../Components/Title"

export function Project(){
    return(
        <main className="w-full text-2xl">
            <div className="space-y-6 mx-6">  
                <Title titulo="Projects" />
                <div className="lg:flex lg:justify-between lg:gap-6 text-xl text-center space-y-8 mb-12">
                    <div className="lg:flex lg:justify-between lg:flex-wrap lg:gap-6 space-y-6">
                        <p className="lg:w-[50%] text-left text-4xl font-bold leading-tight">
                            <span className="text-green-300 pr-2">Discover my journey,</span><span className="italic">exploring the path from core logic to modern digital solutions.</span>
                        </p>
                        <div className="space-y-6">
                            <p className="text-left text-xl text-gray-400">
                                Building high-performance applications with React and Precision."
                            </p>
                        </div>
                       
                    </div>
                </div>
                <div className="items-center text-center lg:flex lg:justify-between lg:flex-wrap gap-6 space-y-4 lg:space-y-0">
                        <CardWork image="./procano.png" title="Procano" subtitle="high-performance React apps with Precisionhigh-performance React apps with Precision " />
                        <CardWork image="./gaming.png" title="Gaming Hub" subtitle="high-performance React apps with Precisionhigh-performance React apps with Precision" />
                </div>
            </div>
        </main>
        
    )
}