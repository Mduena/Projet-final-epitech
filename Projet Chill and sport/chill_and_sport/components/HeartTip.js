import { 
    UserIcon 
} from "@heroicons/react/solid";

const HeartTip = () => {
    return (
        <div className="heart-tip animate-fade absolute opacity-0 top-[50px] 
        bg-red-500 origin-top left-1/2 -translate-x-1/2 p-3 rounded-lg">
                <div className="flex space-x-1">
                <UserIcon className="h-6 w-6 text-white" />
                <div className="text-white font-semibold">1</div>
            </div>
        </div>
    )
}

export default HeartTip;