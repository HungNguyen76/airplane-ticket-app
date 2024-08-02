import React from "react";
import HeroSectionCard from "./HeroSectionCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const HeroSection = () => {
  const homeData = [
    {
      heading: "Khám phá các điểm tham quan của Quần đảo Andaman và Nicobar",
      subheading: "Nơi được mệnh danh là thiên đường hạ giới - Gọi ngay 0937 790 754",
      src: "https://images.unsplash.com/photo-1620127682229-33388276e540",
    },
    {
      heading: "Khám phá vẻ đẹp của Paris",
      subheading: "Thành phố tình yêu - Gọi ngay 0937 790 754",
      src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
      heading: "Trải nghiệm các kiệt tác của thành phố New York",
      subheading: "Thành phố không bao giờ ngủ - Gọi ngay 0937 790 754",
      src: "https://images.unsplash.com/flagged/photo-1575597255483-55f2afb6f42c",
    },
    {
      heading: "Ngạc nhiên trước sự hùng vĩ của Grand Canyon",
      subheading: "Tuyệt tác của thiên nhiên - Gọi ngay 0937 790 754",
      src: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c",
    },
    {
      heading: "Lạc vào sự quyến rũ của Kyoto",
      subheading: "Truyền thống kết hợp hiện đại - Gọi ngay 0937 790 754",
      src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
    }
  ];

  return (
    <section className="max-w-[1800px] mx-auto w-full h-[90vh]  mt-6 rounded-[25px] overflow-hidden relative">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {homeData.map((data, index) => (
          <SwiperSlide key={index} className="h-[90vh]">
            <HeroSectionCard
              heading={data.heading}
              subheading={data.subheading}
              src={data.src}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <HeroSectionCard /> */}
    </section>
  );
};

export default HeroSection;
