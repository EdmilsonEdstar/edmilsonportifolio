export function Footer(){
    return(
        <main className="w-full text-2xl mt-10">
            <div className="space-y-6 mx-6">  
                <div className="lg:flex lg:justify-center lg:gap-6 text-xl text-center space-y-8 mb-12">
                    <div className="lg:flex lg:justify-center lg:flex-wrap lg:gap-6 space-y-6">
                        <div className="space-y-6">
                            <p className="text-center text-base text-gray-400">
                                &copy; {new Date().getFullYear()} Edmilson António. All rights reserved
                            </p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </main>
        
    )
}