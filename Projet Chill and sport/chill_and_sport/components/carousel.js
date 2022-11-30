
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export default function CarouselHome () {
    return (
<div className="flex carousel-container place-content-center bg-gradient-to-r from-gray-50 to-omblue">
    <div className="">
    <img src="./assets/ban4.png" />   
    </div>        
<div className=" w-2/3 p-4">
    <Carousel autoPlay infiniteLoop>
        
                <div className="">
                    <img src="/assets/paintball.jpg" />
                    {/* <p className="legend"></p>  format si besoin d'une legende*/}
                </div>
                <div>
                    <img src="/assets/moto.jpg" />
                    
                </div>
                <div>
                    <img src="/assets/Wakeboard.jpg" />
                    
                </div>
                <div>
                    <img src="/assets/yoga2.jpg" />
                </div>
       
    </Carousel>
</div>
<div className="">
    <img src="./assets/ban2.png" />   
    </div>
</div>
    )
}