import AboutUs from "@/components/about-us/about-us";
import Reviews from "@/components/reviews/reviews";
import WorkProcess from "@/components/work-process/work-process";
import BannerService from "@/components/banner-service/banner-service";
import ServiceList from "@/components/service-list/service-list";


export default function Home() {
    const slideItems = [
        {
            href: '/',
            src: '/assets/services/may-bom/sua-may-bom.jpg',
            label: "SỬA MÁY BƠM NƯỚC BỊ CHẬP CHÁY",
            description: "Chuyên chập, cháy động cơ máy bơm, máy bơm tăng áp không hoạt động, dây quấn động cơ bị chập"
        },
        {
            href: '/ky-thuat/may-bom/nguyen-nhan-may-bom-tang-ap-keu-tach-tach-lien-tuc',
            src: '/assets/services/may-bom/sua-may-bom-1.jpg',
            label: "SỬA MÁY BƠM NƯỚC BỊ KÊU TO",
            description: "Chuyên sửa máy bơm kêu to do hỏng bạc đạn, vòng bi, mòn cánh quạt, hoặc động cơ gặp sự cố, gây tiếng ồn khó chịu"
        },
        {
            href: '/',
            src: '/assets/services/may-bom/sua-may-bom-2.jpg',
            label: "SỬA MÁY BƠM NƯỚC LÊN YẾU",
            description: "Chuyên sửa sửa máy bơm lên nước yếu do bị tắc nghẽn, rò rỉ ở các khớp nối hoặc ống dẫn, động cơ yếu hoặc bị hỏng bạc đạn"
        },
        {
            href: '/ky-thuat/may-bom/sua-chua-may-bom-nuoc-tai-nha',
            src: '/assets/services/may-bom/sua-may-bom-3.jpg',
            label: "SỬA MÁY BƠM NƯỚC GIA ĐÌNH TẠI HÀ NỘI",
            description: "Chuyên sửa máy bơm không hoạt động, đứt dây điện, lỗi nguồn cấp, hỏng tụ điện, rơ-le khởi động, van một chiều, tra dầu máy bơm"
        },
        {
            href: '/',
            src: '/assets/services/may-bom/sua-may-bom-4.jpg',
            label: "LẮP ĐẶT MÁY BƠM ĐẨY, BƠM TĂNG ÁP CHÍNH HÃNG",
            description: "Dịch vụ lắp đặt máy bơm đẩy và bơm tăng áp chính hãng, uy tín, giá tốt, bảo hành dài hạn"
        },
        {
            href: '/',
            src: '/assets/services/may-bom/sua-may-bom-5.jpg',
            label: "SỬA MÁY BƠM RÒ RỈ NƯỚC, LẮP ĐẶT PHAO CHỐNG TRÀN",
            description: "Chuyên sửa máy bơm rò rỉ nước do phớt bơm bị mòn hoặc hỏng, vỏ máy bị nứt. Chuyên lắp phao điện, cảm biến áp suất"
        },
    ]

    const imgBanner = "/assets/services/may-bom/may-bom-banner.jpg"
    const bannerTitle = "<span>SỬA CHỮA, LẮP ĐẶT</span> <span>CÁC LOẠI MÁY BƠM NƯỚC</span> <span>CHUYÊN NGHIỆP TẠI NHÀ</span> SỐ 1 HÀ NỘI"
    const introduce = 'Điện Nước Hà Nội 247 chuyên tất cả các dịch vụ về máy bơm: <strong>sửa chữa, lắp đặt máy bơm nước, máy bơm tăng áp, máy bơm đẩy, máy bơm hỏa tiễn, máy bơm chìm, ... nhập khẩu chính hãng</strong>. Các cơ sở trải khắp trên toàn bộ TP Hà Nội. Với đội ngũ kỹ sư có <strong>chuyên môn cao hơn 10 năm kinh nghiệm</strong>, chúng tôi cam kết chất lượng cao, uy tín cho khách hàng. <strong>Lấy khách hàng là trọng tâm</strong> để phát triển sản phẩm, dịch vụ ngày một hoàn thiện, phát triển hơn.'

    return (
        <main>
            <BannerService title={bannerTitle} imgBanner={imgBanner}/>
            <ServiceList items={slideItems} title={'máy bơm'} introduce={introduce}/>
            <AboutUs/>
            <WorkProcess/>
            <Reviews/>
        </main>
    );
}
