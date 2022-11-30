
import Searchbar from "./searchBar.js";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from "next/link";

export default function Navbar() {

   const [isConnected, setIsConnected] = useState(false);
   const [username, setUsername] = useState("");

   const router = useRouter();

   useEffect(() => {
      if (window.localStorage.getItem("auth"))
      {
         setIsConnected(true);
         const id = JSON.parse(window.localStorage.getItem("auth")).userId;
         axios.get(`http://localhost:3000/api/user/${id}`).then((res) =>
         {
            setUsername(res.data.user.username);
         });
      }
      else
      {
         setIsConnected(false);
      }
   }, []);

   function redirectLogin()
   {
      router.push("/login");
   }

   return (
      <div className='-mb-3'>
         <div className='bg-gradient-to-r from-gray-50 to-omblue'>

            <nav id="header" className=" w-full z-30 top-10 pb-5 bg-gradient-to-r from-gray-50 to-omblue shadow-lg border-b-8 mt-0">
               <div className="w-full flex items-center justify-between mt-0 px-6 py-2">


                  <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                     <nav>
                        <ul className="md:flex items-center justify-between text-base text-gray-600 pt-4 md:pt-0">
                           <li>
                              <Link href="/">
                                 <a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">Accueil</a>
                              </Link>
                           </li>
                           {
                              isConnected &&

                              <li>
                                 <Link href="/createActivity">
                                    <a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">Créer mon évènement</a>
                                 </Link>
                              </li>
                           }
                           <li>
                              <Link href="/a_venir">
                                 <a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">Evènements à venir</a>
                              </Link>
                           </li>
                           <li>
                              <Link href="/list_activities">
                                 <a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">Tous les évènements</a>
                              </Link>
                           </li>
                        </ul>
                     </nav>
                  </div>

                  <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
                     <div className="auth flex items-center w-full md:w-full">
                        {
                           !isConnected &&

                           <button onClick={redirectLogin} className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">Se connecter</button>
                        }
                        {
                           isConnected &&
                           <div className='flex'>
                              <p><>Bienvenue {username} !</></p>

                              <Link href="/profil">
                                 <button className='bg-gray-700 rounded-xl hover:bg-blue-600 ml-2 pl-2 pr-4 font-bold text-white shadow-lg flex'><svg className="text-gray-50 mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 7.5C7.75 5.15279 9.65279 3.25 12 3.25C14.3472 3.25 16.25 5.15279 16.25 7.5C16.25 9.84721 14.3472 11.75 12 11.75C9.65279 11.75 7.75 9.84721 7.75 7.5ZM12 4.75C10.4812 4.75 9.25 5.98122 9.25 7.5C9.25 9.01878 10.4812 10.25 12 10.25C13.5188 10.25 14.75 9.01878 14.75 7.5C14.75 5.98122 13.5188 4.75 12 4.75Z" fill="#ffffff" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.75C6.75736 14.75 5.75 15.7574 5.75 17V18.1883C5.75 18.2064 5.76311 18.2218 5.78097 18.2247C9.89972 18.8972 14.1003 18.8972 18.219 18.2247C18.2369 18.2218 18.25 18.2064 18.25 18.1883V17C18.25 15.7574 17.2426 14.75 16 14.75H15.6591C15.6328 14.75 15.6066 14.7542 15.5815 14.7623L14.716 15.045C12.9512 15.6212 11.0488 15.6212 9.28398 15.045L8.41847 14.7623C8.39342 14.7542 8.36722 14.75 8.34087 14.75H8ZM4.25 17C4.25 14.9289 5.92893 13.25 8 13.25H8.34087C8.52536 13.25 8.70869 13.2792 8.88407 13.3364L9.74959 13.6191C11.2119 14.0965 12.7881 14.0965 14.2504 13.6191L15.1159 13.3364C15.2913 13.2792 15.4746 13.25 15.6591 13.25H16C18.0711 13.25 19.75 14.9289 19.75 17V18.1883C19.75 18.9415 19.2041 19.5837 18.4607 19.7051C14.1819 20.4037 9.8181 20.4037 5.53927 19.7051C4.79588 19.5837 4.25 18.9415 4.25 18.1883V17Z" fill="#ffffff" />
                                 </svg>
                                    Mon profil</button>
                              </Link>
                           </div>
                        }
                     </div>
                  </div>
               </div>
            </nav>
            <Searchbar />
         </div>
      </div>
   )
}