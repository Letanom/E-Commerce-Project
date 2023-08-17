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
  
  <SwiperSlide><img src='/src/assets/bucketImages/kurumsal_banner_1.jpg' alt='Slide 1' /></SwiperSlide>
    <SwiperSlide><img src='/src/assets/bucketImages/kurumsal_banner_2.jpeg' alt='Slide 2' /></SwiperSlide>
    <SwiperSlide><img src='/src/assets/bucketImages/kurumsal_banner_3.jpeg' alt='Slide 3' /></SwiperSlide>
    <SwiperSlide><img src='/src/assets/bucketImages/kurumsal_banner_4.jpeg' alt='Slide 4'/></SwiperSlide>
    <SwiperSlide><img src='/src/assets/bucketImages/kurumsal_banner_5.jpg' alt='Slide 5'/></SwiperSlide>

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