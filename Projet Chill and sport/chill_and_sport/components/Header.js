
import { SearchIcon } from "@heroicons/react/outline"
import { PlusCircleIcon, HomeIcon } from "@heroicons/react/solid"
import { useState, useRef, useEffect } from "react"
import HeartTip from "./HeartTip"

const Header = () => {
    const [searchVisibility, setSearchVisibility] = useState(true)
    const [crossVisibility, setCrossVisibility] = useState(false)
    const inputAreaRef = useRef(null)

    useEffect(() => {
        const checkIfClickedOutside = e => {

            if (!inputAreaRef?.current?.contains(e.target)) {
                console.log('Outside input area');
                setCrossVisibility(false)
                setSearchVisibility(true)
            } else {
                setCrossVisibility(true)
                setSearchVisibility(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [])
    return (

        <div className="shadow-sm border-b bg-white top-0 fixed w-full">

            <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto p-2">
                <div className="relative w-24 h-12 lg-inline-grid">
                    <img src="../logoo.png/" width={181.2} height={99.2} layout="fill" objectFit="contain" />
                </div>
                <div ref={inputAreaRef} className="relative mt-1 p-1 pl-2 rounded-nd sn:text-sm border-solid border-[1.2px] border-gray-300 flex bg-gray-50">
                    {searchVisibility && <SearchIcon className="h-10 w-5 text-gray-400" />}
                    <input type="text" placeholder="search" className="header input pl-1 bg-gray-50 focus:outline-none" />
                    {crossVisibility && <PlusCircleIcon className="h-10 w-5 text-gray-400 rotate-45" />}
                </div>
                <div className="flex items-center justifiy-end space-x-4 ">
                    <HeartTip />
                </div>
            </div>
        </div>

    )
}

export default Header