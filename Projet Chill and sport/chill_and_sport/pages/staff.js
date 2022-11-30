import Navbar from "../components/navBar";
import Footer from "../components/footer";

const staff = () => {

    const equipe = [
        {
            photo: "../photostaff/Vetso2.png",
            nom: "Andriamiadanarivo",
            prenom: "Vetso",
            email: "vetso@chillandsport.fr",
        },
        {
            photo: "../photostaff/Jessica.png",
            nom: "Jouvencel",
            prenom: "Jessica",
            email: "jessica@chillandsport.fr",
        },
        {
            photo: "../photostaff/Julien.png",
            nom: "Cécilia",
            prenom: "Julien",
            email: "julien@chillandsport.fr",
        },
        {
            photo: "../photostaff/Kevin.png",
            nom: "Gay",
            prenom: "Kévin",
            email: "kevin@chillandsport.fr",
        },
        {
            photo: "../photostaff/Math.png",
            nom: "Duena",
            prenom: "Mathieu",
            email: "mathieu@chillandsport.fr",
        }
    ];




    return (
        <div className="">
                {/* <img className="absolute top-18 right-0"src="../photostaff/fond2.png"/> */}
            <Navbar/>
            <div className="bg-gradient-to-r from-gray-50 to-omblue grid grid-cols-3 place-items-center pb-4 pl-20 pr-20">
                {equipe.map((eq) => {
                    return (
                        
                        <div className="bg-blue-100 drop-shadow-md rounded-xl w-1/2 mt-12 ">
                            <div className="rounded-xl drop-shadow-xl p-4">
                                <div className="">
                                    <img src={eq.photo} />
                                </div>
                                <div className="bg-gray-400  text-blue-50 rounded-xl drop-shadow-xl p-4 ">
                                    <div className="flex justify-center">{eq.prenom} {eq.nom}</div>
                                    <div className="bg-gray-400 text-blue-50 flex justify-center">{eq.titre}</div>
                                    <div className="flex justify-center">Contact : </div>
                                    <div className="flex justify-center">{eq.email}</div>
                                </div>
                            </div>
                        </div>
                    )
                    
                })}
            </div>
            <div className="">
            <Footer/>
            </div>
        </div>

    )


}

export default staff