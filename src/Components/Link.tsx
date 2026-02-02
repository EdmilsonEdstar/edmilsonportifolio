
type PropsLink = {
    href: string
    children: React.ReactNode
    classN: string
}

export function Link(props: PropsLink){
    return(

        <>
            <a href={props.href} className={props.classN}>{props.children}</a>
        </>

    )
}