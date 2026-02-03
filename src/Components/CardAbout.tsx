import type React from "react"
import { Link } from "./Link"

type PropsCardSkills = {
    icon: React.ReactNode
    title: string
    subtitle: string
    href: string
    target: string
    rel: string
}


export function CardAbout(props:PropsCardSkills){
    return(
        <div className="bg-gray-900/60 p-6 text-left space-y-4 rounded-xl m">
            <p className="w-fit bg-blue-400/10 text-sm text-blue-400 p-3 rounded-4xl">{props.icon}</p> 
            <p className="font-bold text-xl">{props.title}</p>
            <Link href={props.href} target={props.target} rel={props.rel} classN=""> <p className="text-sm text-gray-400 hover:text-green-200 hover:underline">{props.subtitle}</p> </Link>
        </div>
    )
}