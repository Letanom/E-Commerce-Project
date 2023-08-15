import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay }  from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
const BannerImage = () => {
  return (
    <div className='banner-wrap'>
    <Swiper className='swipe-banner'
    spaceBetween={10}
    slidesPerView={2}
    

    modules={[Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
     
   
  >  
  
    <SwiperSlide><img src='http://www.endeksbilisim.com.tr/images/content/kurumsal_banner_AMDRX7000.jpg'/></SwiperSlide>
    <SwiperSlide><img src='http://www.endeksbilisim.com.tr/images/content/kurumsal_banner_aorus_17_10_2019_TR.JPG'/></SwiperSlide>
    <SwiperSlide><img src='http://www.endeksbilisim.com.tr/images/content/kurumsal_banner_xpg_17_10_2019_TR.JPG' /></SwiperSlide>
    <SwiperSlide><img src='http://www.endeksbilisim.com.tr/images/content/endeks_kurumsal_banner_13_11_2020.jpg'/></SwiperSlide>
    <SwiperSlide><img src='http://www.endeksbilisim.com.tr/images/content/kurumsal_banner_Tenda_A33.jpg'/></SwiperSlide>
       

  </Swiper>
  </div>

  )
}

export default BannerImage










//   <div className='banner-wrapper'>
//         <img className='banner-img1' src='http://www.endeksbilisim.com.tr/images/content/kurumsal_banner_AMDRX7000.jpg'/>
//         <img className='banner-img2' src='http://www.endeksbilisim.com.tr/images/content/kurumsal_banner_aorus_17_10_2019_TR.JPG'/>
//         <img className='banner-img2' src='http://www.endeksbilisim.com.tr/images/content/endeks_kurumsal_banner_13_11_2020.jpg'/>
//     </div>