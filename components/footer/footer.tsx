import './footer.css'
import Link from "next/link";
import * as React from "react";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer">
                <div className="footer-container mx-auto px-4">
                    <div className="footer-info flex flex-col justify-between md:flex-row">
                        <div className="footer-col">
                            <Link className="logo-footer" href="/">
                                <img className="logo" src={'/assets/images/logo.png'} alt="Logo"/>
                            </Link>
                            <div className="summary">
                                <p>Giải pháp dẫn đầu trên thị trường cho các vấn đề sửa chữa điện nước, bảo trì lắp đặt
                                    nâng cấp thiết bị tại nhà, với phương châm: <strong>Uy Tín - Chất Lượng - Giá Rẻ</strong>.
                                </p>
                            </div>
                            <div className="mt-2 mb-8"><span className="cs-label">Trụ sở:</span> 46 Lãng Yên, Tổ Dân
                                Phố 5a, Hai Bà Trưng
                            </div>
                            <div className="mb-8">
                                <div className="flex mb-4">
                                    <div className="bar"></div>
                                    <h3>GIỜ LÀM VIỆC</h3>
                                </div>
                                <div><span className="cs-label">T2 - CN</span>: 24/24h</div>
                            </div>
                        </div>
                        <div className="footer-col mb-8">
                            <div className="flex mb-4">
                                <div className="bar"></div>
                                <h3>THÔNG TIN</h3>
                            </div>
                            <ul>
                                <li className="item-info"><Link href="/"><span className="cs-label mr-2"><i
                                    className="fa-solid fa-chevron-right"></i></span>Trang chủ</Link></li>
                                <li className="item-info"><Link href="/#about-us"><span className="cs-label mr-2"><i
                                    className="fa-solid fa-chevron-right"></i></span>Giới thiệu</Link></li>
                                <li className="item-info"><Link href="/#services"><span className="cs-label mr-2"><i
                                    className="fa-solid fa-chevron-right"></i></span>Dịch vụ</Link></li>
                                <li className="item-info"><Link href="/#services"><span className="cs-label mr-2"><i
                                    className="fa-solid fa-chevron-right"></i></span>Tại sao chọn chúng tôi</Link>
                                </li>
                                <li className="item-info"><Link href="/#reviews"><span className="cs-label mr-2"><i
                                    className="fa-solid fa-chevron-right"></i></span>Đánh giá</Link></li>
                                <li className="item-info"><Link href="/khuyen-mai"><span className="cs-label mr-2"><i
                                    className="fa-solid fa-chevron-right"></i></span>Khuyến mãi</Link></li>
                                <li className="item-info"><Link href="/bang-gia-dich-vu"><span
                                    className="cs-label mr-2"><i
                                    className="fa-solid fa-chevron-right"></i></span>Bảng giá</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col mb-8">
                            <div className="flex mb-4">
                                <div className="bar"></div>
                                <h3>LIÊN HỆ TƯ VẤN</h3>
                            </div>
                            <Link className="phone" href="tel:0845591568" target="_blank"
                                  rel="noopener noreferrer">0845 591 568</Link>
                            <div className="mb-4">
                                <p className="mb-4">Trò chuyện cùng chuyên viên kĩ thuật chuyên nghiệp</p>
                                <div
                                    className="wdt-button-holder wdt-template-filled wdt-button-link wdt-button-style-default wdt-button-size-nm wdt-animation- wdt-button-icon-after">
                                    <a className="wdt-button" href="tel:0845 591 568">
                                        <div className="wdt-button-text button-footer text-center">
                                            <span>LIÊN HỆ NGAY</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div>Kênh thông tin khác</div>
                            <ul>
                                <li className="item-info">
                                </li>
                                <li className="item-info"><Link href="https://www.facebook.com/diennuochanoi247.net"
                                                                target="_blank" rel="noopener noreferrer"><span
                                    className="label">Facebook: </span>
                                    https://www.facebook.com/diennuochanoi247.net</Link></li>
                                <li className="item-info"><Link href="mailto:diennuochanoi247h@gmail.com"><span
                                    className="label">Email: </span>
                                    diennuochanoi247h@gmail.com</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col mb-8">
                            <div className="flex mb-4">
                                <div className="bar"></div>
                                <h3>CƠ SỞ</h3>
                            </div>
                            <div className="department">
                                <h4 className="mt-4"><span className="cs-label">CS1:</span> 46 Lãng Yên, Tổ Dân
                                    Phố
                                    5a, Hai Bà Trưng</h4>
                                <h4 className="mt-4"><span className="cs-label">CS2:</span> 234 Đường Nguyễn Văn Cừ,
                                    Ngọc Lâm, Long Biên</h4>
                                <h4 className="mt-4"><span className="cs-label">CS3:</span> 126 Đường Mỹ Đình, Mỹ
                                    Đình,
                                    Nam Từ Liêm</h4>
                                <h4 className="mt-4"><span className="cs-label">CS4:</span> 12 Ngõ 46 Xuân Đỉnh,
                                    Xuân
                                    Đỉnh, Bắc Từ Liêm</h4>
                                <h4 className="mt-4"><span className="cs-label">CS5:</span> 23 Hoàng Hoa Thám,
                                    Ngọc Hồ, Ba Đình</h4>
                                <h4 className="mt-4"><span className="cs-label">CS6:</span> 11, Ngõ 29 Lai Xá, Đức
                                    Giang, Hoài Đức</h4>
                                <h4 className="mt-4"><span className="cs-label">CS7:</span> 16, Ngõ 143 Thái Hà,
                                    Láng
                                    Hạ, Đống Đa</h4>
                                <h4 className="mt-4"><span className="cs-label">CS8:</span> 35, Ngõ 1 Nguyễn
                                    Trãi,
                                    Thanh Xuân Nam, Thanh
                                    Xuân</h4>
                                <h4 className="mt-4"><span className="cs-label">CS9:</span> 12, Ngõ 23, Cầu Cốc, Tây
                                    Mỗ,
                                    Nam Từ Liêm</h4>
                                <h4 className="mt-4"><span className="cs-label">CS10:</span> 23 Tân Mai, Tân Mai,
                                    Hoàng
                                    Mai</h4>
                            </div>
                        </div>
                        <div className="footer-col flex flex-col items-center mb-8">
                            <img src="/assets/images/zalo.jpg" className="qr-zalo mb-4" alt="zalo-qr"/>
                            <img src="/assets/images/logodathongbao.webp" alt="da thong bao bo cong thuong"/>
                        </div>
                    </div>
                    <div className="mt-6 text-center text-gray-500 text-sm">
                        © {new Date().getFullYear()} Điện Nước Hà Nội 247 - Trợ Thủ Số 1 Cho Ngôi Nhà Bạn!
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;