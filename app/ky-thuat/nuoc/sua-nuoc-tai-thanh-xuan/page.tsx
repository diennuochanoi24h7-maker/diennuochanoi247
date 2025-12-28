import AboutUs from "@/components/about-us/about-us";
import Reviews from "@/components/reviews/reviews";
import WorkProcess from "@/components/work-process/work-process";
import BannerService from "@/components/banner-service/banner-service";
import ServiceList from "@/components/service-list/service-list";


export default function Home() {
    const slideItems = [
        {
            href: '/ky-thuat/nuoc/sua-ro-ri-ong-nuoc-do-tim-ong-nuoc',
            src: '/assets/services/nuoc/nuoc-1.jpg',
            label: "SỬA RÒ RỈ ỐNG NƯỚC, DÒ TÌM ỐNG NƯỚC TẠI THANH XUÂN",
            description: "Dịch vụ dò tìm vị trí rò rỉ ống nước chính xác, khắc phục triệt để mọi sự cố ống nước."
        },
        {
            href: '/',
            src: '/assets/images/service_2.jpg',
            label: "SỬA VÒI NƯỚC, VÒI SEN, BỒN CẦU, LAVABO TẠI THANH XUÂN",
            description: "Dịch vụ sửa rò rỉ, tắc nghẽn hoặc hỏng hóc vòi nước, bồn cầu, lavabo tại nhà."
        },
        {
            href: '/',
            src: '/assets/images/service_5.jpg',
            label: "THÔNG TẮC NGHẸT ĐƯỜNG ỐNG NƯỚC TẠI THANH XUÂN",
            description: "Dịch vụ thông tắc nghẹt đường ống nước nhanh chóng, tiết kiệm và hiệu quả tại Hà Nội."
        },
        {
            href: '/',
            src: '/assets/services/nuoc/nuoc-8.jpg',
            label: "XỬ LÝ CHỐNG THẤM TƯỜNG, TRẦN, SÀN NHÀ TẠI THANH XUÂN",
            description: "Chuyên xử lý chống thấm cho tường, trần, sàn nhà triệt để bảo hành dài hạn"
        },
        {
            href: '/',
            src: '/assets/services/nuoc/nuoc-4.jpg',
            label: "LẮP ĐẶT ĐƯỜNG ỐNG NƯỚC, THIẾT BỊ VỆ SINH TẠI THANH XUÂN",
            description: "Dịch vụ lắp đặt đường ống nước và thiết bị vệ sinh: lắp đặt các hệ thống cấp thoát nước, vòi sen, lavabo, bồn cầu, với chất lượng cao, đáp ứng mọi nhu cầu của gia đình và doanh nghiệp."
        },
        {
            href: '/',
            src: '/assets/services/nuoc/nuoc-9.jpg',
            label: "LẮP ĐẶT THIẾT BỊ VỆ SINH: BỒN CẦU, BỒN BỆT, LAVABO, VAN NƯỚC, VÒI NƯỚC,... TẠI THANH XUÂN",
            description: "Dịch vụ lắp đặt thiết bị vệ sinh: lắp đặt vòi sen, vòi nước, lavabo, bồn cầu, bồn bệt, đồng hồ nước, ... với chất lượng cao, đáp ứng mọi nhu cầu của gia đình và doanh nghiệp."
        },
        {
            href: '/',
            src: '/assets/services/nuoc/nuoc-5.jpg',
            label: "DỊCH VỤ SỬA CHỮA HỆ THỐNG NƯỚC TRONG SINH HOẠT TẠI THANH XUÂN",
            description: "Chuyên sửa chữa hệ thống nước sinh hoạt chuyên nghiệp: rò rỉ, tắc nghẽn, nước yếu hoặc hệ thống hỏng hóc, ...",
        },
        {
            href: '/',
            src: '/assets/services/nuoc/nuoc-6.jpg',
            label: "DỊCH VỤ VỆ SINH BỒN NƯỚC, BỂ NƯỚC TẠI THANH XUÂN",
            description: "Dịch vụ vệ sinh bồn nước: làm sạch bồn nước gia đình, bể chứa nước sinh hoạt, loại bỏ cặn bẩn, vi khuẩn, đảm bảo nguồn nước sạch và an toàn."
        },
        {
            href: '/',
            src: '/assets/services/nuoc/nuoc-10.jpg',
            label: "LẮP ĐẶT ĐỒNG HỒ NƯỚC GIÁ TỐT TẠI THANH XUÂN",
            description: "Dịch vụ lắp đặt đồng hồ nước giá tốt, nhanh chóng cho gia đình, khách sạn và phòng trọ, nhà nghỉ."
        },
        {
            href: '/',
            src: '/assets/services/nuoc/nuoc-7.jpg',
            label: "SỮA CHỮA, LẮP ĐẶT MÁY LỌC NƯỚC TẤT CẢ CÁC HÃNG TẠI THANH XUÂN",
            description: "Dịch vụ sửa chữa, lắp đặt máy lọc nước tất cả các hãng tại nhà. Nhanh chóng, chính hãng, uy tín, giá tốt, bảo hành lâu"
        },
    ]

    const imgBanner = "/assets/services/nuoc/nuoc-banner.jpg"
    const bannerTitle = "SỬA CHỮA, LẮP ĐẶT <span>ĐƯỜNG ỐNG NƯỚC, </span><span>THIẾT BỊ VỆ SINH TẠI THANH XUÂN</span>"
    const introduce = "Điện Nước Hà Nội 247 chuyên tất cả các dịch vụ về đường nước tại Thanh Xuân: <strong>sửa chữa đường nước rò rỉ, lắp đặt đường ống nước, sửa vòi nước, vòi sen, bồn cầu, lavabo, lắp đặt các thiết bị vệ sinh, vệ sinh bồn nước, bể nước, đồng hồ nước,... tại nhà</strong>. Các cơ sở trải khắp trên toàn bộ TP Hà Nội. Với đội ngũ kỹ sư có <strong>chuyên môn cao hơn 10 năm kinh nghiệm</strong>, chúng tôi cam kết chất lượng cao, uy tín cho khách hàng. <strong>Lấy khách hàng là trọng tâm</strong> để phát triển sản phẩm, dịch vụ ngày một hoàn thiện, phát triển hơn."

    return (
        <main>
            <BannerService title={bannerTitle} imgBanner={imgBanner}/>
            <ServiceList items={slideItems} title={'đường ống nước, thiết bị vệ sinh'} introduce={introduce}/>
            <AboutUs/>
            <WorkProcess/>
            <Reviews/>
        </main>
    );
}
