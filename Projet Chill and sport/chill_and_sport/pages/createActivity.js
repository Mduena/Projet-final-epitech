import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import Navbar from "../components/navBar.js";
import Footer from '../components/footer';

export default function CreateActivity()
{
    //const [userId, setUserId] = useState("");
    const [categories, setCategories] = useState([]);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [limitPeople, setLimitPeople] = useState("");
    const [photo, setPhoto] = useState("");
    const [organizer, setOrganizer] = useState("");
    const [begin, setBegin] = useState("");
    const [end, setEnd] = useState("");

    const router = useRouter();

    async function getCategories()
    {
        let catArray = [];

        const results = await axios.get("/api/category/get_categories");

        //console.log(results);

        for(const r of results.data.category)
        {
            //console.log(r);
            catArray.push({id: r._id, name: r.name});
        }

        setCategories(catArray);

        //setUserId(JSON.parse(window.localStorage["auth"]).userId);
        setOrganizer(JSON.parse(window.localStorage["auth"]).userId);
    }

    function submit()
    {
        //console.log(title, description, category, limitPeople, organizer, photo, begin, end);

        if(title == "")
        {
            alert("Veuillez donner un titre à votre activité");
        }

        else
        if(description == "")
        {
            alert("Veuillez donner une description à votre activité");
        }

        else
        if(category == "none" || category == "")
        {
            alert("Veuillez sélectionner une catégorie");
        }

        else
        if(limitPeople == "")
        {
            alert("Veuillez indiquer un nombre max de participants");
        }

        else
        if(photo == "")
        {
            alert("Veuillez ajouter une photo");
        }

        else
        if(begin == "")
        {
            alert("Veuillez indiquer une date de début");
        }

        else
        // if(end == "")
        // {
        //     alert("Veuillez indiquer une date de fin");
        // }

        // else
        {
            const body = {
                title: title,
                organisater_id: organizer,
                description: description,
                participants_id: [organizer],
                limit_people: limitPeople,
                photo: photo,
                category_id: category,
                date_debut: begin,
               // date_fin: end
            };

            //console.log(body);

            axios.post("/api/activity/add_activity", body)
            .then((res) => {
                console.log(res);
                if(res.status == 200)
                {
                    router.push("/profil");
                }
                else
                {
                    alert("Une erreur interne s'est produite :(");
                }
            });
        }
    }

    useEffect(() => {

        getCategories();

    }, []);

    //console.log(categories);
    
    return(
        <div >
            <Navbar />

            <div className=" grid  place-items-center text-2xl bg-gradient-to-r from-gray-50 to-omblue ">
                
{/*             <input onChange={(e) => setTitle(e.target.value)} name="title" type="text" placeholder="Titre de votre activité :)" required="true" />
            <input onChange={(e) => setDescription(e.target.value)} name="description" type="text" placeholder="On fait de quoi de beau ?" required="true" />
            
            <select onChange={(e) => setCategory(e.target.value)} name="category" required>
                <option value="none">Choisir une catégorie</option>
                {
                    categories.map((cat) => {
                        return(
                            <option value={ cat.id }>{ cat.name }</option>
                        )
                    })
                }
            </select>
            
            <input onChange={(e) => setLimitPeople(e.target.value)} name="limit_people" type="number" placeholder="Nombre max de participants" required="true" min="-1" />
            <input onChange={(e) => setPhoto(e.target.value)} name="photo" type="text" placeholder="Choisir une photo" required="true" />
            <input onChange={(e) => setBegin(e.target.value)} name="begin" type="datetime-local" required="true" /> */}
            {/* <input onChange={(e) => setEnd(e.target.value)} name="end" type="datetime-local" required="true" /> */}
            
{/*             <input onClick={submit} type="button" value="Je crains degun !" /> */}

            


            <div className="bg-gray-200 rounded-2xl mt-10 mb-10">
                <div className=" p-20  max-w-prose ">
                <p className="text-4xl">Crée ton activité :</p>
                <br></br>

                <label for="titre" class="block text-sm font-medium text-gray-700 text-2xl">Titre de l'activité</label>
                <div class="relative mt-1 rounded-md">
                    <input className=" p-2 border-4  rounded-xl "  onChange={(e) => setTitle(e.target.value)} name="title" type="text"  required="true" />
                </div>
                <br></br>

                <label for="description" class="block text-sm font-medium text-gray-700 text-2xl">Description de l'activité</label>
                <div class="relative mt-1 rounded-md shadow-sm">
                    <textarea className="w-full p-2 border-4  rounded-xl " rows="4"  onChange={(e) => setDescription(e.target.value)} name="description" type="text"  required="true" />
                </div>
                <br></br>

                <label for="choix de categorie" class="block text-sm font-medium text-gray-700 text-2xl">Choisir la categorie</label>
                <div class="relative mt-1 rounded-md shadow-sm">
                    <select className=" p-2 border-4  rounded-xl " onChange={(e) => setCategory(e.target.value)} name="category" required>
                        <option value="none">-------</option>
                        {
                            categories.map((cat) => {
                                return(
                                    <option value={ cat.id }>{ cat.name }</option>
                                )
                            })
                        }
                    </select>
                </div>
                <br></br>

                <label for="max_people" class="block text-sm font-medium text-gray-700 text-2xl">Nombre de personnes max</label>
                <div class="relative mt-1 rounded-md shadow-sm">
                    <input className=" p-2 border-4  rounded-xl " onChange={(e) => setLimitPeople(e.target.value)} name="limit_people" type="number"  required="true" min="-1" />
                </div>
                <br></br>

                <label for="photo" class="block text-sm font-medium text-gray-700 text-2xl">Ajouter une photo</label>
                <div class="relative mt-1 rounded-md shadow-sm">
                    <input className=" p-2 border-4  rounded-xl " onChange={(e) => setPhoto(e.target.value)} name="photo" type="text" placeholder="URL" required="true" />
                </div>
                <br></br>

                <label for="photo" class="block text-sm font-medium text-gray-700 text-2xl">Date et heure du début de l'activité</label>
                <div class="relative mt-1 rounded-md shadow-sm">
                    <input className=" p-2 border-4  rounded-xl " onChange={(e) => setBegin(e.target.value)} name="begin" type="datetime-local" required="true" />
                </div>

                <br></br>

                <label for="photo" class="block text-sm font-medium text-gray-700 text-2xl">Date et heure de la fin de l'activité</label>
                <div class="relative mt-1 rounded-md shadow-sm">
                    <input className=" p-2 border-4  rounded-xl " onChange={(e) => setEnd(e.target.value)} name="end" type="datetime-local" required="true" />
                </div>

                <br></br>
                <br></br>

                <button
                     onClick={submit}
                     href="xtreme"
                     className="
                     p-2 border-4  rounded-xl bg-gradient-to-r from-gray-50 to-omblue
                     text-2xl
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     transition
                     "
                     >
                    Je crains degun !
                </button>
                </div>   
            </div>
            </div>
                <br></br>
                <br></br>
            <Footer />

        </div>
    )
}