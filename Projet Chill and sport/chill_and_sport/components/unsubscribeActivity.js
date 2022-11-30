import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from 'axios';

export default function UnsubscribeActivity({activityId})
{
    const [userId, setUserId] = useState("");

    const router = useRouter();

    useEffect(() => {
        if(window.localStorage["auth"])
        {
            setUserId(JSON.parse(window.localStorage["auth"]).userId);
        }
    }, []);

    function unsubscribe()
    {
        axios.get(`http://localhost:3000/api/activity/${activityId}`)
        .then((res) => {
            //console.log(res);

            const act = res.data.activity;

            //console.log(act);

            const part = act.participants_id;

            //console.log(part);

            if(act.date_debut)
            {
                /*console.log(Date.now());
                console.log(new Date(act.date_debut).getTime());*/

                const delay = (new Date(act.date_debut).getTime() - Date.now())/( 1000 * 3600);

                if(delay <= 24)
                {
                    alert("Il est trop tard pour vous désinscrire :(");
                    return;
                }
                //console.log(delay);
            }

            if(part.indexOf(userId) != -1)
            {
                const index = part.indexOf(userId);
                part.splice(index, 1);

                //console.log(part);

                axios.post(`http://localhost:3000/api/activity/${activityId}`, act)     //UPDATE
                .then((res) => {
                    //console.log(res);
                    if(res.status == 200)
                    {
                        alert("Revenez-nous vite :)");
                        router.push("/");
                    }
                    else
                    {
                        alert("Une erreur interne s'est produite :(");
                    }
                });

            }
        });
    }

    return(
        <div>
            <button onClick={unsubscribe}>
                Se désinscrire
            </button>
        </div>
    )
}