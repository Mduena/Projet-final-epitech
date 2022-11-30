import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Logout from '../components/logout.js';

export default function Navbarprofil() {

   const [isConnected, setIsConnected] = useState(false);
   const [username, setUsername] = useState("");

   const router = useRouter();

   useEffect(() => {
      if (window.localStorage.getItem("auth")) {
         setIsConnected(true);
         const id = JSON.parse(window.localStorage.getItem("auth")).userId;
         axios.get(`http://localhost:3000/api/user/${id}`).then((res) => {
            setUsername(res.data.user.username);
         });
      }
      else {
         setIsConnected(false);
      }
   }, []);

   function redirectLogin() {
      router.push("/login");
   }

return (
<div>    
    <nav id="header" className="w-full z-30 top-10 py-1 bg-white shadow-lg border-b mt-0">
    <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
       <label for="menu-toggle" className="cursor-pointer md:hidden block">
    
          <svg class="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
             <title>menu</title>
             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
       </label>
       <input className="hidden" type="checkbox" id="menu-toggle"></input>
       
       <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-600 pt-4 md:pt-0">
            <Image src="/logo5.png" alt="logosite" width={100} height={100} />
      
                <li><a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="/">Accueil</a></li>
                {/* <li><a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Le concept</a></li> */}
                {/* {
                  isConnected && 

                  <li><a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Mon profil</a></li>
                } */}
                {
                  isConnected && 

                  <li><a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#"><Logout /></a></li>
                }
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
               
               <div className='inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2'>Bienvenue {username} !</div>
             }
          </div>
       </div>
    </div>
 </nav>
</div>
)


}