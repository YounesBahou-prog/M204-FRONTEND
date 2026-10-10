export default function StudentCard(props){

    return(
        <>          
        <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-md">
                        <h3 className="text-lg font-bold">
                            {props.etudiant.nom}
                            {/* {props.nom} */}
                        </h3>

                        <p className="mt-2 text-slate-500">
                            Note:
                            {props.etudiant.note}/20
                            {/* {props.note}/20 */}
                        </p>
                    </div>

        </>
    )
}
