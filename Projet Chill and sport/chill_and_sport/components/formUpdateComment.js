import { useState } from "react";
import axios from "axios";

const FormUpdateComment = ({author, id, title, content}) => {

    const [newTitle, setNewTitle] = useState(title);
    const [newContent, setNewContent] = useState(content);

    function submit() {
        //console.log(newTitle, newContent);

        const body = {
            title: newTitle,
            content: newContent
        };

        axios.post(`/api/comment/${id}?author=${author}`, body)
        .then((res) => {
            //console.log(res);
        });
    }

    return (
        <div>
            <div className="font-bold">Modifier mon commentaire</div>
                <div className="flex flex-wrap mb-0 bg-white justify-center pt-2 pb-2 -pl-2 -pr-2 rounded-xl">
                    <div className="">
                        <div className="">Titre :</div>
                        <input className="rounded-xl pl-2 bg-gray-200" type="text" value={newTitle} onChange={(e) => { setNewTitle(e.target.value) }} />
                    </div>
                <div className="">
                <div className="ml-12">Message :</div>
                    <textarea className="ml-12 pl-2 pr-24 bg-gray-200 rounded-xl" value={newContent} onChange={(e) => { setNewContent(e.target.value) }} />
                    <input className="bg-white text-gray-700 ml-12 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" type="submit" onClick={submit} />
                </div>
            </div>
        </div>
    );
}

export default FormUpdateComment;