import Navbarprofil from "../components/navBarprofil"
import {
  CogIcon
} from "@heroicons/react/outline"
import { CheckIcon } from '@heroicons/react/solid'
import axios from "axios"
import { useEffect, useState } from "react"
// import style from '../styles'
import Footer from '../components/footer'
// import logout from "../components/logout"
import Mesevencours from "../components/mesevencours"
import Mesevenfini from "../components/mesevenfini"
import Posts from "../components/posts"
import Infoprofil from "../components/infoprofil";
import getDate from "../utils/date.js";

const profil = () => {

const [isConnected, setIsConnected] = useState(false);
const [username, setUsername] = useState("");
const [birthday, setBirthday] = useState("");
const [currentTab, setCurrentTab] = useState(undefined);
const [tab, setTab] = useState(1);

  useEffect(() => {
    const fetchData = async () => {

      // const data = await axios.get('https://api.unsplash.com/search/photos?pages=1&query=office&clients_id=${process.env.NEXT_PUBLIC_client_id}')
      // console.log('data', data);
      //console.log(window.localStorage["auth"]);
      const user_id = JSON.parse(window.localStorage["auth"]).userId;
      const rep = await axios.get(`/api/user/${user_id}`);
      //console.log (rep);
      setUsername (rep.data.user.username);

      if(rep.data.user.birthday)
      {
        const date = getDate(rep.data.user.birthday);
        //console.log(date);
        setBirthday(date.date);
      }

    }
    fetchData()
  },[])

  // const handleChange = (tab)=> {setCurrentTab(tab)}
  
  return (
    <div profil className="bg-gradient-to-r from-gray-50 to-omblue">
      <Navbarprofil />
      <div className="max-w-6xl mx-5 p-10 xl:mx-auto">
        <div className="grid grid-cols-4 gap-4"
        >
          <div className="avatar2 rounded-full w-20 ">
         
              <img src="../assets/avatar2.png" />
            </div>
          
          <div className="col-span-2">
            <span className="text-gray-700 text-2xl mr-4">{username}</span>
                        
            <div className="cursor-pointer inline text-sm text-gray-700 font-semibold p-1 
            px-2 border border-gray-200 rounded mr-4">
              <a href="/updateprofil">Modifier le profil </a><CogIcon className="cursor-pointer h-6 inline f-1" />

            </div>

            <div className="cursor-pointer inline text-sm text-gray-700 font-semibold p-1 
            px-2 border border-gray-200 rounded mr-4">Suivre <CheckIcon className="cursor-pointer h-6 inline f-1" />
            </div>

            <div>
              <br></br>
              <span className="text-gray-700 text-1xl mr-4">Né(e) le {birthday}</span>
            </div>

            <div className="mt-4 flex">
              <div><span className="font-semibold">10</span> Posts</div>
              <div className="ml-4"><span className="font-semibold">80</span> Followers</div>
              <div className="ml-4"><span className="font-semibold">95</span> Following</div>
            </div>

            <div className="pt-3">
              <span className="text-lg font-semibold text-gray-700">Fan de sports extrêmes</span>
            </div>
            <div className="pt-3">
              <p className="text-base mr-2">#blogger #digital
                #sports #Chill</p>
              {/* <a className="text-base text-blue-700 mr-2" href="https://www.decathlon.fr/">https://www.decathlon.fr/</a> */}
            </div>

            <hr className="border-gray-500 mt-6" />

            <div className="flex justify-center gap-10 -mt-[0.5px]">

              <button className="focus:border-t border-gray-900 py-4 text-sm 
          font-semibold flex gap-2 text-gray-400 focus:text-gray-600" onClick = {()=>setTab(1)}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25
          0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 
          11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 
          15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 
          2.25h.008v.008H16.5V15z" /></svg>Mes évènements en cours</button>
              

              <button className="focus:border-t border-gray-800 py-4 text-sm 
          font-semibold flex gap-2 text-gray-400 focus:text-gray-600" onClick = {()=>setTab(2)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                Mes évènements clôturés</button>

              <button className="focus:border-t border-gray-800 py-4 text-sm 
          font-semibold flex gap-2 text-gray-400 focus:text-gray-600" onClick = {()=>setTab(3)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 
          2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 
          1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                Posts</button>

            
                <br></br>

               
            </div>
          </div>
        </div>  
        {/* <h1>salpjhpiuosdfhv</h1>             */}
            {
              tab == 1 && 
              <Mesevencours/>
            
            
            }
            {
              tab == 2 && 
              <Mesevenfini/>
            
            
            }
            {
              tab == 3 && 
              <Posts/>
            
            
            }
            
      
        </div>
        <div className="mt-24">
        <Footer/> 
        </div> 
          </div>
    

  )
}

export default profil;

