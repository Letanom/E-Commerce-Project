import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaComments } from 'react-icons/fa';
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';

const FeedBack = () => {
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProfileData = async () => {
    try {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
      const profiles = res.data.slice(0, 100);
      setProfileData(profiles);
      console.log(profiles);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);
  if (loading) {
    return <Spinner animation="border" role="status" />
  }
  return (

    <div className='wrap-rev'>

      <Swiper

        spaceBetween={50}
        slidesPerView={1}
    
  
        modules={[Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
      >


        {profileData.map((profile) => (

          <SwiperSlide key={profile.id}>
            <h1><FaComments style={{ marginBottom: "1.5%" }} />Feedbacks</h1>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            <p>Comments: {profile.body}</p>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedBack;

