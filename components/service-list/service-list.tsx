import Link from 'next/link';
import './service-list.css'

type ServiceItem = {
    label: string;
    description?: string;
    src?: string;
    href?: string;
};

type ServiceListProps = {
    items: ServiceItem[];
    title: string;
    introduce: string;
};

const ServiceList: React.FC<ServiceListProps> = ({items = [], title = "", introduce}) => {
    return (
        <section id="service-list" className="our-list-service">
            <div className="elementor-container">
                <div className="our-services-container">
                    <section className="intro">
                        <div className="intro-left">
                            <div className="intro-service wdt-heading-holder">
                                <div className="wdt-heading-subtitle-wrapper wdt-heading-align-1 "><span
                                    className="wdt-heading-subtitle">Dịch vụ của chúng tôi</span></div>
                                <h2 className="wdt-heading-title-wrapper wdt-heading-align-1 wdt-heading-deco-wrapper">
                                    <span
                                        className="wdt-heading-title">Bảo vệ hệ thống {title} cho ngôi nhà của bạn</span>
                                </h2>
                            </div>
                        </div>
                        <div
                            className="description-service elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-6ad6c11 start elementor-widget elementor-widget-wdt-heading">
                                <div className="intro-right elementor-widget-container">
                                    <div className="wdt-heading-holder">
                                        <p className="wdt-heading-content-wrapper"
                                           dangerouslySetInnerHTML={{__html: introduce}}>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <section
                className="service-items elementor-section elementor-inner-section elementor-element elementor-element-4e31882 elementor-section-full_width animated-fast elementor-section-height-default elementor-section-height-default animated fadeInRight"
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
                                        className="list-item-service wdt-image-box-holder wdt-content-item-holder wdt-carousel-holder wdt-rc-template-custom-template">
                                        {items.map((item, index) => (
                                            <div
                                                key={index}
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
                                                                        width="200"
                                                                        height="300"
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
                                                        <Link href={`${item.href}`}><h3>{item.label}</h3></Link>
                                                        <p>{item.description}</p>
                                                    </div>
                                                    <div className="service-item-line"></div>
                                                </div>
                                            </div>
                                        ))}
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

export default ServiceList;