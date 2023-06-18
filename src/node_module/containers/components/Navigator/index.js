import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.scss";

import { EffectFlip, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Swiper
        grabCursor={true}
        pagination={true}
        spaceBetween={10}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Link to="todo">
                <img alt="" src="https://www.ifbd.be/wp-content/uploads/2019/06/master-your-to-do-list.jpg" />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="weather">
                <img alt="" src="https://t3.ftcdn.net/jpg/05/51/95/26/360_F_551952602_vp8d4v2nDYo8UExEpxFOtMMv8uOzPaq9.jpg" />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="news">
                <img alt="" src="https://www.charlottehomeexperts.com/wp-content/uploads/2018/02/1920_217624765opt.jpg" />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="money">
                <img alt="" src="https://www.silkdrive.com/wp-content/uploads/2020/08/4063402-scaled.jpg" />
            </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};