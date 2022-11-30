import Link from "next/link";
const Footer = () => {

    return(
        <div className="mb-2">
            <ul className="px-20 md:flex items-center justify-between text-gray-600  md:pt-0 bg-gray-50 gap-64 border-t-4">
                <li><Link href="/staff"><a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Notre équipe</a></Link></li>
                <li><a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Conditions d'utilisation</a></li>
              
            </ul>
        </div>
    )

}

export default Footer;