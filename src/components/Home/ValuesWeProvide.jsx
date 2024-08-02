import React from "react";

import { GoPaperAirplane } from "react-icons/go";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlinePeople } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { SiZalo } from "react-icons/si";
import { FaViber } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { Link } from "react-router-dom";

const ValuesWeProvide = () => {
  return (
    <div className="py-[50px] max-w-[1400px] mx-auto">
      <div>
        <h1 className="text-[35px] md:text-[50px] text-center font-bold">
          Các hình thức mua vé may bay quốc tế giá rẻ
        </h1>
        <p className="text-center">
          Các dịch vụ chúng tôi luôn làm hài lòng khách hàng
        </p>
      </div>
      <div className="flex justify-center md:justify-between items-center gap-5 mt-5 flex-wrap">
        <div className="flex justify-center items-center flex-col max-w-[200px]">
          <div className="w-[50px] h-[50px] bg-gray-200 rounded-full text-2xl text-gray-500 flex justify-center items-center">
            <GoPaperAirplane className="rotate-[-35deg] text-black" />
          </div>
          <h1 className="text-xl font-bold mt-2">Gọi điện thoại trực tiếp, nhanh nhất - tiện nhất</h1>
          <p className="text-sm text-center mt-1">
            0988 201 000 (Vân-quốc tế) - <br /> 0937 790 754 (Hùng-nội địa)
          </p>
        </div>
        {/* ------------------------------- */}
        <div className="flex justify-center items-center flex-col max-w-[200px]">
          <div className="w-[50px] h-[50px] bg-gray-200 rounded-full text-2xl text-gray-500 flex justify-center items-center">
            <MdOutlinePeople className="text-black" />
          </div>
          <h1 className="text-xl font-bold mt-2">Qua chat</h1>
          <p className="text-sm text-center mt-1">
            <span style={{ display: "flex" }}>
              <SiZalo style={{ width: "25px", height: "30px", margin: "5px" }} />
              <FaViber style={{ width: "25px", height: "25px", margin: "5px" }} />
              <Link to="https://www.facebook.com/phongve11chanhung/">
                <FaFacebookMessenger style={{ width: "25px", height: "30px", margin: "0px 5px 5px" }} />
              </Link>

            </span>


          </p>
        </div>
        {/* ------------------------------- */}
        <div className="flex justify-center items-center flex-col max-w-[200px]">
          <div className="w-[50px] h-[50px] bg-gray-200 rounded-full text-2xl text-gray-500 flex justify-center items-center">
            <IoWalletOutline className=" text-black" />
          </div>
          <h1 className="text-xl font-bold mt-2">Đến trực tiếp văn phòng 247</h1>
          <p className="text-sm text-center mt-1">
            11 Chấn Hưng, P.6, Tân Bình, HCM
          </p>
        </div>
        {/* ------------------------------- */}
        <div className="flex justify-center items-center flex-col max-w-[200px]">
          <div className="w-[50px] h-[50px] bg-gray-200 rounded-full text-2xl text-gray-500 flex justify-center items-center">
            <CiDiscount1 className="text-black" />
          </div>
          <h1 className="text-xl font-bold mt-2">Thanh Toán</h1>
          <p className="text-sm text-center mt-1">
            Chuyển khoản - thanh toán trực tiếp tại phòng vé hoặc giao vé
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValuesWeProvide;
