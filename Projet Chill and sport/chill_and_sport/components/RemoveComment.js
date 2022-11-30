import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

const RemoveComment = ({ com_id, activity_id }) => {
    const router = useRouter();

    async function deleteComment() {


    const com = await axios(`/api/comment/${com_id}`);


    const author = com.data.comment.user_id;
      
   fetch(`/api/comment/${com_id}?author=${author}`,{method:'DELETE'})
   .then(res => console.log("SUCCESS:: "+ res.json()))
   .catch(e => console.log("ERROR:" + e))
         router.push(`/activities/${activity_id}`)
     }
     

    

    return (<>
        <button className="mb-2" onClick={deleteComment}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#2faee0" class="w-5 h-5" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </button>

    </>);
}

export default RemoveComment;