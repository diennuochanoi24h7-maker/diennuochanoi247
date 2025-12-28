import './services.css'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious
} from "@/components/ui/carousel";

const Services = () => {
    const slideItems = [
        {
            href: '/dich-vu/dich-vu-may-bom',
            src: '/assets/images/service_3.jpg',
            services: [
                {
                    label: 'SỬA MÁY BƠM NƯỚC BỊ CHẬP CHÁY',
                    href: '/dich-vu/dich-vu-may-bom',
                },
                {
                    label: 'SỬA MÁY BƠM NƯỚC BỊ KÊU TO',
                    href: '/dich-vu/dich-vu-may-bom',
                },
                {
                    label: 'SỬA MÁY BƠM NƯỚC LÊN YẾU',
                    href: '/dich-vu/dich-vu-may-bom',
                },
                {
                    label: 'SỬA MÁY BƠM NƯỚC GIA ĐÌNH TẠI HÀ NỘI',
                    href: '/dich-vu/dich-vu-may-bom',
                },
                {
                    label: 'LẮP ĐẶT MÁY BƠM ĐẨY, BƠM TĂNG ÁP CHÍNH HÃNG',
                    href: '/dich-vu/dich-vu-may-bom',
                },
                {
                    label: 'SỬA CHẬP ĐIỆN MÁY BƠM, RÒ RỈ NƯỚC, LẮP ĐẶT PHAO CHỐNG TRÀN',
                    href: '/dich-vu/dich-vu-may-bom',
                },
            ]
        },
        {
            href: '/dich-vu/dich-vu-dien',
            src: '/assets/images/service_1.jpg',
            services: [
                {
                    label: 'SỬA CHẬP ĐIỆN KHẨN CẤP',
                    href: '/dich-vu/dich-vu-dien',
                },
                {
                    label: 'SỬA CHỮA, LẮP ĐẶT ĐIỆN',
                    href: '/dich-vu/dich-vu-dien',
                },
                {
                    label: 'LẮP ĐẶT, SỬA CHỮA BÓNG ĐÈN, Ổ CẮM, CB, CẦU DAO…',
                    href: '/dich-vu/dich-vu-dien',
                },
                {
                    label: 'ĐI DÂY ĐIỆN ÂM TƯỜNG',
                    href: '/dich-vu/dich-vu-dien',
                },
                {
                    label: 'LẮP ĐỒNG HỒ KIỂM ĐỊNH 1P, 3P',
                    href: '/dich-vu/dich-vu-dien',
                },
                {
                    label: 'SỬA CHỮA, LẮP ĐẶT BẾP TỪ, BẾP ĐIỆN TẠI NHÀ',
                    href: '/dich-vu/dich-vu-dien',
                },
                {
                    label: 'SỬA CHỮA TỦ LẠNH TẠI NHÀ',
                    href: '/dich-vu/dich-vu-dien',
                },


            ]
        },
        {
            href: '/dich-vu/dich-vu-nong-lanh',
            src: '/assets/images/service_4.jpg',
            services: [
                {
                    label: 'SỬA BÌNH NƯỚC NÓNG RÒ NƯỚC',
                    href: '/dich-vu/dich-vu-nong-lanh',
                },
                {
                    label: 'SỬA BÌNH NƯỚC NÓNG HỎNG SỢI ĐỐT',
                    href: '/dich-vu/dich-vu-nong-lanh',
                },
                {
                    label: 'SỬA BÌNH NƯỚC NÓNG CÓ NƯỚC NÓNG KHÔNG RA',
                    href: '/dich-vu/dich-vu-nong-lanh',
                },
                {
                    label: 'SỬA BÌNH NƯỚC NÓNG BÁO ĐÈN SÁNG NHƯNG KHÔNG ĐUN NÓNG',
                    href: '/dich-vu/dich-vu-nong-lanh',
                },
                {
                    label: 'SỬA BÌNH NƯỚC NÓNG KHÔNG NÓNG, NÓNG KÉM, CHẬM NÓNG',
                    href: '/dich-vu/dich-vu-nong-lanh',
                },
                {
                    label: 'SỬA BÌNH NƯỚC NÓNG CHẬP CHÁY, CÓ MÙI KHÉT TRONG BÌNH',
                    href: '/dich-vu/dich-vu-nong-lanh',
                },
            ]
        },
        {
            href: '/dich-vu/dich-vu-nuoc',
            src: '/assets/images/service_2.jpg',
            services: [
                {
                    label: 'SỬA RÒ RỈ ỐNG NƯỚC, DÒ TÌM ỐNG NƯỚC',
                    href: '/dich-vu/dich-vu-nuoc',
                },
                {
                    label: 'SỬA VÒI NƯỚC, VÒI SEN, BỒN CẦU, LAVABO',
                    href: '/dich-vu/dich-vu-nuoc',
                },
                {
                    label: 'THÔNG TẮC NGHẸT ĐƯỜNG ỐNG NƯỚC',
                    href: '/dich-vu/dich-vu-nuoc',
                },
                {
                    label: 'LẮP ĐẶT ĐƯỜNG ỐNG NƯỚC, THIẾT BỊ VỆ SINH',
                    href: '/dich-vu/dich-vu-nuoc',
                },
                {
                    label: 'DỊCH VỤ SỬA CHỮA HỆ THỐNG NƯỚC TRONG SINH HOẠT',
                    href: '/dich-vu/dich-vu-nuoc',
                },
                {
                    label: 'DỊCH VỤ VỆ SINH BỒN NƯỚC, BỂ NƯỚC',
                    href: '/dich-vu/dich-vu-nuoc',
                },
                {
                    label: 'LẮP ĐẶT ĐỒNG HỒ NƯỚC GIÁ TỐT',
                    href: '/dich-vu/dich-vu-nuoc',
                },
                {
                    label: 'SỮA CHỮA, LẮP ĐẶT MÁY LỌC NƯỚC TẤT CẢ CÁC HÃNG',
                    href: '/dich-vu/dich-vu-nuoc',
                },
            ]
        },
        {
            href: '/dich-vu/dich-vu-nuoc',
            src: '/assets/images/service_5.jpg',
            services: [
                {
                    label: 'THÔNG TẮC THOÁT SÀN, ỐNG THOÁT NƯỚC THẢI',
                    href: '/dich-vu/dich-vu-nuoc',
                },
                {
                    label: 'THÔNG NGHẸT WC, BỒN CẦU, LAVABO, CHẬU RỬA CHÉN,…',
                    href: '/dich-vu/dich-vu-nuoc',
                },
                {
                    label: 'SỬA BỒN CẦU BỊ TẮC TẠI NHÀ – SỬA BỒN CẦU BỊ NGHẸT GIÁ RẺ',
                    href: '/dich-vu/dich-vu-nuoc',
                },
                {
                    label: 'THÔNG CỐNG NGHẸT GIÁ RẺ TẠI NHÀ HÀ NỘI',
                    href: '/dich-vu/dich-vu-nuoc',
                },
                {
                    label: 'HÚT HẦM CẦU, BỂ PHỐT',
                    href: '/dich-vu/dich-vu-nuoc',
                },
            ]
        },
        {
            href: '/dich-vu/dich-vu-dien',
            src: '/assets/images/service_6.jpg',
            services: [
                {
                    label: 'SỬA CHỮA THIẾT BỊ ĐIỆN HỎNG, CHÁY',
                    href: '/dich-vu/dich-vu-dien',
                },
                {
                    label: 'SỬA CHỮA QUẠT TRẦN, THAY MỚI',
                    href: '/dich-vu/dich-vu-dien',
                },
                {
                    label: 'THAY LẮP BÓNG ĐÈN TRANG TRÍ',
                    href: '/dich-vu/dich-vu-dien',
                },
            ]
        },
    ]
    return (
        <section id="services" className="our-services">
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container">
                <div className="our-services-container">
                    <section className="intro">
                        <div className="intro-left">
                            <div className="intro-service wdt-heading-holder">
                                <div className="wdt-heading-subtitle-wrapper wdt-heading-align-1 "><span
                                    className="wdt-heading-subtitle">Dịch vụ của chúng tôi</span></div>
                                <h2 className="wdt-heading-title-wrapper wdt-heading-align-1 wdt-heading-deco-wrapper">
                                    <span
                                        className="wdt-heading-title">Giải pháp lý tưởng bảo vệ hệ thống điện, nước</span>
                                </h2>
                            </div>
                        </div>
                        <div
                            className="description-service elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-6ad6c11 start elementor-widget elementor-widget-wdt-heading">
                                <div className="intro-right elementor-widget-container">
                                    <div className="wdt-heading-holder">
                                        <p className="wdt-heading-content-wrapper">
                                            Điện Nước Hà Nội 247 chuyên các dịch vụ về điện nước: <strong>sửa chập cháy
                                            điện, rò
                                            rỉ điện, đi dây điện âm tường, lắp đặt, sửa đường ống nước, rò rỉ nước, sửa máy bơm
                                            nước, máy bơm tăng áp, sửa bình nóng lạnh, chống thấm, thông tắc bể
                                            phốt</strong>.
                                            Các cơ sở trải khắp trên toàn bộ TP Hà Nội. Với đội ngũ kỹ sư có chuyên môn
                                            cao <strong>hơn 10 năm kinh nghiệm</strong>, chúng tôi cam kết chất lượng cao, uy tín cho
                                            khách hàng. Lấy khách hàng là trọng tâm để phát triển sản phẩm, dịch vụ ngày
                                            một hoàn thiện, phát triển hơn.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <section
                className="services elementor-section elementor-inner-section elementor-element elementor-element-4e31882 elementor-section-full_width animated-fast elementor-section-height-default elementor-section-height-default animated fadeInRight"
                data-element_type="section">
                <div className="elementor-column-gap-no">
                    <div
                        className="elementor-column elementor-col-100 elementor-inner-column elementor-element"
                        data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element start start elementor-widget-mobile_extra__width-initial elementor-widget-mobile__width-inherit wdt-cus-service-style-01 elementor-widget elementor-widget-wdt-image-box w-full"
                                data-element_type="widget"
                                data-widget_type="wdt-image-box.default">
                                <div className="elementor-widget-container">
                                    <div
                                        className="wdt-image-box-holder wdt-content-item-holder wdt-carousel-holder wdt-rc-template-custom-template">
                                        <div className="more-infor">(Trượt sang trái để xem thêm dịch vụ)</div>
                                        <Carousel
                                            opts={{align: "start", loop: true,}}
                                        >
                                            <CarouselContent>
                                                {slideItems.map((item, index) => (
                                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                                                        <div
                                                            className="swiper-slide swiper-slide-visible swiper-slide-active"
                                                            aria-label="1 / 5" data-swiper-slide-index="0">
                                                            <div className="wdt-content-item">
                                                                <div className="wdt-content-media-group">
                                                                    <div
                                                                        className="slide-image-item wdt-content-elements-group wdt-media-group wdt-media-image-cover">
                                                                        <div
                                                                            className="wdt-content-image-wrapper ">
                                                                            <div className="wdt-content-image">
                                                                                <a
                                                                                    href={`${item.href}`}
                                                                                    target="_blank"
                                                                                    rel="nofollow"><img
                                                                                    loading="lazy"
                                                                                    decoding="async"
                                                                                    width="600"
                                                                                    height="583"
                                                                                    src={`${item.src}`}
                                                                                    className="attachment-full size-full wp-image-10569"
                                                                                    alt={item.src}
                                                                                    rel="noopener noreferrer"
                                                                                    sizes="(max-width: 600px) 100vw, 600px"/></a>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="wdt-media-image-cover-container">
                                                                            <div
                                                                                className="wdt-content-button wdt-button-clone">
                                                                                <a href="https://wdtthemes.kinsta.cloud/mezan/our-services/sanitary-plumbing/"
                                                                                   target="_blank"
                                                                                   rel="nofollow">
                                                                                    <div
                                                                                        className="wdt-button-text">
                                                                                        <span>View</span></div>
                                                                                </a></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="wdt-content-detail-group">
                                                                    <ul className="list-sub-service">
                                                                        {item.services.map((i, index) => (
                                                                            <li key={index} className="item-service">
                                                                                <h3><a
                                                                                    href={`${i.href}`}
                                                                                    target="_blank"
                                                                                    rel="nofollow">{i.label}</a>
                                                                                </h3></li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </CarouselItem>
                                                ))}
                                            </CarouselContent>
                                            <CarouselPrevious/>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div
                className="elementor-element start elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget-mobile_extra__width-initial elementor-widget elementor-widget-wdt-button"
                data-element_type="widget"
                data-widget_type="wdt-button.default">
                <div className="elementor-widget-container flex items-center justify-center">
                    <div
                        className="wdt-button-holder wdt-template-filled wdt-button-link wdt-button-style-default wdt-button-size-nm wdt-animation- wdt-button-icon-after mr-6">
                        <a className="wdt-button" href="tel:0845 591 568">
                            <span className="wdt-button-text text-center"><span>Bấm gọi tư vấn</span>
                            </span>
                        </a>
                    </div>
                    <div
                        className="wdt-button-holder wdt-template-filled wdt-button-link wdt-button-style-default wdt-button-size-nm wdt-animation- wdt-button-icon-after">
                        <a className="wdt-button button-price" href="/bang-gia-dich-vu">
                            <span className="wdt-button-text text-center"><span>Bấm xem bảng giá</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;