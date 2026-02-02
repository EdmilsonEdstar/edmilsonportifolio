
type PropsTitle = {
    titulo: React.ReactNode
}

export function Title(props: PropsTitle){
    return(

        <>
            <h1 className="py-8 text-left text-xl uppercase"><span className="text-blue-400 pr-2">|</span>{props.titulo}</h1>
        </>

    )
}