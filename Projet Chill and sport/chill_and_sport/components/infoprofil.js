import { useEffect, useState } from "react";
import axios from "axios";
import { UserAddIcon } from "@heroicons/react/outline";

const Infoprofil = () =>
{
    // console.log(Tab);
    const [user, setUser] = useState([])

    async function getUser()
    {
      if(window.localStorage["auth"]){
        const userId = JSON.parse(window.localStorage["auth"]).userId;
        //console.log(userId);
        const res = await axios.get(`/api/user/${userId}`);

        //console.log(res);

        setUser({
            name: res.data.user.name??res.data.user.username,
            //email: res.data.user.email,
            //phone: res.data.user.phone,
            birthday: res.data.user.birthday,
            location: res.data.user.location
        });
      }

    }
    useEffect(() =>
    {
        getUser();

    }, [])

    return (
        <div>
            
            {
               user.name
            }

        </div>
    )

}

export default Infoprofil;