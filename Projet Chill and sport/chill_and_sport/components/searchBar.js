import Image from 'next/image';


export default function Searchbar() {
    return (
        <div className="md:flex md:-mt-12 ">
            <div className="ml-10 -mr-10 mt-2 w-7/12  sm:w-2/4">
                <Image src="/logo5.png" alt="logosite" width={230} height={230} />
            </div>
            <div className='w-full'>
                <div className="flex items-center">
                    <div className="">
                        <div className="baseline text-2xl font-bold hidden md:flex ">
                            Sortir, se rencontrer, partager !
                        </div>
                        <div className="baseline text-2xl font-bold text-omblue drop-shadow-md hidden md:flex">
                            On craint Degun Let’s Go !
                        </div>
                    </div>
                    <div className='-mb-16 hidden md:flex'>
                        <Image src="/assets/bm.png" alt="logosite" width={200} height={250} />
                    </div>
                </div>
                <div className='drop-shadow-md ml-24'>
                    <form action="/resultsSearchbar" method="get">
                        <label for="default-search" className=" mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div className="relative md:-ml-11 mr-0 w-3/4 mb-2" >

                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-700 dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input name="word" type="search" id="default-search" className=" block p-4 pl-10 w-full text-sm text-bold-gray-50 bg-gray-100 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Trouver une sortie ou un utilisateur..." required ></input>
                            <button type="submit" className="text-white absolute right-3 bottom-2 bg-omblue hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go !</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}