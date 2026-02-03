
type PropsTitle = {
    titulo: React.ReactNode
    id: string
}

export function Title(props: PropsTitle){
    return(

        <>
            <h1 className="pb-8 pt-[10rem] text-left text-xl uppercase" id={props.id}><span className="text-blue-400 pr-2">|</span>{props.titulo}</h1>
        </>

    )
}