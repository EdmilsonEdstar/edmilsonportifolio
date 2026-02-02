import type React from "react"

type PropsCardSkills = {
    icon: React.ReactNode
    title: string
    subtitle: string
}


export function CardAbout(props:PropsCardSkills){
    return(
        <div className="bg-gray-800/50 p-6 text-left space-y-4 rounded-xl m">
            <p className="w-fit bg-blue-400 text-sm text-white p-2 rounded-xl">{props.icon}</p> 
            <p className="font-bold text-xl">{props.title}</p>
            <p className="text-sm text-green-100">{props.subtitle}</p>
        </div>
    )
}