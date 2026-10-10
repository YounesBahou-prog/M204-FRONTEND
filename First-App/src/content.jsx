import StudentCard from "./StudentCard"; 'module'
function Content() {
    const etudiants=[
         {id:1,nom:"Younes",note:15},
         {id:2,nom:"Mehdi",note:19},
         {id:3,nom:"Zakaria",note:17},
         ];
    return (
        <div className="w-full">


            <main className="p-8">

                <h2 className="text-3xl font-bold">
                    Liste des étudiants
                </h2>

                <div className="mt-6 grid grid-cols-3 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {etudiants.map(function(item){
                    return <StudentCard key={item.id} etudiant={item}/>
                })}
                
                {/* <StudentCard nom='mehdi' note={20}/>
                <StudentCard nom='reda' note={20}/>
                <StudentCard nom='younes' note={20}/> */}


                </div>

            </main>

        </div>
    );
}

export default Content;