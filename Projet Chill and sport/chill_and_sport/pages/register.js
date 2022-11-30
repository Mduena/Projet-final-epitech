import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Cookies from "js-cookie";
import axios from 'axios';
// import { timeStamp } from "console";

export default function register()
{
    const router = useRouter();

    const [imagePublicId, setImagePublicId] = useState("");

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState(null);
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [photo, setPhoto] = useState(null);
    const [location, setLocation] = useState("");

    function register()
    {
        if(birthday == null)
        {
            alert("Merci d'indiquer une date de naissance");
            return;
        }

        if(birthday != null)
        {
            const timeArray = birthday.split('-');

            const birthYear = timeArray[0];
            const birthMonth = timeArray[1];
            const birthDay = timeArray[2];

            //const nowYear = (new Date(Date.now() * 1000)).getYears();

            const currentYear = new Date().getFullYear();
            const currentMonth = new Date().getMonth() + 1;
            const currentDay = new Date().getDate();

            if(Math.abs(currentYear - birthYear) < 18)
            {
                alert("Désolé tu n'as pas 18 ans :(");
                return;
            }

            if(Math.abs(currentYear - birthYear) == 18)
            {
                if(currentMonth < birthMonth)
                {
                    alert("Désolé tu n'as pas 18 ans :(");
                    return;
                }

                if(currentMonth == birthMonth)
                {
                    if(currentDay < birthDay)
                    {
                        alert("Désolé tu n'as pas 18 ans :(");
                        return;
                    }
                }
            }
        }

        if(username == "")
        {
            alert("Merci d'indiquer un nom d'utilisateur");
            return;
        }

        if(email == "")
        {
            alert("Merci d'indiquer une adresse mail");
            return;
        }

        if(password == "")
        {
            alert("Merci d'entrer un mot de passe");
            return;
        }

        if(password != confirmedPassword)
        {
            alert("Erreur de confirmation du mot de passe");
            return;
        }

        {
            axios.post("http://localhost:3000/api/user/register",
            {
                username: username,
                email: email,
                password: password,
                phone: phone,
                birthday: birthday,
                location: location,
                photo: photo

            }).then((res) => {
                //console.log(res.data.message);

                if(res.data.message == "registerSuccess")
                {
                    window.localStorage.setItem("auth", JSON.stringify({
                      userId: res.data.userId,
                      jwt: res.data.jwt
                    }));
          
                    router.push("/");
                }
            }).catch((res) => {
                //console.log(res.response.data.message);

                if(res.response.data.message.includes("error:MongoServerError: E11000 duplicate key error collection"))
                {
                    alert("Adresse email déjà existante !");
                }
            });
        }
    }
    
    useEffect(() => {
        if(window.localStorage.getItem("auth"))
        {
          router.push("/");
        }
      }, []);
    
    return(
        <div class="bg-grey-lighter min-h-screen flex flex-col">


            
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">

                <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="w-full"
                alt="Sample image"
              ></img>

                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">



                    <h1 class="mb-8 text-3xl text-center">S'inscrire</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        placeholder="Pseudo"
                        onChange={(e) => setUsername(e.target.value)} />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="location"
                        placeholder="Localisation"
                        onChange={(e) => setLocation(e.target.value)} />

                    <input 
                        type="date"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="birthday"
                        placeholder="Date d'anniversaire"
                        onChange={(e) => setBirthday(e.target.value)} />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="phone"
                        placeholder="Téléphone"
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
                    focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out align-center" onClick={register}>
                    Créer un compte </button>
                    </div>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                    <br></br>
                    Déja un compte ? 

                    <a href="/login" class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"> Se connecter</a>
                </div>
            </div>
        </div>
    )   
}



