
type PropsLink = {
    href: string
    children: React.ReactNode
    classN?: string
    target?: string 
    rel?: string
    onclick?:() => void
}

export function Link(props: PropsLink){
    return(

        <>
            <a href={props.href} className={props.classN} onClick={props.onclick}>{props.children}</a>
        </>

    )
}