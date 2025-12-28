import AboutUs from "@/components/about-us/about-us";
import Reviews from "@/components/reviews/reviews";
import WorkProcess from "@/components/work-process/work-process";
import BannerService from "@/components/banner-service/banner-service";
import ServiceList from "@/components/service-list/service-list";


export default function Home() {
    const slideItems = [
        {
            href: '/ky-thuat/dien/sua-chap-dien-khan-cap',
            src: '/assets/services/dien/dien-1.jpg',
            label: "SỬA CHẬP ĐIỆN KHẨN CẤP TẠI HỒ TÙNG MẬU",
            description: "Chuyên xử lý các sự cố chập điện một cách nhanh chóng và an toàn, bảo vệ hệ thống điện và tài sản của bạn."
        },
        {
            href: '/ky-thuat/dien/sua-chua-lap-dat-dien',
            src: '/assets/services/dien/dien-2.jpg',
            label: "SỬA CHỮA, LẮP ĐẶT ĐIỆN TẠI HỒ TÙNG MẬU",
            description: "Chuyên cung cấp dịch vụ sửa chữa và lắp đặt hệ thống điện cho nhà ở, chung cư, và doanh nghiệp. Chúng tôi xử lý nhanh chóng các sự cố như chập điện, đứt dây, hỏng ổ cắm, và thiết kế lắp đặt hệ thống điện mới theo yêu cầu."
        },
        {
            href: '/',
            src: '/assets/services/dien/dien-3.jpg',
            label: "LẮP ĐẶT, SỬA CHỮA BÓNG ĐÈN, Ổ CẮM, CB, CẦU DAO… TẠI HỒ TÙNG MẬU",
            description: "Chuyên cung cấp dịch vụ lắp đặt và sửa chữa các thiết bị điện như bóng đèn, ổ cắm, CB, cầu dao và các thiết bị điện dân dụng khác."
        },
        {
            href: '/',
            src: '/assets/services/dien/dien-4.jpg',
            label: "ĐI DÂY ĐIỆN ÂM TƯỜNG TẠI HỒ TÙNG MẬU",
            description: "Chuyên cung cấp dịch vụ đi dây điện âm tường cho các công trình nhà ở, chung cư, văn phòng và doanh nghiệp."
        },
        {
            href: '/',
            src: '/assets/services/dien/dien-5.jpg',
            label: "LẮP ĐỒNG HỒ KIỂM ĐỊNH 1P, 3P TẠI HỒ TÙNG MẬU",
            description: "Chuyên cung cấp dịch vụ lắp đặt đồng hồ kiểm định 1P, 3P cho các hệ thống điện dân dụng và công nghiệp. Thiết bị chính hãng, đảm bảo đo lường chính xác, hỗ trợ kiểm soát hiệu quả lượng điện năng tiêu thụ.",
        },
        {
            href: '/',
            src: '/assets/services/dien/dien-6.jpg',
            label: "LẮP ĐẶT THIẾT BỊ ĐIỆN DÂN DỤNG TẠI HỒ TÙNG MẬU",
            description: "Chúng tôi chuyên lắp đặt thiết bị điện dân dụng bao gồm lắp đặt đèn chiếu sáng, ổ cắm, công tắc, quạt điện, bộ điều khiển từ xa và nhiều thiết bị điện khác."
        },
        {
            href: '/',
            src: '/assets/services/dien/dien-7.jpg',
            label: "SỬA CHỮA, LẮP ĐẶT BẾP TỪ, BẾP ĐIỆN TẠI NHÀ HỒ TÙNG MẬU",
            description: "Chúng tôi cung cấp dịch vụ sửa chữa và lắp đặt bếp từ, bếp điện tận nhà. Chính hãng, giá tốt, bảo hành dài hạn lên tới 2 năm."
        },
        {
            href: '/',
            src: '/assets/services/dien/dien-8.jpg',
            label: "SỬA CHỮA TỦ LẠNH TẠI NHÀ HỒ TÙNG MẬU",
            description: "Chúng tôi cung cấp dịch vụ sửa chữa tủ lạnh tại nhà nhanh chóng và tiện lợi, đảm bảo khắc phục mọi sự cố của tủ lạnh."
        },
    ]

    const imgBanner = "/assets/services/dien/dien-banner.jpg"
    const bannerTitle = "SỬA ĐIỆN TẠI HỒ TÙNG MẬU"
    const introduce = "Điện Nước Hà Nội 247 chuyên tất cả các dịch vụ về điện tại HỒ TÙNG MẬU: <strong>sửa chập điện, sửa chữa lắp đặt điện, các thiết bị điện, đi dây điện âm tường, lắp công tơ, đồng hồ điện,... tại nhà</strong>. Các cơ sở trải khắp trên toàn bộ TP Hà Nội. Với đội ngũ kỹ sư có <strong>chuyên môn cao hơn 10 năm kinh nghiệm</strong>, chúng tôi cam kết chất lượng cao, uy tín cho khách hàng. <strong>Lấy khách hàng là trọng tâm</strong> để phát triển sản phẩm, dịch vụ ngày một hoàn thiện, phát triển hơn."

    return (
        <main>
            <BannerService title={bannerTitle} imgBanner={imgBanner}/>
            <ServiceList items={slideItems} title={'điện'} introduce={introduce}/>
            <AboutUs/>
            <WorkProcess/>
            <Reviews/>
        </main>
    );
}