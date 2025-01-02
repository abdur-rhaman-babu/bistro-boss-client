import axios from "axios";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("reviews.json").then((res) => {
      setReviews(res.data);
    });
  }, []);
  return (  
    <div className="my-10">
      <SectionTitle subHeading="What Our Clients Say" heading="Testimonials" />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide>
            <div className="text-center flex flex-col justify-center items-center gap-3 ">
            <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <h1>{review.details}</h1>
              <h3 className="font-semibold text-yellow-500 text-2xl">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
