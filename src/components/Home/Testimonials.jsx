import React from "react";
import TestimonialCard from "../Card/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Chị Hà Tuyết",
      role: "Quản lý Logistic",
      image: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
      text: "Mình khá hài lòng về dịch vụ ở 247. Nhân viên rất dễ thương và nhiệt tình. Tính ra mình mua vé ở đây được 5 năm rồi và luôn hài lòng về chất lượng.",
    },
    {
      name: "Chị Mỹ Hạnh",
      role: "Nhân viên văn phòng",
      image: "https://i.pravatar.cc/300?u=a042581f4e29026705d",
      text: "Vé quốc tế ở đây giá siêu tốt luôn. mình gọi lúc 10g đêm chị nhân viên vẫn hỗ trợ và lúc đổi vé thì được hỗ trợ free. Mình cảm ơn 247",
    },
    {
      name: "Chị Nhung",
      role: "Nv kinh doanh",
      image: "https://i.pravatar.cc/300?u=a042581f4e29026706d",
      text: "Mua vé ở đây được cái là xuất trước nếu khách quen và chuyển khoản sau. nên tôi đi đâu cũng yên tâm ko sợ hết vé rẻ.",
    },
  ];

  return (
    <div className="py-5 max-w-[1400px] mx-auto">
      <div>
        {/* TODO: ADD APP NAME HERE */}
        <h1 className="text-[18px]">Trải nghiệm khách hàng tại 247</h1>
      </div>
      <div>
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                text={testimonial.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
