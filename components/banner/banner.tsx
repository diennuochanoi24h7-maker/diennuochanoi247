import './banner.css'

const Banner = () => {
    return (
        <section id="banner" className="banner-container">
            <div className="background-video-container">
                <img className="img-banner" src="/assets/images/image-banner.jpg" alt="image-banner"/>
            </div>
            {/* <div className="img-event-1">
                <img className="img-event-banner" src="/assets/event/event_29.png" alt="image event"/>
            </div> */}
            <div className='background-overlay'></div>
            <div className="elementor-container elementor-column-gap-no banner-container-info">
                <div className="elementor-column elementor-col-50 banner-info">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <section className="elementor-section-banner">
                            <div className="wdt-heading-holder pb-6">
                                <div className="wdt-heading-subtitle-wrapper wdt-heading-align-1 "><span
                                    className="wdt-heading-subtitle"><span>Điện Nước Hà Nội 247</span> - <span
                                    className="slogan">&quot;TRAO CHỮ TÍN - TRỌN NIỀM TIN&quot;</span></span></div>
                                <h1 className="wdt-heading-title-wrapper wdt-heading-align-1 wdt-heading-deco-wrapper heading-banner">
                                    <span>DỊCH VỤ SỬA CHỮA</span> <span>ĐIỆN, NƯỚC, MÁY BƠM</span> <span>CHUYÊN NGHIỆP TẠI NHÀ</span> SỐ
                                    1 HÀ NỘI
                                </h1>
                            </div>
                            <div className="banner-services">
                                <div className="info-item">
                                    <h3 className="wdt-heading-content-wrapper label-service">
                                        CÁC DỊCH VỤ
                                    </h3>
                                    <div className="services-banner">
                                        <ul className="services-list">
                                            <li>Sửa điện nước</li>
                                            <li>Sửa chập cháy điện</li>
                                            <li>Sửa máy bơm</li>
                                            <li>Sửa nước rò rỉ, sửa đường nước</li>
                                            <li>Sửa bình nóng lạnh</li>
                                            <li>Chống thấm</li>
                                            <li>Thông tắc cống, hút bể phốt</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <h3 className="wdt-heading-content-wrapper label-service">
                                        CAM KẾT
                                    </h3>
                                    <div className="services-banner">
                                        <ul className="services-list commitment-list">
                                            <li><i className="icon-check fa-solid fa-circle-check"></i> Sửa Chữa Uy Tín Chất Lượng</li>
                                            <li><i className="icon-check fa-solid fa-circle-check"></i> Khắc Phục Tận Gốc</li>
                                            <li><i className="icon-check fa-solid fa-circle-check"></i> Đúng Giá</li>
                                            <li><i className="icon-check fa-solid fa-circle-check"></i> Dịch Vụ Trọn Gói</li>
                                            <li><i className="icon-check fa-solid fa-circle-check"></i> Bảo Hành Dài Hạn</li>
                                            <li><i className="icon-check fa-solid fa-circle-check"></i> Tư Vấn Miễn Phí </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="sale-info">
                                <div>
                                    <div className="click-now">
                                        <div className="elementor-widget-container">
                                            <div
                                                className="wdt-button-holder wdt-template-filled wdt-button-link wdt-button-style-default wdt-button-size-nm wdt-animation- wdt-button-icon-after">
                                                <a className="wdt-button" href="tel:0845 591 568"
                                                   aria-label="Liên Hệ Ngay">
                                                    <p className="wdt-button-text"><span>Bấm để gọi ngay</span></p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="elementor-widget-container">
                                            <div
                                                className="wdt-button-holder wdt-template-filled wdt-button-link wdt-button-style-default wdt-button-size-nm wdt-animation- wdt-button-icon-after">
                                                <a className="wdt-button button-white" href="#services"
                                                   aria-label="Tìm hiểu thêm">
                                                    <p className="wdt-button-text"><span>Tìm hiểu thêm</span></p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-overview">
                                        <div className="wdt-content-item">
                                            <div className="wdt-content-media-group">
                                                <div className="wdt-content-image-wrapper ">
                                                    <div className="wdt-content-image">
                                                <span>
                                                <img fetchPriority="high"
                                                     decoding="async" width="496"
                                                     height="172"
                                                     src="/assets/images/review_1.png"
                                                     className="attachment-full size-full wp-image-982"
                                                     alt="reviewer"
                                                     sizes="(max-width: 496px) 100vw, 496px"/>
                                                </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wdt-content-detail-group">
                                                <div className="wdt-rating-container">
                                                    <ul className="wdt-rating">
                                                        <li><span className="fas fa-star" data-value="1"></span></li>
                                                        <li><span className="fas fa-star" data-value="2"></span></li>
                                                        <li><span className="fas fa-star" data-value="3"></span></li>
                                                        <li><span className="fas fa-star" data-value="4"></span></li>
                                                        <li><span className="fas fa-star-half-stroke"
                                                                  data-value="5"></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="wdt-content-title"><h5>1.k Đánh giá</h5></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="elementor-column elementor-col-50 banner-non-info"></div>
            </div>
        </section>
    )
}

export default Banner;