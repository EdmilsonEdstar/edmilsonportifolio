import { ArrowRight, Github} from "lucide-react"


type PropsCardWork = {
    image: string
    title: string
    subtitle: string
    linkproj:string
    linkgit:string
}


export function CardWork(props:PropsCardWork){
    return(
        <div className="bg-gray-900/40 p-6 text-left space-y-4 rounded-xl lg:w-[35rem] lg:h-[35rem]">
            <div><img src={props.image} alt="" className="rounded-xl lg:w-full lg:h-[20rem]" /></div>
            <p className="font-bold text-xl">{props.title}</p>
            <p className="text-sm text-gray-400">{props.subtitle}</p>
            <div className="flex gap-4 text-gray-400">
                <a href={props.linkgit} target="_blank" children={<Github/>} className="border border-gray-800 p-3 rounded-xl hover:text-blue-400 duration-300"/>
                <a href={props.linkproj} target="_blank" children={<ArrowRight/>} className="border border-gray-800 p-3 rounded-xl hover:text-blue-400 duration-300"/>
            </div>
        </div>
    )
}