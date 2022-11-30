

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from 'next/link'
import Navbar from "../components/navBar";
import Footer from "../components/footer";

export default function ListActivities(props) {
    const [activities, setActivites] = useState([]);
    const [begin, setBegin] = useState(0);
    const [userId, setUserId] = useState("");
    const router = useRouter();
    const maxItems = 5;

    async function pagination(value)
    {
        if(value < 0)
        {
            return;
        }

        const toDay = new Date().toISOString();
        
        axios.get(`/api/activity/getCurrentActivities?begin=${value}&end=${value+maxItems}&date_debut=${toDay}`).then((res) => {
            //console.log(res.data);
            setActivites(res.data.activity);
            //pagination(value);
            setBegin(value);
        });
    }

    useEffect(() => {
        pagination(begin);

        if(window.localStorage["auth"])
        {
            setUserId(JSON.parse(window.localStorage["auth"]).userId);
        }
        else
        {
            setUserId("");
        }
    }, []);

    return (
        <div className="bg-gradient-to-r from-gray-50 to-omblue">
            <Navbar />
            <div className=" mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <ul className="md:flex items-center justify-between text-base text-gray-600 pt-4 md:pt-0 border-4 border-indigo-600 rounded-xl">
                    <li><a className="inline-block no-underline hover:text-black font-medium text-2xl py-2 px-4 lg:-ml-2" href="list_activities">Tous les évènements</a></li>
                    <li><a className="inline-block no-underline hover:text-black font-medium text-2xl py-2 px-4 lg:-ml-2" href="chill">Sorties détentes</a></li>
                    <li><a className="inline-block no-underline hover:text-black font-medium text-2xl py-2 px-4 lg:-ml-2" href="sport">Sorties sportives</a></li>
                    <li><a className="inline-block no-underline hover:text-black font-medium text-2xl py-2 px-4 lg:-ml-2" href="xtreme">Sorties X'trèmes</a></li>
                </ul>

                <br></br>
                <br></br>

                <div className="">
                    {
                            activities.map((act) => {
                                //console.log(act);
                                let date = "none", dateStr, heure;
    
                                if(act.date_debut)
                                {
                                    //console.log(act.date_debut)
                                    date = act.date_debut.split("T");
                                    dateStr = date[0].split("-");
                                    heure = date[1].split(".");
                                    //console.log(dateStr);
                                }

                                let subscribed = false;

                                if(userId != "")
                                {
                                    if(act.participants_id.indexOf(userId) != -1)
                                    {
                                        subscribed = true;
                                    }
                                }

                            return (
                                // eslint-disable-next-line react/jsx-key
                                <Link href={`/activities/${act._id}`}>
                                    <a>
                                    <div className="p-10 mb-10 bg-gray-100 rounded-2xl mt-10 mb-10 ">
                                            <div class="grid grid-rows-3 grid-flow-col gap-4 ">

                                               <img src={act.photo} alt={act.title} className="row-span-3 h-40 w-60 object-cover object-center group-hover:opacity-75 rounded" />

                                                <h1 className="col-span-2 text-2xl font-bold  bg-white w-40  p-2 text-sm  rounded-lg">{act.title} 
                                                
                                                {
                                                    subscribed &&

                                                    <div className="bg-green-500 rounded-xl px-2 max-h-5">
                                                        
                                                        Inscrit(s) : {act.participants_id.length} sur {act.limit_people}
                                                    </div>
                                               }
                                                </h1>
                                                <p className=" row-span-2 col-span-2 text-xl mt-1 text-lg font-medium text-gray-900">{act.description}</p>
                                                {
                                                    dateStr &&
                                                    
                                                    <>Date de la sortie: {dateStr[2]}/{dateStr[1]}/{dateStr[0]} à {heure[0]}</>
                                                }
                                               
                                            </div>                                                
                                        </div>
                                        

                                    </a>
                                </Link>
                            )
                        })
                    }
                </div>

                {/* pagination */}

                <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                    <div class="flex flex-1 justify-between sm:hidden">
                        <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                        <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                    </div>
                    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">

                        <div>
                            <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                <button class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20" onClick={() => pagination(begin-maxItems)}>
                                    <span class="sr-only">Previous</span>

                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <button aria-current="page" class="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20" onClick={() => pagination(0)}>1</button>
                                <button class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20" onClick={() => pagination(maxItems)}>2</button>
                                <button class="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex" onClick={() => pagination(2*maxItems)}>3</button>
                                <span class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>
                                <button class="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex" onClick={() => pagination(7*maxItems)}>8</button>
                                <button class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20" onClick={() => pagination(8*maxItems)}>9</button>
                                <button class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20" onClick={() => pagination(9*maxItems)}>10</button>
                                <button class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20" onClick={() => pagination(begin+maxItems)}>
                                    <span class="sr-only">Next</span>

                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}