import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay }  from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import { Link } from 'react-router-dom';




export  default ({product}) => {
  return (
    
    <div className='swipe-wrapper' >
    <div className='swipe-container' >
  <h1 className='swipe-title'>Summer Discount</h1>
    
    <h3 className='swipe-info'>
With discounts up to 35%</h3>
    <div className='container'>
    <Swiper className='swipe-test'
      spaceBetween={10}
      slidesPerView={1}
    
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
       
     
    >   <div className='btn-container'>

        <Link to={"/Products"}> <button className='btn btn-dark'>Show</button>
        </Link>

        {/* <Link to={"/"} */}
        <Link to ={"/About"}>  <button  className='btn btn-light '>About Us</button></Link>
        </div>
    
    
      <SwiperSlide><img src='https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP858/mbp16-gray.png' style={{paddingTop:"3%",width:"25%"}}/></SwiperSlide>
      <SwiperSlide><img src='https://www.gaming.gen.tr/wp-content/uploads/2022/03/167134.png' style={{width: "25%", paddingTop:"2%"}}/></SwiperSlide>
      <SwiperSlide><img src='https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g432/g432-gallery-3.png?v=1' style={{paddingTop:"5%",width:"25%"}}/></SwiperSlide>
      <SwiperSlide><img src='https://www.pngplay.com/wp-content/uploads/2/Gaming-Pc-Mouse-PNG-HD-Quality.png' style={{paddingTop:"5%",width:"20%"}}/></SwiperSlide>
         
  
    </Swiper>
    
    </div>
    </div>

</div>
  );
};