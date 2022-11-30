import axios from "axios";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";




const FormComment = (comId) => {
   //console.log(comId);
   const router = useRouter()

   const url = 'http://localhost:3000/api/comment/add_comment'

   //console.log(comId);
   const activity_id = comId.comId

   const [title, setTitle] = useState("")
   const [content, setContent] = useState("")
   const [userId, setUserid] = useState("")
   //const [author, setAuthor] = useState("")

   useEffect(() => {
      if (!localStorage.getItem("auth")) {
         return;
      }

      userId = JSON.parse(localStorage.getItem("auth")).userId
      setUserid(userId);


   }, [])


   async function onSubmit() {

      if (content == "") {
         alert("Veuillez remplir le champ s'il vous plaît")
      }
      else {
         const user = await axios.get(`/api/user/${userId}`);

         const body = {
            title: title,
            author: user.data.user.username ?? user.data.user.name,
            content: content,
            user_id: userId,
            activity_id: activity_id
         }
         // console.log(body);
         const resp = axios.post(url, body).then((res) => {
            if (res.status == 200) {
               router.push(`/activities/${activity_id}`);

               setTitle("");
               setContent("");
               //setAuthor("");
            }
            else {
               alert("Une erreur interne s'est produite");
            }
         })

      }
   }

   return (<>
      <div class="box-1 -mt-0 mb-0" >
         <div className="flex  items-center justify-center  mt-0 mx-32 mb-0 max-w-lg ">
            <div className="w-full max-w-xl bg-white  px-4 pt-2">
               <div className="flex flex-wrap -mx-3 mb-6">
                  <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Ajouter un commentaire</h2>

                  <div className="w-full md:w-full px-3 mb-2 mt-2">
                     <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                     </svg>
                     </h2>
                     <input className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-5  py-2 px-3 font-small placeholder-gray-700 focus:outline-none focus:bg-grey" name="title" placeholder='Titre du commentaire' value={title} onChange={(e) => setTitle(e.target.value)} />
                     <textarea class=" bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-small placeholder-gray-700 focus:outline-none focus:bg-grey" name="content" placeholder='...' value={content} required onChange={(e) => setContent(e.target.value)}></textarea>
                  </div>
                  <div className="w-full md:w-full flex items-start md:w-full px-3">
                     <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">

                     </div>
                     <div className="-mr-1">
                        <button onClick={onSubmit} type='submit' className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post Comment'  >Poster</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </>

   )

}
export default FormComment;
