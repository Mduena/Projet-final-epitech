
 export default function Homecards () {
    return (
        <div>
<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />

{/* <!-- ====== Cards Section Start --> */}
<section className="pt-20 lg:pt-[30px] pb-10 lg:pb-20 bg-gradient-to-r from-gray-50 to-omblue">
   <div className="container w-2/3 ">
      <div className="grid sm:grid-cols-3  grid-cols-1 gap-2 mb-2">
         <div className="">
            <div className="bg-white rounded-lg overflow-hidden mb-10 hover:drop-shadow-xl">
               <img
                  src="./assets/beer.jpg"
                  alt="image"
                  className="w-full"
                  />
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center ">
                  <h3>
                     <a
                        href="chill"
                        className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[12px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        -mt-5
                        "
                        >
                    On boit un coup ?!
                     </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7 ">
                     Faites des rencontres et éclatez-vous !
                     De nombreux membres vous proposent
                     Bars, restaurants, clubs, nuits et jours à vous de jouer !
                  </p>
                  <a
                     href="chill"
                     className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                     >
                  Tchin !
                  </a>
               </div>
            </div>
         </div>
         <div className="">
            <div className="bg-white rounded-lg overflow-hidden mb-10 hover:drop-shadow-xl">
               <img
                  src="./assets/tennis.jpg"
                  alt="image"
                  className="w-full"
                  />
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a
                        href="sport"
                        className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        -mt-5
                        "
                        >
                     Sorties Sportives
                     </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                     Que vous soyez Ping Pong ou Tennis, Flechettes ou Tir à l'arc, vous trouverez LA sortie qu'il vous faut pour 
                     vous faire plaisir et vous dépenser. 
                  </p>

                  <a
                     href="sport"
                     className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                     >
                  Feu !
                  </a>
               </div>
            </div>
         </div>
         <div className="">
            <div className="bg-white rounded-lg overflow-hidden mb-10 hover:drop-shadow-xl">
               <img
                //   src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
                  src="./assets/esca.jpg"
                  alt="image"
                  className="w-full"
                  />
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a
                        href="xtreme"
                        className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        -mt-5
                        "
                        >
                     Les X'trems
                     </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                     Vous avez envie de vous dépasser, de vous faire peur ou de découvrir des activités sportives qui changent de l'ordinaire ?
                     Foncez ! C'est par ici !
                  </p>
                  <a
                     href="xtreme"
                     className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                     >
                   Fonce !
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
{/* <!-- ====== Cards Section End --> */}

</div>
    )
}


