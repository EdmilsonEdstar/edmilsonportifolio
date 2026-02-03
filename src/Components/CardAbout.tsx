import type React from "react"
import { Link } from "./Link"

type PropsCardSkills = {
    icon: React.ReactNode
    title: string
    subtitle: string
    href: string
}


export function CardAbout(props:PropsCardSkills){
    return(
        <div className="bg-gray-800/50 p-6 text-left space-y-4 rounded-xl m">
            <p className="w-fit bg-blue-400 text-sm text-white p-2 rounded-xl">{props.icon}</p> 
            <p className="font-bold text-xl">{props.title}</p>
           <Link href={props.href} classN=""> <p className="text-sm text-green-100">{props.subtitle}</p> </Link>
        </div>
    )
}