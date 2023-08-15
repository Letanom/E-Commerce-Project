import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay }  from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import { Link } from 'react-router-dom';




export  default ({product}) => {
  return (
    
    <div className='swipe-wrapper' >
    <div className='swipe-container' >
  <h1 className='swipe-title'>Karne Fırsatları</h1>
    
    <h3 className='swipe-info'>%35'e varan indirimlerle</h3>
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

        <Link to={"/Products"}> <button className='btn btn-dark'>Görüntüle</button>
        </Link>

        {/* <Link to={"/"} */}
        <Link to ={"/About"}>  <button  className='btn btn-light '>Hakkımızda</button></Link>
        </div>
    
    
      <SwiperSlide><img src='./src/assets/img/slide1.png' style={{paddingTop:"3%"}}/></SwiperSlide>
      <SwiperSlide><img src='./src/assets/img/slide2.png' style={{width: "25%", paddingTop:"2%"}}/></SwiperSlide>
      <SwiperSlide><img src='./src/assets/img/slide3.png' style={{paddingTop:"5%",width:"40%"}}/></SwiperSlide>
      <SwiperSlide><img src='https://www.pngplay.com/wp-content/uploads/2/Gaming-Pc-Mouse-PNG-HD-Quality.png' style={{paddingTop:"5%",width:"20%"}}/></SwiperSlide>
         
  
    </Swiper>
    
    </div>
    </div>

</div>
  );
};