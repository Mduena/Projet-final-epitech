import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import UpdateComment from "./UpdateComment.js"
import RemoveComment from "./RemoveComment.js";
import FormUpdateComment from "./formUpdateComment.js";
import axios from "axios";

const CommentActivity = ({ result }) => {
    //console.log(result);

    const [user, setUser] = useState({});
    const [showForm, setShowForm] = useState(false);
    const [commentToUpdate, setCommentToUpdate] = useState({});

    async function getUser() {
        if (window.localStorage["auth"]) {
            const userId = await JSON.parse(window.localStorage["auth"]).userId;
            const currentUser = await axios.get(`/api/user/${userId}`);

            setUser({
                id: userId,
                is_admin: currentUser.data.user.is_admin
            });
        }
    }

    function setCom(com) {
        setShowForm(!showForm);

        //console.log(com);

        setCommentToUpdate({
            id: com._id,
            title: com.title,
            content: com.content
        });
    }

    useEffect(() => {
        getUser();
    }, []);

    //console.log(user);

    const router = useRouter();
    return (<>

        <div className="">

            {result.map((com, index) => {

                let date = "none", dateStr, heure;

                if (com.created_at) {
                    date = com.created_at.split("T");
                    dateStr = date[0].split("-");
                    heure = date[1].split(".");
                }

                //console.log(user.id, com.user_id, com.title);

                return (
                    // eslint-disable-next-line react/jsx-key
                    <div class="box-1 -mt-0 mb-0" >
                        <div className="flex mt-0 mx-8 mb-0 max-w-lg">
                            <div className="w-full max-w-lg bg-white  px-4 pt-2">
                                <div className="flex flex-wrap -mx-3 mb-4">
                                    <div key={com._id}>

                                        <p className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>{com.author}
                                        </p>
                                        {
                                            date == "none" &&

                                            <p className="font-bold ml-8">{com.title}</p>
                                        }
                                        <div className="bg-gray-200 rounded-xl p-3 ml-8 mr-4">
                                            <p className="font-bold ml-8">{com.title}</p>
                                            {
                                                date == "none" &&

                                                <p className="font-bold ml-8">{com.title}</p>
                                            }
                                            <div className="bg-gray-200 rounded-xl p-3 ml-8 mr-4">
                                                <p>{com.content}</p>
                                                {
                                                    date != "none" &&

                                                    <p className="text-xs">Le {dateStr[2]}/{dateStr[1]}/{dateStr[0]} à {heure[0]}</p>
                                                }
                                            </div>
                                            {
                                                (user.id && user.is_admin == 1 || user.id && user.id == com.user_id) &&

                                                <div className="flex gap-2 justify-end">
                                                   
                                                <button onClick={() => setCom(com)}>
                                                        <UpdateComment com_id={com._id} activity_id={com.activity_id} />
                                                    </button>
                                                    <RemoveComment com_id={com._id} activity_id={com.activity_id} />
                                                

                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )

            })}

        {
            showForm &&

            <FormUpdateComment author={user.id} id={commentToUpdate.id} title={commentToUpdate.title} content={commentToUpdate.content} />
        }

    </div>
    </>
    )
}


export default CommentActivity;

export async function getServerSideProps(context) {

    const { id } = context.query;
    //console.log(id);
    const comments = await fetch(
        `http://localhost:3000/api/activity/comment/${id}`
    ).then((response) => response.json());
    // console.log(comments)
    return {
        props: {
            result: comments.comment,

        },
    };
}

