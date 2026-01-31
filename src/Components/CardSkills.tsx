import { Code2} from "lucide-react"


type PropsCardSkills = {
    children: string
}


export function CardSkills(props:PropsCardSkills){
    return(

        <div className="bg-gray-900/40 flex justify-left items-center gap-4 text-center px-6 py-6 rounded-lg mb-4">
            <span className="text-blue-400"><Code2/></span> {props.children}
        </div>


    )
}