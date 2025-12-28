import AboutUs from "@/components/about-us/about-us";
import Reviews from "@/components/reviews/reviews";
import WorkProcess from "@/components/work-process/work-process";
import BannerService from "@/components/banner-service/banner-service";
import ServiceList from "@/components/service-list/service-list";


export default function Home() {
    const slideItems = [
        {
            href: '/ky-thuat/nong-lanh/dich-vu-sua-chua-nong-lanh-tai-nha',
            src: '/assets/services/nong-lanh/nong-lanh-1.jpg',
            label: "SỬA BÌNH NƯỚC NÓNG RÒ NƯỚC TẠI XUÂN PHƯƠNG",
            description: "Chuyên khắc phục sự cố rò rỉ, hỏng van, và các lỗi kỹ thuật khác, đảm bảo an toàn và hoạt động ổn định cho bình nước nóng của bạn."
        },
        {
            href: '/ky-thuat/nong-lanh/dich-vu-sua-chua-nong-lanh-tai-nha',
            src: '/assets/services/nong-lanh/nong-lanh-2.jpg',
            label: "SỬA BÌNH NƯỚC NÓNG HỎNG SỢI ĐỐT TẠI XUÂN PHƯƠNG",
            description: "Chuyên thay thế và sửa chữa sợi đốt bị hỏng, giúp bình nước nóng hoạt động hiệu quả và an toàn."
        },
        {
            href: '/ky-thuat/nong-lanh/dich-vu-sua-chua-nong-lanh-tai-nha',
            src: '/assets/services/nong-lanh/nong-lanh-3.jpg',
            label: "SỬA BÌNH NƯỚC NÓNG CÓ NƯỚC NÓNG KHÔNG RA TẠI XUÂN PHƯƠNG",
            description: "Chuyên khắc phục các sự cố như hỏng van, tắc đường ống, hoặc lỗi sợi đốt, ... đảm bảo bình nước nóng hoạt động bình thường."
        },
        {
            href: '/ky-thuat/nong-lanh/dich-vu-sua-chua-nong-lanh-tai-nha',
            src: '/assets/services/nong-lanh/nong-lanh-4.jpg',
            label: "SỬA BÌNH NƯỚC NÓNG BÁO ĐÈN SÁNG NHƯNG KHÔNG ĐUN NÓNG TẠI XUÂN PHƯƠNG",
            description: "Chuyên khắc phục các sự cố bình nóng lạnh hỏng bộ điều khiển, sợi đốt, hoặc lỗi hệ thống điện, ..."
        },
        {
            href: '/ky-thuat/nong-lanh/dich-vu-sua-chua-nong-lanh-tai-nha',
            src: '/assets/services/nong-lanh/nong-lanh-5.jpg',
            label: "SỬA BÌNH NƯỚC NÓNG KHÔNG NÓNG, NÓNG KÉM, CHẬM NÓNG TẠI XUÂN PHƯƠNG",
            description: "Chuyên khắc phục sự cố liên quan đến sợi đốt, bộ điều khiển, hoặc các vấn đề về điện trong bình nóng lạnh"
        },
        {
            href: '/ky-thuat/nong-lanh/dich-vu-sua-chua-nong-lanh-tai-nha',
            src: '/assets/services/nong-lanh/nong-lanh-6.jpg',
            label: "SỬA BÌNH NƯỚC NÓNG CHẬP CHÁY, CÓ MÙI KHÉT TRONG BÌNH TẠI XUÂN PHƯƠNG",
            description: "Chuyên xử lý các sự cố bình nóng lạnh hư hỏng do chập điện, đứt mạch hoặc hỏng bộ phận làm nóng, gây mùi khét"
        },
        {
            href: '/ky-thuat/nong-lanh/dich-vu-sua-chua-nong-lanh-tai-nha',
            src: '/assets/services/nong-lanh/nong-lanh-8.jpg',
            label: "LẮP ĐẶT BÌNH NÓNG LẠNH CHÍNH HÃNG THEO YÊU CẦU, TƯ VẤN MIỄN PHÍ TẠI XUÂN PHƯƠNG",
            description: "Chuyên lắp đặt bình nóng lạnh, tư vấn lắp đặt miễn phí, giá tốt cạnh tranh cao, chính hãng, bảo hành dài hạn lên tới 2 năm"
        },
        {
            href: '/ky-thuat/nong-lanh/dich-vu-sua-chua-nong-lanh-tai-nha',
            src: '/assets/services/nong-lanh/nong-lanh-9.jpg',
            label: "BẢO DƯỠNG, VỆ SINH BÌNH NÓNG LẠNH TẠI XUÂN PHƯƠNG",
            description: "Chuyên dịch vụ bảo dưỡng bình nóng lạnh định kỳ chuyên nghiệp, giá tốt: Sục bình, xả cặn, thay rơ le, ..."
        },
        {
            href: '/ky-thuat/nong-lanh/dich-vu-sua-chua-nong-lanh-tai-nha',
            src: '/assets/services/nong-lanh/nong-lanh-7.jpg',
            label: "SỬA BÌNH NƯỚC NÓNG NĂNG LƯỢNG MẶT TRỜI TẠI XUÂN PHƯƠNG",
            description: "Chuyên xử lý các sự cố bình nước nóng năng lượng mặt trời không hoạt động, không nóng, lỗi bộ điều khiển nhiệt độ, rò rỉ nước, hư hỏng tấm pin năng lượng mặt trời, bơm nước không hoạt động, vệ sinh hệ thống"
        },
        {
            href: '/',
            src: '/assets/services/nuoc/nuoc-7.jpg',
            label: "SỮA CHỮA, LẮP ĐẶT MÁY LỌC NƯỚC TẤT CẢ CÁC HÃNG TẠI XUÂN PHƯƠNG",
            description: "Dịch vụ sửa chữa, lắp đặt máy lọc nước tất cả các hãng tại nhà. Nhanh chóng, chính hãng, uy tín, giá tốt, bảo hành lâu"
        },
    ]

    const imgBanner = "/assets/services/nong-lanh/nong-lanh-banner.jpg"
    const bannerTitle = "<span>DỊCH VỤ SỬA CHỮA,</span> <span>LẮP ĐẶT BÌNH NÓNG LẠNH </span> <span>TẠI XUÂN PHƯƠNG</span>"
    const introduce = "Điện Nước Hà Nội 247 chuyên tất cả các dịch vụ về bình nóng lạnh tại XUÂN PHƯƠNG: <strong>sửa bình nóng lạnh rò nước, hỏng sợi đốt, không nóng, đun nóng lâu, chập cháy khét, lắp đặt, bảo dưỡng bình nóng lạnh,... tất cả các hãng tại nhà</strong>. Các cơ sở trải khắp trên toàn bộ TP Hà Nội. Với đội ngũ kỹ sư có <strong>chuyên môn cao hơn 10 năm kinh nghiệm</strong>, chúng tôi cam kết chất lượng cao, uy tín cho khách hàng. <strong>Lấy khách hàng là trọng tâm</strong> để phát triển sản phẩm, dịch vụ ngày một hoàn thiện, phát triển hơn."

    return (
        <main>
            <BannerService title={bannerTitle} imgBanner={imgBanner}/>
            <ServiceList items={slideItems} title={'bình nóng lạnh'} introduce={introduce}/>
            <AboutUs/>
            <WorkProcess/>
            <Reviews/>
        </main>
    );
}
