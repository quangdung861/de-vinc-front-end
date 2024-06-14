import React from "react";

import { Wrapper } from "./styles";

import { Link } from "react-router-dom";
import Button from "../../../components/Button";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container">
        <div className="footer-top">
          <div className="foo-item feed-back">
            <div className="feed-back-title">DE VINC lắng nghe bạn!</div>
            <div>Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.<br />Đóng góp ý kiến</div>
            <div className="feedback-btn" style={{ marginTop: 32 }}>
              {/* <Button text={`Đóng góp ý kiến`} /> */}
              <span>
                Đóng góp ý kiến
              </span>
            </div>
          </div>
          <div className="foo-item contact">
            <div className="foo-item-phone">
              <i className="fa-solid fa-phone"></i>
              <div className="foo-top-center_item-right">
                <div className="title">Hotline</div>
                <div className="detail">0935.411.853 (8:30 - 22:00)</div>
              </div></div>
            <div className="foo-item-email">
              <i className="fa-solid fa-envelope"></i>
              <div className="foo-top-center_item-right">
                <div className="title">Email</div>
                <div className="detail">Devincstore@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="foo-item social">
            <i className="fa-brands fa-facebook-f facebook-icon"></i>
            <i className="fa-brands fa-instagram instagram-icon"></i>
            <i className="fa-brands fa-tiktok tiktok-icon"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="container-item-start">
          <div className="title title-first">
            <img
              src={require('../../../assets/images/new-logo-devinc.png')}
              alt=""
            />
            <h3>De Vinc</h3>
          </div>
          <div className="content">
            <p>
              Điện thoại: <span>0935.411.853</span> <br />
              Email: <span>devincstore@gmail.com</span> <br />
              Địa chỉ: Số 82/25 Nguyễn Lương Bằng, Quận Liên Chiểu, TP.Đà Nẵng
            </p>
          </div>
          <img
            className="logo-dmca"
            src="https://fullstack.edu.vn/static/media/dmca.2593d9ecf1c982e3c3a2.png"
            alt=""
          />
        </div>
        <div className="container-item">
          <div className="title">
            <h3>VỀ DE VINC</h3>
          </div>
          <div className="content">
            <ul className="list-content">
              <li>
                <Link>Giới thiệu</Link>
              </li>
              <li>
                <Link>Liên hệ</Link>
              </li>
              <li>
                <Link>Điều khoản</Link>
              </li>
              <li>
                <Link>Bảo mật</Link>
              </li>
              <li>
                <Link>Cơ hội việc làm</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-item">
          <div className="title">
            <h3>CHÍNH SÁCH</h3>
          </div>
          <div className="content">
            <ul className="list-content">
              <li>
                <Link>Chính sách đổi trả</Link>
              </li>
              <li>
                <Link>Chính sách thành viên</Link>
              </li>
              <li>
                <Link>Chính sách giao hàng</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-item">
          <div className="title">
            <h3>CHĂM SÓC KHÁCH HÀNG</h3>
          </div>
          <div className="content">
            <ul className="list-content">
              <li>
                <Link>Trải nghiệm mua sắm 100% hài lòng</Link>
              </li>
              <li>
                <Link>Nhóm cộng đồng</Link>
              </li>
              <li>
                <Link>Câu chuyện về De Vinc</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-item-end">
          <div className="title">
            <h3>THƯƠNG HIỆU THỜI TRANG NAM DE VINC</h3>
          </div>
          <div className="content">
            <ul className="list-content">
              <li>Ngày thành lập: 28/12/2016</li>
              <li>
                Lĩnh vực: Thời trang, phân phối và sản xuất quần áo. De Vinc xây dựng và phát
                triển những sản phẩm mang lại giá trị cho cộng đồng.
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="foo-bottom-left">
            © 2016 - 2024 DE VINC. Nền tảng mua sắm hàng đầu Việt Nam
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
