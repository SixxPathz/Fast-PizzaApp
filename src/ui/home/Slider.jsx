import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slideImage1 from "../../assets/slide1Img.png";
import slideImage2 from "../../assets/slide2Img.png";
import slideImage3 from "../../assets/slide3Img.png";

const data = [
  { id: 0, image: slideImage1 },
  { id: 1, image: slideImage2 },
  { id: 2, image: slideImage3 },
];

function Slider() {
  return (
    <Swiper
      className="h-[100vh]"
      modules={[Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 4000 }}
    >
      {data?.map((item) => (
        <SwiperSlide key={item.id}>
          <img
            src={item.image}
            alt={`slideImage${item.id}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;