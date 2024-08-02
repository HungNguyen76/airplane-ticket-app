import React from "react";
import { Link } from "react-router-dom";
// import phongve from '../../assets/images/phongvemaybay247.jpg'
import './LetGetToKnow.css'
const LetGetToKnow = () => {
  return (
    <div className="bg-phongve w-full h-fit overflow-hidden rounded-[30px] bg-cover bg-center py-10 px-5 flex justify-center items-center min-h-[600px] bg-no-repeat bg-[#F4F4F4] relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center px-5 py-10">
        <h1
          className="text-4xl md:text-6xl font-bold text-center
        text-white max-w-[400px] md:max-w-[700px] mb-5"
        >
          Cam kết giá rẻ nhất - Dịch vụ tốt nhất
        </h1>
        <Link to="https://www.facebook.com/phongve11chanhung/">
          <button className="bg-white text-black mt-3 px-8 py-3 rounded-xl hover:bg-gray-300 transition duration-200 md:mt-5">
            Đặt vé ngay
          </button>
        </Link>

      </div>
    </div>
  );
};

export default LetGetToKnow;
