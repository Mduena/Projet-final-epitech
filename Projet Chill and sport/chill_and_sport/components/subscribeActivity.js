import axios from "axios";
import { useEffect, useState } from "react"
import { useRouter } from "next/router";

export default function SubscribeActivity({activityId})
{
    //console.log(activityId);

    const [userId, setUserId] = useState("");

    const router = useRouter();

    useEffect(() => {
        if(window.localStorage["auth"])
        {
            if(JSON.parse(window.localStorage["auth"]).userId)
            {
                setUserId(JSON.parse(window.localStorage["auth"]).userId);
            }
        }
    }, []);

    function subscribe()
    {
        //console.log(userId);

        axios.get(`http://localhost:3000/api/activity/${activityId}`)
        .then((res) => {
            //console.log(res.data.activity.participants_id);
            let act = res.data.activity;
            //console.log(act);

            if(act.limit_people)
            {
                if(act.limit_people != -1)      //-1 = Illimité
                {
                    if(act.participants_id.length >= act.limit_people)
                    {
                        alert("Limite de participants atteinte :(");
                        return;
                    }
                }
            }

            if(act.participants_id.indexOf(userId) != -1)
            {
                alert("Vous êtes déjà inscrit à cette activité");
                return;
            }

            if(act.date_debut)
            {
                /*console.log(Date.now());
                console.log(new Date(act.date_debut).getTime());*/

                const delay = new Date(act.date_debut).getTime() - Date.now();

                if(delay <= 0)
                {
                    alert("Cet événement est passé :(");
                    return;
                }
                //console.log(delay);
            }

            act.participants_id.push(userId);       //Inscription

            axios.post(`http://localhost:3000/api/activity/${activityId}`, act)     //UPDATE
            .then((res) => {
                //console.log(res);
                if(res.status == 200)
                {
                    alert("Bienvenue :)");
                    router.push("/");
                }
                else
                {
                    alert("Une erreur interne s'est produite :(");
                }
            });
        });
    }
    
    return(
        <div>
            <button onClick={subscribe}>
                M'inscrire à cette activité
            </button>
        </div>
    )
}