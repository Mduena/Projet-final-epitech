import { useRouter } from "next/router";
import React from "react"
import SubscribeActivity from "./subscribeActivity";
import UnsubscribeActivity from "./unsubscribeActivity";
import DeleteActivity from "./deleteActivity";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const ActivityDetailCard = ({ cardId }) => {

    // console.log(cardId);
    const [isConnected, setIsConnected] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isOrganizer, setIsOrganizer] = useState(false);
    const [organizer, setOrganizer] = useState({});

    const [activity, setActivity] = useState({});

    async function getActivity()
    {
        const res = await axios.get(`/api/activity/${cardId}`);
        //console.log(cardId);

        setActivity(res.data.activity);
        //console.log(res.data.activity);

        if(window.localStorage["auth"])
        {
            setIsConnected(true);

            const userId = JSON.parse(window.localStorage["auth"]).userId;

            axios.get(`http://localhost:3000/api/activity/${router.query.id}`).then((res) =>
            {
                //console.log(res.data.activity);
                if(res.data.activity.participants_id)
                {
                    if(res.data.activity.participants_id.indexOf(userId) != -1)
                    {
                        setIsSubscribed(true);
                    }
                }
                else
                {
                    setIsSubscribed(false);
                }

                if(res.data.activity.organisater_id)
                {
                    if(res.data.activity.organisater_id == userId)
                    {
                        setIsOrganizer(true);
                    }
                }

                axios.get(`/api/user/${res.data.activity.organisater_id}`).then((res2) => {
                    //console.log(res2.data.user);

                    setOrganizer({
                        name: res2.data.user.username,
                        phone: res2.data.user.phone
                    });
                })
            });
        }
    }

    useEffect(() =>
    {
        getActivity();
    }, []);


    const router = useRouter();
    return (<>

<div class="box-1 mt-12 mb-0 rouded-xl" >
            <div className=" rounded-lg overflow-hidden m-0  ">
                <img
                    src={activity.photo}
                    alt="image"
                    className="w-full"
                />
                <div className="p-8 sm:p-9 md:p-9 xl:p-9 text-center ">
                    <h3>
                        <a
                            href="chill"
                            className="
                       font-semibold
                       text-dark text-xl
                       sm:text-[22px]
                       md:text-[22px]
                       lg:text-[22px]
                       xl:text-[22px]
                       2xl:text-[22px]
                       mb-4
                       block
                       hover:text-primary
                       -mt-5
                       "
                        >
                            {activity.title}
                        </a>
                    </h3>

                    {
                        isSubscribed &&

                        <>
                            <h4>Nom de l'organisateur : {organizer.name}</h4>
                            <h4>Son tél : {organizer.phone}</h4>
                        </>
                    }

                    {
                        (activity.participants_id && activity.limit_people) &&
                        
                        <>
                            <h4>{activity.participants_id.length} inscrit(s) sur {activity.limit_people}</h4><br></br>
                        </>
                    }

                    <p className="text-base text-body-color leading-relaxed mb-7 ">
                        {activity.description}
                    </p>
                    {
                        !isSubscribed &&
                        
                        <a
                            href="javascript:void(0)"
                            className="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full bg-omblue font-medium hover:border-primary hover:bg-blue ">
                            <SubscribeActivity activityId={router.query.id} />
                        </a>
                    }
                    
                    {
                        isSubscribed &&
                        
                        <a
                            href="javascript:void(0)"
                            className="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full bg-omblue font-medium hover:border-primary hover:bg-blue ">
                            <UnsubscribeActivity activityId={router.query.id} />
                        </a>
                    }

                    {
                        isOrganizer &&
                        
                        <a
                            href="javascript:void(0)"
                            className="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full bg-omblue font-medium hover:border-primary hover:bg-blue ">
                            <DeleteActivity activityId={router.query.id} />
                        </a>
                    }
                </div>
            </div>
        </div>

    </>
    )
}

export default ActivityDetailCard