import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

export default function Logout()
{    
    const router = useRouter();
    const [cookies, setCookie, removeCookie] = useCookies(["auth"]);
    
    function redirect()
    {
        //Cookies.remove("auth");
        window.localStorage.removeItem("auth");


        router.push("/");
    }
    
    return(
        <a onClick={redirect}>
            Logout
        </a>
    )
}