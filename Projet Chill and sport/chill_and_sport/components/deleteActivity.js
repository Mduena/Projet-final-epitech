import axios from "axios";
import { useEffect, useState } from "react"
import { useRouter } from "next/router";

export default function DeleteActivity({activityId})
{
    //console.log(activityId);

    const [isConnected, setIsConnected] = useState(false);
    const [userId, setUserId] = useState(false);

    const router = useRouter();

    useEffect(() => {
        if(window.localStorage["auth"])
        {
            if(JSON.parse(window.localStorage["auth"]).userId)
            {
                setIsConnected(true);
                setUserId(JSON.parse(window.localStorage["auth"]).userId);
            }
        }
    }, []);

    function Delete()
    {
        //console.log(userId);

        axios.delete(`http://localhost:3000/api/activity/${activityId}`)
        .then((res) => {
            //console.log(res.data.activity.participants_id);
            if(res.status == 200)
                {
                    alert("Supprimée :)");
                    router.push("/");
                }
                else
                {
                    alert("Une erreur interne s'est produite :(");
                }

            });
        
    }
    
    return(
        <div>
            {
                isConnected &&
                
                <button onClick={Delete}>
                    Supprimer cette activité
                </button>
            }
        </div>
    )
}