import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

export default () => {
  // Create array with 1000 slides
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={1} virtual>
      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          <img className='h-3/12' src="./src/assets/images/header_img.png" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};