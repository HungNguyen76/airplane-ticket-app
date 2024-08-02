import React from "react";
import './footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-[30px] md:px-[30px]">
      <div className="w-full h-fit bg-gray-300 rounded-[30px] my-10 flex justify-center items-center py-10 px-5 text-center flex-col ">
        <footer className="footer">
          <div className="section__container footer__container">
            <div className="footer__col">
              <h3>Vé máy bay quốc tế 247</h3>
              <p>
                Nơi kết nối mọi hành trình đẹp. Với 12 năm kinh nghiệm săn vé quốc tế giá rẻ cho trên 10.000 khách hàng. Chúng tôi cam kết giá rẻ nhất thị trường và mang lại dịch vụ tuyệt vời nhất cho quý khách.
              </p>
              <p>
                Hãy để chúng tôi được phục vụ bạn trong từng chuyến bay.
              </p>
            </div>
            <div className="footer__col">
              <h4>VÉ RẺ ĐI QUỐC TẾ</h4>
              <p>Vé máy bay giá rẻ đi Melbourne</p>
              <p>Vé máy bay giá rẻ đi California</p>
              <p>Vé máy bay giá rẻ đi Tokyo</p>
              <p>Vé máy bay giá rẻ đi Seoul</p>
              <p>Vé máy bay giá rẻ đi Frankfurt</p>
              <p>Vé máy bay giá rẻ đi France</p>
              <p>Vé máy bay giá rẻ đi Singapore</p>
              <p>Vé máy bay giá rẻ đi Malaysia</p>
              <p>Vé máy bay giá rẻ đi Thailand</p>
              <p>Vé máy bay giá rẻ đi Indonesia</p>
              <p>Vé máy bay giá rẻ đi Philipines</p>
            </div>
            <div className="footer__col">
              <h4>Liên Hệ</h4>
              <p>Địa chỉ: 11 Chấn Hưng, Phường 6, Tân Bình, HCM</p>
              <p>
                <Link to="https://www.facebook.com/phongve11chanhung/">
                  Facebook Ve may bay 247
                </Link>
              </p>
              <p>Zalo: 0937 790 754 - 0988 201 000</p>
            </div>
          </div>
          <div className="section__container footer__bar">
            <p>Copyright © 2024 Web Design. All rights reserved.</p>
            <div className="socials">
              <span><i className="ri-facebook-fill"></i></span>
              <span><i className="ri-twitter-fill"></i></span>
              <span><i className="ri-instagram-line"></i></span>
              <span><i className="ri-youtube-fill"></i></span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
