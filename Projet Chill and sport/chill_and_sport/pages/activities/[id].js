import React from "react";
import { useRouter } from "next/router";
import FormComment from "../../components/FormComment";
import Navbar from "../../components/navBar";
import ActivityDetailCard from "../../components/activityDetailCard";
import CommentActivity from "../../components/commentActivity";
import Footer from "../../components/footer";
import { useState } from "react";



export default function activity({ result })
{
    const [isConnected, setIsConnected] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isOrganizer, setIsOrganizer] = useState(false);

    const router = useRouter();

    return(
        <div className="bg-gradient-to-r from-gray-50 to-omblue">
            <div className=""><Navbar /></div>
            <div className="">
                <div className="flex justify-center"><ActivityDetailCard cardId={router.query.id} /></div>
                <div className="flex justify-center"><FormComment comId={router.query.id} /></div>
                <div className="flex justify-center mb-12"><CommentActivity result={result} /></div>
            </div>
            <div className=""><Footer/></div>
        </div>
    )
}

export async function getServerSideProps(context)
{
    const { id } = context.query;
    // console.log(id);
    const comments = await fetch(
        `http://localhost:3000/api/activity/comment/${id}`
    ).then((response) => response.json());

    return {
        props: {
            result: comments.comment,

        }
    }
}