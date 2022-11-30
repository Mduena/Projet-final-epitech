import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Cookies from "js-cookie";
import axios from 'axios';
import Navbarprofil from "../components/navBarprofil";
import Link from 'next/link';

export default function register()
{
    const router = useRouter();

    const [imagePublicId, setImagePublicId] = useState("");

    const [userId, setUserId] = useState("");

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [photo, setPhoto] = useState(null);

    async function update()
    {
        //console.log(photo);

        if(username == "")
        {
            alert("Merci d'indiquer un nom d'utilisateur");
        }

        else
        if(email == "")
        {
            alert("Merci d'indiquer une adresse mail");
        }

        else
        if(password == "")
        {
            alert("Merci d'entrer un mot de passe");
        }

        else
        if(password != confirmedPassword)
        {
            alert("Erreur de confirmation du mot de passe");
        }

        else
        {
            const res = axios.post(`/api/user/${userId}`,
            {
                username: username,
                email: email,
                password: password,
                birthday: birthday,
                location: location,
                phone: phone,
                image: photo
            });

            //console.log(userId);

            if(res.status == 200)
            {
                //router.push("/profil");
            }
        }
    }

    async function getUser()
    {
        //const res = await axios.get(`/api/user/${userId}`);

        
    }
    
    useEffect(() => {
        if(window.localStorage["auth"])
        {
            setUserId(JSON.parse(window.localStorage["auth"]).userId);

           // getUser();
        }
      }, []);
    
    return(
            <div class="bg-grey-lighter min-h-screen flex flex-col">
     <Navbarprofil /><br></br> 
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <br></br> 
                <img
                src="../assets/avatar2.png"
                class="w-full w-20"
                alt="Sample image"
              ></img>
            <br></br> 
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">



                    <h1 class="mb-8 text-3xl text-center">Profil</h1>
                    
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        placeholder="Pseudo"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    
                    <input 
                        type="date"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        placeholder="Date d'anniversaire"
                        onChange={(e) => setBirthday(e.target.value)} />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="location"
                        placeholder="Localisation"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)} />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="phone"
                        placeholder="Téléphone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Mot de passe"
                        onChange={(e) => setPassword(e.target.value)} />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirmer le mot de passe"
                        onChange={(e) => setConfirmedPassword(e.target.value)} />

                    <div class="text-center lg:text-left">
                    <button type="button" class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase 
                    rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none 
                    focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out align-center" onClick={update}>
                        
                    <Link href="/profil">
                        <a >Enregistrer</a>
                    </Link>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )   
}



