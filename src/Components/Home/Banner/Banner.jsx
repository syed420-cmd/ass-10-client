import { Typography } from '@material-tailwind/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../../../assets/images/banner1.jpg'
import img2 from '../../../assets/images/banner2.jpg'
import img3 from '../../../assets/images/banner3.jpg'

// Import Swiper styles
import 'swiper/css';

const Banner = () => {
  return (
    <div>


      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide className='relative w-full'>
        <img className='w-[98%] mx-auto h-[300px] md:h-[550px]' src={img3} alt="" />
        <div className='absolute top-[50px] md:top-[220px] text-white text-center'>
          <h1 className='text-3xl w-11/12 mx-auto md:text-5xl mb-5'>From Clay to Creation: Journey into Art</h1>
          <p className='w-10/12 lg:w-7/12 mx-auto leading-relaxed'>Explore the captivating journey of transforming raw materials into art. Witness clay, stone, and metal evolve into mesmerizing sculptures and models, evoking wonder and joy.</p>
        </div>
        </SwiperSlide>

        <SwiperSlide className='relative w-full'>
          <img className='w-[98%] mx-auto h-[300px] md:h-[550px]' src={img1} alt="" />
          <div className='absolute top-[50px] md:top-[220px] text-white text-center'>
          <h1 className='text-3xl w-11/12 mx-auto md:text-5xl mb-5'>Embark on a Creative Odyssey</h1>
          <p className='w-10/12 lg:w-7/12 mx-auto leading-relaxed'>Step into a world where raw materials are sculpted into mesmerizing artworks that ignite the imagination. Experience the awe-inspiring journey from humble beginnings to breathtaking creations</p>
        </div>
        </SwiperSlide>

        <SwiperSlide className='relative w-full'>
          <img className='w-[98%] mx-auto h-[300px] md:h-[550px]' src={img2} alt="" />
          <div className='absolute top-[50px] md:top-[220px] text-white text-center'>
          <h1 className='text-3xl w-11/12 mx-auto md:text-5xl mb-5'>Revel in Creativity: From Earth to Elat ion</h1>
          <p className='w-10/12 lg:w-7/12 mx-auto leading-relaxed'>Delve into the enchanting process of crafting art from raw elements. Behold as clay, stone, and metal metamorphose into captivating sculptures and models, igniting wonder and joy</p>
        </div>
        </SwiperSlide>
       
      </Swiper>
    </div >
  );
};
export default Banner;
