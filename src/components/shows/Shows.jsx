import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Show from "./show/Show";
import Title from "../title/Title";

const Shows = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res?.json())
      .then((result) => setdata(result));
  }, []);

  return (
    <div className="mt-5">
      <Title text={"Newest Movie"} />
      <Swiper
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data?.map((show) => {
          return (
            <SwiperSlide className="shadow-xl my-10" key={show?.score}>
              <Show show={show} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Shows;
