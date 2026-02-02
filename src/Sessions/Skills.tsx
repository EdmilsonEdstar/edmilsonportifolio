import { CardSkills } from "../Components/CardSkills"

export function Skills(){
    return(
        <main className="w-[100%] text-2xl">
            <div className="my-5 mx-6">
                <div className="text-sm text-center">
                    <p className="py-8">SKILLS</p>
                        <div className="lg:w-full lg:flex lg:justify-center lg:flex-wrap lg:gap-6">
                            <CardSkills width="60" per="60%" children="React" />
                            <CardSkills width="70" per="70%" children="Tailwind css"/>
                            <CardSkills width="60" per="60%" children="Typescript"/>
                            <CardSkills width="80" per="80%" children="Javascript"/>
                            <CardSkills width="90" per="90%" children="Php"/>
                            <CardSkills width="50" per="50%" children="Git"/>
                            <CardSkills width="60" per="60%" children="Github"/>
                            <CardSkills width="95" per="95%" children="Mysql"/>
                        </div>
                </div>
            </div>
        </main>
        
    )
}