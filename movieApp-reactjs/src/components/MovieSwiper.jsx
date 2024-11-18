import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function MovieSwiper({ slides, slideChange }) {
  return (
    <div className='w-full h-full p-[2rem]'>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        modules={[Autoplay, EffectCoverflow]}
        className="movieSwiper"
      >
              {slides.map((item, index) => (
                              
            <SwiperSlide key={index} className="swiper-slide">
                        
                
            <img src={item.poster_url? item.poster_url:'https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png' } alt="No Image Found!" onClick={()=>slideChange(item.id)}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieSwiper;
