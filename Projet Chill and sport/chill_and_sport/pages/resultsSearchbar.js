import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useStyleRegistry } from 'styled-jsx';
import Navbar from '../components/navBar';
import Link from "next/link";
import Footer from '../components/footer';

export default function ResultsSearch()
{
    const router = useRouter();
    
    const [results, setResults] = useState([]);

    async function getResults(wordsArray)
    {
        //console.log(wordsArray);

        let resArray = [];

        for(const w of wordsArray)
        {
            //console.log("word=", w);

            let res = await axios.get(`http://localhost:3000/api/user/getSomeUsers?word=${w}`);

           console.log("user =", res);

            if(res != [])
            {
                res.data.usersFounds.map((r) => {
                    if(r.username != undefined)
                        resArray.push({id: r._id, name: r.username, phone: r.phone, photo: r.photo, type: "user"});
                    if(r.name != undefined)
                        resArray.push({id: r._id, name: r.name, phone: r.phone, photo: r.photo, type: "user"});
                   // console.log(r);
                })
            }

            ///////////////////////////////////////////////////////////////////////

            res = await axios.get(`http://localhost:3000/api/activity/getSomeActivities?word=${w}`);

            if(res != [])
            {
                res.data.activitiesFounds.map((r) => {
                    if(r.title != undefined)
                        resArray.push({id: r._id, title: r.title, description: r.description, photo: r.photo, type: "activity"});
                    //console.log(r);
                    
                })
            }
        }

        setResults(resArray);
    }
    
    useEffect(() => {
        let wordsArray = [];

        if(router.query.word != undefined)
            wordsArray = router.query.word.split(" ");

        getResults(wordsArray);
    }, [router.query.word]);
    
    /*console.log(results[0]);
    console.log(results[1]);*/

    return(
        <div>
            <Navbar />
            <br></br>
        <div>
            {
                results.length != 0 &&  
                
                results.map((r) => {
                    //console.log(act);
                    let date = "none", dateStr, heure;

                    if(r.date_debut)
                    
                    {
                        //console.log(r.date_debut)
                        date = r.date_debut.split("T");
                        dateStr = date[0].split("-");
                        heure = date[1].split(".");
                        //console.log(dateStr);
                    }


                /* results.map((r) => { */
                    if(r.type == "user")
                    {
                        return(
                            <>
                            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">



                                <Link href={`/users/${r.id}`}>
                                    <a>


                                        <div className="p-10 mb-10 bg-gray-100 rounded-2xl mt-5 mb-10 ">
                                            <div class="grid grid-rows-3 grid-flow-col gap-4 ">

                                               <img src={r.photo} alt={r.title} className="row-span-3 h-40 w-60 object-cover object-center group-hover:opacity-75 rounded" />

                                                <h3 className="col-span-2 text-2xl font-bold  bg-white w-40  p-2 text-sm  rounded-lg">{r.name}</h3>

                                                <p className=" row-span-2 col-span-2 text-xl mt-1 text-lg font-medium text-gray-900">tel: {r.phone}</p>
                                            </div>
                                                 
                                        </div>
                                        

                                    </a>
                                </Link>

                            </div>
                            </>
                        )
                    }
                    else
                    if(r.type == "activity")
                    {
                        console.log('====================================');
                        console.log(r);
                        console.log('====================================');
                        return(

                        <>
{/*                                 <Link href={`/activities/${r.id}`}>
                                    <a>
                                        <h1>{r.title}</h1>
                                        <p>{r.description}</p>
                                        <img src={r.photo} alt={r.photo} />
                                        <br></br>
                                    </a>
                                </Link> */}

                            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">


                                <Link href={`/activities/${r.id}`}>
                                    <a>


                                        <div className="p-10 mb-10 bg-gray-100 rounded-2xl mt-10 mb-10 ">
                                            <div class="grid grid-rows-3 grid-flow-col gap-4 ">

                                               <img src={r.photo} alt={r.title} className="row-span-3 h-40 w-60 object-cover object-center group-hover:opacity-75 rounded" />
                                                
                                                <h3 className="col-span-2 text-2xl font-bold  bg-white w-40  p-2 text-sm  rounded-lg">{r.title}</h3>

                                                <p className=" row-span-2 col-span-2 text-xl mt-1 text-lg font-medium text-gray-900">{r.description} <br></br>date de la sortie: {dateStr} <br></br>
                                               {/* date de la sortie: {dateStr[2]}/{dateStr[1]}/{dateStr[0]} à {heure[0]} */} </p>
                                            </div>
                                                 
                                        </div>
                                        

                                    </a>
                                </Link>

                            </div>
                        </>
                            
                        )
                    }
                })
            }

            {
                results.length == 0 &&               
                <div>Aucun résultat trouvé :(</div>
            }
        </div>


            <Footer/>
        </div>
    )
}