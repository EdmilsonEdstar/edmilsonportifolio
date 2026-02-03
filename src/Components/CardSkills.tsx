type PropsCardSkills = {
    children: string;
    width: string; // Ex: "75"
    per: string;   // Ex: "75%"
}

export function CardSkills({ children, width, per }: PropsCardSkills) {
    return (
        <div className="bg-gray-900/40 flex items-center gap-4 px-6 py-6 rounded-lg mb-4 lg:w-[25rem]">

            {/* Nome e Barra */}
            <div className="flex flex-col flex-1 gap-2">
                <span className="text-left text-white text-sm font-medium">
                    {children}
                </span>
                
                {/* Contentor da Barra (Background) */}
                <div className="w-full bg-gray-500 h-2 rounded-full overflow-hidden">
                    {/* A "Fita" Azul (Progress) */}
                    <div 
                        className="bg-gray-700 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${width}%` }} 
                    />
                </div>
            </div>

            {/* Percentagem */}
            <p className="text-sm text-blue-400 font-mono shrink-0">{per}</p>
        </div>
    );
}