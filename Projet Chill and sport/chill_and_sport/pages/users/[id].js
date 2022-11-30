import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from 'next/link'
import Navbar from "../../components/navBar";
import Footer from "../../components/footer";

export default function getUser(props) {
    const [user, setUser] = useState({});
    const [daySubArray, setDaySubArray] = useState([]);

    const router = useRouter();

    useEffect (() => {
        axios.get(`http://localhost:3000/api/user/${router.query.id}`).then((res) => {
            //console.log(res.data.user); 

            const daySub = res.data.user.created_at.split("T");
            //console.log(daySub);
            setDaySubArray(daySub[0].split("-"));
            //console.log(daySubArray);

            setUser(res.data.user??{});
            //console.log(router);
        });

    }, []);

    const us = Object.entries(user);
    //console.log(us);
    return (
        <div className="bg-gradient-to-r from-gray-50 to-omblue">
            <Navbar />
            <div className=" mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Utilisateurs</h2>
                <br></br>
                <br></br>

                <div className="">
                    {
                        // eslint-disable-next-line react/jsx-key
                        <div>
                            <a>
                                <div className="p-10 mb-10 bg-gray-100 rounded-2xl mt-10 mb-10 ">
                                    <div class="grid grid-rows-3 grid-flow-col gap-4 ">

                                        <h3 className="col-span-2 text-2xl font-bold  bg-white w-40  p-2 text-sm  rounded-lg">Pseudo : {user.username??user.name}</h3>
                                        <h3 className="col-span-2 text-2xl font-bold  bg-white w-40  p-2 text-sm  rounded-lg">Email : {user.email}</h3>
                                        <h3 className="col-span-2 text-2xl font-bold  bg-white w-40  p-2 text-sm  rounded-lg">Tél : {user.phone}</h3>
                                        <h3 className="col-span-2 text-2xl font-bold  bg-white w-40  p-2 text-sm  rounded-lg">Lieu : {user.location}</h3>
                                        <h3 className="col-span-2 text-2xl font-bold  bg-white w-40  p-2 text-sm  rounded-lg">Inscrit depuis le : {daySubArray[2]}/{daySubArray[1]}/{daySubArray[0]}</h3>
                                                                    
                                    </div>                                                
                                </div>
                            </a>
                        </div>
                    }
                </div>          
            </div>
            <Footer/>
        </div>
    )
}