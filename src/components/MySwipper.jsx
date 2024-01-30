import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import projects  from '../components/properties/probando';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function MySwiper({images}) {
  
    return (
    <>   
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoHeight={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-xl shadow-xl ring-1 ring-gray-400/10 h-full sm:w-[57rem] md:-ml-4 lg:-ml-0"
      >
        {
            images.map( images => {
                return (
                    <SwiperSlide key={images} >                      
                      <img  src={images} className='w-[48rem]  rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:max-w-none lg:-ml-0'/>
                    </SwiperSlide> 
                );
            })
        }
      </Swiper>      
    </>
    );
  }