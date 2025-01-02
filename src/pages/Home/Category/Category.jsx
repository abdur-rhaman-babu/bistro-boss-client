import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <>
    <SectionTitle heading={'Order Online'} subHeading={'From 11am to 10pm'}/>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
          <img className="w-full" src={slide1} alt="" />
          <p className="text-4xl text-white -mt-20 mb-5 text-center">Salads</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide2} alt="" />
          <p className="text-4xl text-white -mt-20 mb-5 text-center">Pizzas</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide3} alt="" />
          <p className="text-4xl text-white -mt-20 mb-5 text-center">Soups</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide4} alt="" />
          <p className="text-4xl text-white -mt-20 mb-5 text-center">Dessert</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;
