import './about-us.css'

const AboutUs = () => {
    const slideItems = [
        {
            label: "Tư vấn nhanh chóng",
            src: '/assets/images/worker.png',
            description: "Đội ngũ tư vấn viên giàu kinh nghiệm sẵn sàng giải đáp mọi thắc mắc của bạn, đưa ra giải pháp tối ưu nhất giúp bạn tiết kiệm chi phí và đạt hiệu quả cao nhất."
        },
        {
            label: "Giải pháp tối ưu",
            src: '/assets/images/docs.png',
            description: "Các giải pháp mà đội ngũ kỹ sư của chúng tôi cung cấp sẽ giúp bạn giải quyết vấn đề một cách hiệu quả, thẩm mỹ và tối ưu chi phí nhất."
        },
        {
            label: "Giá Cả Hợp Lý",
            src: '/assets/images/eke.png',
            description: "Chi phí sửa chữa được đánh giá, phân tích kỹ lưỡng để đảm bảo tiết kiệm nhất cho khách hàng. Khách hàng xác nhận sau đó sẽ tiến hành sửa chữa, lắp đặt."
        },
        {
            label: "Dịch vụ trọn gói",
            src: '/assets/images/eke_and_docs.png',
            description: "Dịch vụ chúng tôi cung cấp đảm bảo từ khâu lắp đặt, sửa chữa đến vận hành và bảo hành. Khách hàng sẽ không phải lo lắng về việc có quá nhiều bước lắp đặt, phải làm việc với nhiều bên dịch vụ khác nhau, hoặc tự hoàn thành các công đoạn trong gói dịch vụ.",
        }
    ]
    return (
        <section id="about-us" className="about-us">
            <div className="elementor-container">
                <div className="about-us-container">
                    <section className="intro">
                        <div className="intro-left">
                            <div className="intro-service wdt-heading-holder">
                                <div className="wdt-heading-subtitle-wrapper wdt-heading-align-1 "><span
                                    className="wdt-heading-subtitle">Hoạt động 24/7</span></div>
                                <h2 className="wdt-heading-title-wrapper wdt-heading-align-1 wdt-heading-deco-wrapper">
                                    <span
                                        className="wdt-heading-title">Chuyên dịch vụ điện nước <span>gia đình và doanh nghiệp</span></span>
                                </h2>
                            </div>
                        </div>
                        <div
                            className="description-intro elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-6ad6c11 start elementor-widget elementor-widget-wdt-heading">
                                <div className="intro-right elementor-widget-container">
                                    <div className="wdt-heading-holder">
                                        <p className="wdt-heading-content-wrapper">
                                            Điện Nước Hà Nội 247 thành lập 26-10-2015 chuyên cung cấp các dịch vụ sửa
                                            chữa, lắp đặt các hệ thống điện, nước, thông tắc nghẹt cho nhà ở, biệt thự,
                                            chung cư mini và các doanh nghiệp. Làm việc theo <strong>quy trình tối ưu
                                            hóa,
                                            chuyên nghiệp</strong> đảm bảo sự <strong>minh bạch, chặt chẽ</strong> trong
                                            các dịch vụ. <strong>&quot;Trao chữ
                                            tín - trọn niềm tin&quot;</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="about-service elementor-column-gap-no">
                        <section className="about-service-image" data-element_type="section">
                            <div
                                className="service-image-and-widget-info elementor-column elementor-col-50 elementor-inner-column elementor-element relative">
                                <div className="container-image-1 flex items-center justify-center">
                                    <div className="image-1 elementor-widget-container">
                                        <img decoding="async"
                                             src="/assets/images/image-1.jpg"
                                             className="attachment-full size-full" alt="service 1"
                                             sizes="(max-width: 800px) 100vw, 800px"/>
                                    </div>
                                </div>
                                <div className="widget-project-info">
                                    <div className="about-project-info" data-element_type="widget"
                                         data-widget_type="wdt-counter.default">
                                        <div className="elementor-widget-container">
                                            <div
                                                className="wdt-counter-holder wdt-content-item-holder wdt-column-holder wdt-rc-template-custom-template flex flex-col">
                                                <div className="wdt-content-item">
                                                    <div className="wdt-content-media-group w-full">
                                                        <div className="wdt-content-counter-wrapper">
                                                            <div className="wdt-content-counter"><span
                                                                className="wdt-content-counter-number" data-from="0"
                                                                data-to="560" data-speed="1000"
                                                                data-refresh-interval="100">680</span><span
                                                                className="wdt-content-counter-suffix">+</span>
                                                            </div>
                                                        </div>
                                                        <div className="wdt-content-title"><h5>Dự án hoàn thành</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="wdt-content-item">
                                                    <div className="wdt-content-media-group w-full">
                                                        <div className="wdt-content-counter-wrapper">
                                                            <div className="wdt-content-counter"><span
                                                                className="wdt-content-counter-number" data-from="0"
                                                                data-to="180" data-speed="1000"
                                                                data-refresh-interval="100">50</span><span
                                                                className="wdt-content-counter-suffix">+</span>
                                                            </div>
                                                        </div>
                                                        <div className="wdt-content-title"><h5>Kỹ sư, thợ</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="image-2-3 elementor-column elementor-col-50 elementor-inner-column elementor-element">
                                <div className="elementor-widget-wrap elementor-element-populated flex flex-col">
                                    <div
                                        className="elementor-element elementor-widget__width-auto wdt-image-align-right elementor-widget elementor-widget-image"
                                        data-element_type="widget"
                                        data-widget_type="image.default">
                                        <div className="image-2 elementor-widget-container">
                                            <img decoding="async" width="800" height="750"
                                                 src="/assets/images/service_4.jpg"
                                                 className="attachment-full size-full wp-image-5050" alt="service 2"
                                                 sizes="(max-width: 800px) 100vw, 800px"/></div>
                                    </div>
                                    <div
                                        className="elementor-element elementor-widget__width-auto wdt-image-align-right elementor-widget elementor-widget-image"
                                        data-element_type="widget"
                                        data-widget_type="image.default">
                                        <div className="image-3 elementor-widget-container">
                                            <img loading="lazy" decoding="async" width="800" height="750"
                                                 src="/assets/images/service_2.jpg"
                                                 className="attachment-full size-full wp-image-5051" alt="service 3"
                                                 sizes="(max-width: 800px) 100vw, 800px"/></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="about-service-des" data-element_type="section">
                            <div
                                className="elementor-element-populated h-full flex flex-col items-center justify-center">
                                <div
                                    className="elementor-element start wdt-cus-about1-iconbox wdt-cus-about1-iconbox-top elementor-widget elementor-widget-wdt-icon-box"
                                    data-element_type="widget"
                                    data-widget_type="wdt-icon-box.default">
                                    <div className="elementor-widget-container">
                                        <div
                                            className="wdt-icon-box-holder wdt-content-item-holder wdt-column-holder wdt-rc-template-ico-content-aside pb-12"
                                            data-settings="">
                                            <div className="wdt-column-wrapper wdt-column-gap-custom">
                                                {slideItems.map((item, index) => (
                                                    <div key={index} className="wdt-column">
                                                        <div className="wdt-content-item wdt-content-item-icon">
                                                            <div className="wdt-content-media-group">
                                                                <div className="wdt-content-icon-wrapper">
                                                                    <div className="wdt-content-icon">
                                                                        <img src={item.src} alt={item.label}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="wdt-content-detail-group">
                                                                <div className="wdt-content-title"><h5>{item.label}</h5>
                                                                </div>
                                                                <div className="wdt-content-separator separator-1">
                                                                    <span></span></div>
                                                                <div className="wdt-content-description">
                                                                    {item.description}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex">
                                    <div
                                        className="elementor-element start elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget-mobile_extra__width-initial elementor-widget elementor-widget-wdt-button"
                                        data-element_type="widget"
                                        data-widget_type="wdt-button.default">
                                        <div className="elementor-widget-container">
                                            <div
                                                className="wdt-button-holder wdt-template-filled wdt-button-link wdt-button-style-default wdt-button-size-nm wdt-animation- wdt-button-icon-after">
                                                <a className="wdt-button" href="/bang-gia-dich-vu">
                                                    <div className="wdt-button-text text-center">
                                                        <span>Xem Giá</span>
                                                    </div>
                                                </a></div>
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-element start elementor-widget__width-auto elementor-widget-tablet__width-auto wdt-cont-style elementor-widget elementor-widget-wdt-icon-box pl-6"
                                        data-element_type="widget"
                                        data-widget_type="wdt-icon-box.default">
                                        <div className="elementor-widget-container">
                                            <div
                                                className="wdt-icon-box-holder wdt-content-item-holder wdt-column-holder wdt-rc-template-ico-title-meta-aside"
                                            >
                                                <div className="wdt-content-item wdt-content-item-icon">
                                                    <div className="wdt-content-detail-group">
                                                        <div
                                                            className="flex wdt-content-elements-group wdt-content-group ">
                                                            <div className="wdt-content-icon-wrapper">
                                                                <div className="wdt-content-icon">
                                                                    <div className="icon-phone">
                                                                        <i className="fa-solid fa-phone"></i></div>
                                                                </div>
                                                            </div>
                                                            <div className="wdt-content-title-group below">
                                                                <div className="wdt-content-title">
                                                                    <h5 className="phone-number"><a
                                                                        href="tel:0845 591 568" target="_blank"
                                                                        rel="noopener noreferrer">0845 591 568</a>
                                                                    </h5>
                                                                </div>
                                                                <div className="wdt-content-subtitle">Gọi đặt lịch
                                                                    ngay
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;