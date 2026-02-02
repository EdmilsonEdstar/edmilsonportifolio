import { ChevronRight, Github} from "lucide-react"
import { Link } from "./Link"


type PropsCardWork = {
    image: string
    title: string
    subtitle: string
}


export function CardWork(props:PropsCardWork){
    return(
        <div className="bg-gray-800/50 p-6 text-left space-y-4 rounded-xl lg:w-[35rem] lg:h-[35rem]">
            <div><img src={props.image} alt="" className="rounded-sm lg:w-full lg:h-[20rem]" /></div>
            <p className="font-bold text-xl">{props.title}</p>
            <p className="text-sm text-green-100">{props.subtitle}</p>
            <div className="flex gap-4 text-gray-500">
                <Link href="#" children={<Github/>} classN="border border-gray-800 p-3 rounded-xl hover:text-blue-300 duration-300"/>
                <Link href="#" children={<ChevronRight/>} classN="border border-gray-800 p-3 rounded-xl hover:text-blue-300 duration-300"/>
            </div>
            <p>Oi</p>
        </div>
    )
}