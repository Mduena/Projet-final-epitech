import Navbarprofil from "../components/navBarprofil"
import {
  CogIcon
} from "@heroicons/react/outline"
import { CheckIcon } from '@heroicons/react/solid'
import axios from "axios"
import { useEffect, useState } from "react"

// import Footer from '../components/footer'
// import logout from "../components/logout";


const profil = () => {

const [isConnected, setIsConnected] = useState(false);
const [username, setUsername] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      // const data = await axios.get('https://api.unsplash.com/search/photos?pages=1&query=office&clients_id=${process.env.NEXT_PUBLIC_client_id}')
      // console.log('data', data);
      const user_id = JSON.parse(window.localStorage["auth"]).userId;
      const rep = await axios.get(`/api/user/${user_id}`);
      console.log (rep);
      setUsername (rep.data.user.username);
    }
    fetchData()

  }, [])
  return (
    <div profil>
      <Navbarprofil />
      <div className="max-w-6xl mx-5 p-10 xl:mx-auto">
        <div className="grid grid-cols-4 gap-4"
        >
          <div className="avatar-justify-center">
            <div className="rounded-full w-20">
              <img src="../profil.png" />
            </div>
          </div>
          <div className="col-span-2">
            <span className="text-gray-700 text-2xl mr-4">{username}</span>

            
            
            <div className="cursor-pointer inline text-sm text-gray-700 font-semibold p-1 
            px-2 border border-gray-200 rounded mr-4">Modifier le profil <CogIcon className="cursor-pointer h-6 inline f-1" />
            </div>

            <div className="cursor-pointer inline text-sm text-gray-700 font-semibold p-1 
            px-2 border border-gray-200 rounded mr-4">Suivre <CheckIcon className="cursor-pointer h-6 inline f-1" />
            </div>

            <div className="mt-4 flex">
              <div><span className="font-semibold">10</span> Posts</div>
              <div className="ml-4"><span className="font-semibold">80</span> Followers</div>
              <div className="ml-4"><span className="font-semibold">95</span> Following</div>
            </div>

            <div className="pt-3">
              <span className="text-lg font-semibold text-gray-700">Next.js MongoDB</span>
            </div>
            <div className="pt-3">
              <p className="text-base mr-2">#blogger #digital
                #sports #Chill</p>
              <a className="text-base text-blue-700 mr-2" href="https://www.decathlon.fr/">https://www.decathlon.fr/</a>
            </div>
            <hr className="border-gray-500 mt-6" />
            <div className="flex justify-center gap-10 -mt-[0.5px]">

            <body class="min-h-screen flex items-center bg-gradient-to-br from-purple-200 to-indigo-400">
                <div class="max-w-3xl mx-auto px-8 sm:px-0">
                    <div class="sm:w-7/12 sm:mx-auto">

                    <div
                role="tablist"
                aria-label="tabs"
                class="relative w-max mx-auto h-12 grid grid-cols-3 items-center px-[3px] 
                rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition">
            
            <div class="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-white shadow-md">
            <button
                role="tab"
                aria-selected="true"
                aria-control="panel-1"
                id="tab-1"
                tabindex="0"
                class="relative block h-10 px-6 tab rounded-full"            
            >
            <span class="text-gray-800">First tab</span>
            </button> 

            <button
                role="tab"
                aria-selected="false"
                aria-control="panel-2"
                id="tab-2"
                tabindex="1"
                class="relative block h-10 px-6 tab rounded-full"            
            >
            <span class="text-gray-800">Second tab</span>
            </button>

            <button
                role="tab"
                aria-selected="false"
                aria-control="panel-3"
                id="tab-3"
                tabindex="-1"
                class="relative block h-10 px-6 tab rounded-full"            
            >
            <span class="text-gray-800">Third tab</span>
            </button>
            </div>
            <div class="mt-6 relative rounded-3xl bg-purple-50">
                <div
                role="tabpanel"
                id="panel-1"
                class="tab-panel p-6 transition duration-300">
                    
                    <h2 class="text-xl font-semibold text-gray-800">First tab panel</h2>
                <p class="mt-4 text-gray-600">Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div
                role="tabpanel"
                id="panel-2"
                class="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300">
                    <h2 class="text-xl font-semibold text-gray-800">Second tab panel</h2>
                <p class="mt-4 text-gray-600">Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div
                role="tabpanel"
                id="panel-3"
                class="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300">
                    <h2 class="text-xl font-semibold text-gray-800">Third tab panel</h2>
                <p class="mt-4 text-gray-600">Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>  


            </div>
                    </div>
                </div>
                <script type="module" src="./main.js"></script>
            </body>


            


            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>

  )
}

export default profil;

