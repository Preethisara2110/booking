import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const slides = [
  "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=70",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=70",
  "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=70",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=70",
];

export default function Offers() {
  return (
    <section className="offers" id="offers">
      <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 3000 }}
        loop spaceBetween={24} slidesPerView={1}
        breakpoints={{ 640: { slidesPerView: 2 }, 960: { slidesPerView: 3 } }}>
        {slides.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="offer"><img src={src} alt="Special offer" /><b>50% OFF</b></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
