import './reviews.css'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext
} from "@/components/ui/carousel";

const Reviews = () => {
    const slideItems = [
        {
            customer: "Chị Oanh Nguyễn",
            address: "Tầng 12 HD MonCity",
            star: 5,
            src: '/assets/images/anh_review_1.jpg',
            description: "Cảm ơn các anh đã sửa điện giúp e. Dịch vụ oke nha, e vote 5 sao."
        },
        {
            customer: "Chị Thảo Trần",
            address: "160 Tôn Đức Thắng, Đống Đa",
            star: 5,
            src: '/assets/images/anh_review_2.jpg',
            description: "Dịch vụ sửa chữa tốt, không bị rò nước nữa. Cảm ơn các em."
        },
        {
            customer: "Anh Trung Lê",
            address: "Số 23 Cổ Nhuế, Bắc Từ Liêm",
            star: 5,
            src: '/assets/images/anh_review_3.jpg',
            description: "Thợ đến rất nhanh, chuẩn đoán nguyên nhân tắc bể phốt chi tiết, báo giá cũng oke. Sẽ giới thiệu bạn bè sử dụng dịch vụ."
        },
        {
            customer: "Chị Hằng Nguyễn",
            address: "85 Xuân Thủy, Cầu Giấy",
            star: 5,
            src: '/assets/images/anh_review_4.jpg',
            description: "Dịch vụ sửa chữa tuyệt vời. Tôi rất hài lòng về tốc độ làm việc của đội kỹ thuật. Chỉ trong 30 phút đã khắc phục được đường nước hỏng. 5 * nhé."
        },
        {
            customer: "Chị Trang Phạm",
            address: "Ngõ 8, Ao Sen, Mộ Lao, Hà Đông",
            star: 5,
            src: '/assets/images/anh_review_5.jpg',
            description: "Các chú tư vấn rất kỹ lưỡng, giá cả hợp lý. Sẽ gọi bạn bè mọi người ủng hộ nhiệt tình."
        },
        {
            customer: "Anh Ngọc Phạm",
            address: "21, Ngõ 5, Trần Quý Kiên, Cầu Giấy",
            star: 5,
            src: '/assets/images/anh_review_6.jpg',
            description: "Nhân viên rất nhiệt tình, sửa điện chập lúc tối muộn vẫn đến. Tôi sẽ giới thiệu cho tất cả mọi người vì dịch vụ quá tốt. Chi phí hợp lý, rõ ràng, không mập mờ. Rất cảm ơn công ty đã hỗ trợ."
        },
        {
            customer: "Anh Hoàng Anh Nguyễn",
            address: "Ngõ Chợ Khâm Thiên/70 Ngõ 154",
            star: 5,
            src: '/assets/images/anh_review_7.jpg',
            description: "Đội ngũ thợ giỏi, nhiệt tình. Rõ ràng, chi tiết trong từng hạng mục công việc. Xử lý sự cố nhanh, dứt điểm, tôi hoàn toàn tin tưởng đội ngũ công ty, đã gọi nhiều lần, rất tốt."
        },
        {
            customer: "Bác Quốc Dũng Lê",
            address: "25/132 P. Vũ Ngọc Phan, Tổ 55, Đống Đa",
            star: 5,
            src: '/assets/images/anh_review_8.jpg',
            description: "Các cháu thợ giỏi, làm rất tỉ mỉ chi tiết, bác rất hài lòng. Bác sẽ giới thiệu cho xóm và người thân của bác."
        },
        {
            customer: "Cô Thu Phương Nguyễn",
            address: "368 Lương Thế Vinh, Trung Văn, NAM Từ Liêm",
            star: 5,
            src: '/assets/images/anh_review_9.jpg',
            description: "Các cháu trai rất chu đáo tư vấn cho cô, cô rất tin tưởng đội ngũ thợ làm việc. Trông rất chuyên nghiệp, con cô gọi giúp nhưng các cháu liên hệ rất nhanh. Cảm ơn các cháu trai nhé, cô ủng hộ các cháu."
        },
    ]

    return (
        <section id="reviews"
                 className="reviews elementor-section elementor-top-section elementor-element elementor-element-704e3fe wdt-cus-testimonial-type2-section elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                 data-element_type="section">
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-no">
                <div
                    className="reviews-image-container elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-613921f elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile"
                    data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-bdc44b5 wdt-cus-testimonial2-img elementor-widget__width-initial elementor-widget-laptop__width-initial elementor-widget-tablet_extra__width-initial animated-fast elementor-widget elementor-widget-image animated fadeInUp"
                            data-element_type="widget"
                            data-widget_type="image.default">
                            <div className="image-review-mockup elementor-widget-container">
                                <img loading="lazy" decoding="async" width="600" height="953"
                                     src="/assets/images/testimonial-type.png"
                                     className="attachment-full size-full wp-image-3097" alt="worker"
                                     sizes="(max-width: 600px) 100vw, 600px"/></div>
                        </div>
                    </div>
                </div>
                <div
                    className="review-list elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-86af20b wdt-cus-testimonial2-bg animated-fast animated fadeInRight"
                    data-element_type="column">
                    <div className="reviewers elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-background-overlay"></div>
                        <section
                            className="reviews-title elementor-section elementor-inner-section elementor-element elementor-element-e47b75b elementor-section-full_width animated-fast elementor-section-height-default elementor-section-height-default animated fadeInRight"
                            data-element_type="section">
                            <div className="elementor-container elementor-column-gap-no">
                                <div
                                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-e48ffb0"
                                    data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="elementor-element elementor-element-bfc7117 start elementor-widget elementor-widget-wdt-heading"
                                            data-element_type="widget"
                                            data-widget_type="wdt-heading.default">
                                            <div className="elementor-widget-container">
                                                <div className="wdt-heading-holder ">
                                                    <div className="wdt-heading-subtitle-wrapper wdt-heading-align-1 ">
                                                        <span className="wdt-heading-subtitle">Đánh giá</span></div>
                                                    <h2 className="wdt-heading-title-wrapper wdt-heading-align-1 wdt-heading-deco-wrapper">
                                                        <span className="wdt-heading-title">Nhận xét của khách hàng về dịch vụ</span>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section
                            className="reviews-container elementor-section elementor-inner-section elementor-element elementor-element-2d5485b elementor-section-full_width animated-fast elementor-section-height-default elementor-section-height-default animated fadeInRight"
                            data-element_type="section">
                            <div className="w-full elementor-container elementor-column-gap-no">
                                <div
                                    className="w-full elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-291124e"
                                    data-element_type="column">
                                    <div className="w-full elementor-widget-wrap elementor-element-populated">
                                        <div
                                            className="w-full elementor-element elementor-element-44feba8 start wdt-cus-testimonial-type02 elementor-widget elementor-widget-wdt-testimonial"
                                            data-element_type="widget"
                                            data-widget_type="wdt-testimonial.default">
                                            <div className="w-full elementor-widget-container">
                                                <div
                                                    className="w-full wdt-testimonial-holder  wdt-content-item-holder wdt-carousel-holder wdt-rc-template-aside-title"
                                                    data-settings="">
                                                    <div
                                                        className="w-full wdt-testimonial-container swiper swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"
                                                    >
                                                        <div className="w-full wdt-testimonial-wrapper swiper-wrapper"
                                                             aria-live="polite">
                                                            <Carousel
                                                                opts={{align: "start", loop: true,}}
                                                            >
                                                                <CarouselContent>
                                                                    {slideItems.map((item, index) => (
                                                                        <CarouselItem
                                                                            key={index}
                                                                            className="w-full">
                                                                            <div
                                                                                className="swiper-slide swiper-slide-visible swiper-slide-active"
                                                                                role="group" aria-label="1 / 4"
                                                                                data-swiper-slide-index="0">
                                                                                <div className="wdt-content-item">
                                                                                    {/*<div*/}
                                                                                    {/*    className="wdt-content-detail-group">*/}
                                                                                    {/*    <div*/}
                                                                                    {/*        className="wdt-content-elements-group wdt-content-group ">*/}
                                                                                    {/*        <div*/}
                                                                                    {/*            className="wdt-content-image-wrapper ">*/}
                                                                                    {/*            <div*/}
                                                                                    {/*                className="wdt-content-image">*/}
                                                                                    {/*                <span>*/}
                                                                                    {/*                    <img*/}
                                                                                    {/*                        loading="lazy"*/}
                                                                                    {/*                        decoding="async"*/}
                                                                                    {/*                        width="200"*/}
                                                                                    {/*                        height="200"*/}
                                                                                    {/*                        src={item.src}*/}
                                                                                    {/*                        className="attachment-full size-full wp-image-9049"*/}
                                                                                    {/*                        alt={item.customer}*/}
                                                                                    {/*                        sizes="(max-width: 200px) 100vw, 200px"/>*/}
                                                                                    {/*                </span>*/}
                                                                                    {/*            </div>*/}
                                                                                    {/*        </div>*/}
                                                                                    {/*        <div*/}
                                                                                    {/*            className="wdt-content-title-group below">*/}
                                                                                    {/*            <div*/}
                                                                                    {/*                className="wdt-content-title">*/}
                                                                                    {/*                <h5>{item.customer}</h5>*/}
                                                                                    {/*            </div>*/}
                                                                                    {/*            <span></span>*/}
                                                                                    {/*            <div*/}
                                                                                    {/*                className="wdt-content-subtitle">{item.address}*/}
                                                                                    {/*            </div>*/}
                                                                                    {/*        </div>*/}
                                                                                    {/*    </div>*/}
                                                                                    {/*    <div*/}
                                                                                    {/*        className="wdt-content-description">*/}
                                                                                    {/*        {item.description}*/}
                                                                                    {/*    </div>*/}
                                                                                    {/*    <div*/}
                                                                                    {/*        className="wdt-content-separator separator-1">*/}
                                                                                    {/*        <span></span></div>*/}
                                                                                    {/*    <div*/}
                                                                                    {/*        className="wdt-rating-container">*/}
                                                                                    {/*        <ul className="wdt-rating">*/}
                                                                                    {/*            <li><span*/}
                                                                                    {/*                className="fas fa-star"*/}
                                                                                    {/*                data-value="1"></span>*/}
                                                                                    {/*            </li>*/}
                                                                                    {/*            <li><span*/}
                                                                                    {/*                className="fas fa-star"*/}
                                                                                    {/*                data-value="2"></span>*/}
                                                                                    {/*            </li>*/}
                                                                                    {/*            <li><span*/}
                                                                                    {/*                className="fas fa-star"*/}
                                                                                    {/*                data-value="3"></span>*/}
                                                                                    {/*            </li>*/}
                                                                                    {/*            <li><span*/}
                                                                                    {/*                className="fas fa-star"*/}
                                                                                    {/*                data-value="4"></span>*/}
                                                                                    {/*            </li>*/}
                                                                                    {/*            <li><span*/}
                                                                                    {/*                className="fas fa-star"*/}
                                                                                    {/*                data-value="5"></span>*/}
                                                                                    {/*            </li>*/}
                                                                                    {/*        </ul>*/}
                                                                                    {/*    </div>*/}
                                                                                    {/*</div>*/}

                                                                                    <div
                                                                                        className="swiper-slide swiper-slide-visible swiper-slide-active"
                                                                                        role="group" aria-label="5 / 5"
                                                                                        data-swiper-slide-index="4">
                                                                                        <div
                                                                                            className="wdt-content-item">
                                                                                            <div
                                                                                                className="wdt-content-media-group flex items-center justify-center">
                                                                                                <div
                                                                                                    className="wdt-content-image-wrapper ">
                                                                                                    <div
                                                                                                        className="wdt-content-image">
                                                                                                        <span><img
                                                                                                            loading="lazy"
                                                                                                            decoding="async"
                                                                                                            width="300"
                                                                                                            height="300"
                                                                                                            src={item.src}
                                                                                                            className="attachment-full size-full wp-image-9591"
                                                                                                            alt={item.customer}
                                                                                                            srcSet={item.src}
                                                                                                            sizes="(max-width: 300px) 100vw, 300px"/></span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="wdt-content-detail-group">
                                                                                                <div
                                                                                                    className="wdt-content-title-group below">
                                                                                                    <div
                                                                                                        className="wdt-content-title">
                                                                                                        <h5>{item.customer}</h5>
                                                                                                    </div>
                                                                                                    <span></span>
                                                                                                    <div
                                                                                                        className="wdt-content-subtitle">{item.address}
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="wdt-content-description">{item.description}
                                                                                                </div>
                                                                                                <div
                                                                                                    className="wdt-rating-container">
                                                                                                    <ul className="wdt-rating">
                                                                                                        <li><span
                                                                                                            className="fas fa-star"
                                                                                                            data-value="1"></span>
                                                                                                        </li>
                                                                                                        <li><span
                                                                                                            className="fas fa-star"
                                                                                                            data-value="2"></span>
                                                                                                        </li>
                                                                                                        <li><span
                                                                                                            className="fas fa-star"
                                                                                                            data-value="3"></span>
                                                                                                        </li>
                                                                                                        <li><span
                                                                                                            className="fas fa-star"
                                                                                                            data-value="4"></span>
                                                                                                        </li>
                                                                                                        <li><span
                                                                                                            className="fas fa-star"
                                                                                                            data-value="5"></span>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </CarouselItem>
                                                                    ))}
                                                                </CarouselContent>
                                                                <CarouselNext className="button-next"/>
                                                            </Carousel>
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

export default Reviews;
