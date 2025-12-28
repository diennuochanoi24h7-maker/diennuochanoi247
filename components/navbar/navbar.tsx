"use client"
import Link from 'next/link';
import styles from './navbar.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Button} from "@/components/ui/button"
import {Menu} from "lucide-react"
import {
    Drawer,
    DrawerClose,
    DrawerContent, DrawerDescription, DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import * as React from "react";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {ScrollArea} from "@/components/ui/scroll-area"
import {usePathname} from 'next/navigation';
import {useState} from "react";

const Navbar = () => {
    return (
        <section className={styles['navbar-container']}>
            <nav className={`flex items-center justify-between ${styles.navbar}`}>
                <Link href="/">
                    <img className={styles.logo} src={'/assets/images/logo.png'} alt="Logo"/>
                </Link>
                <NaviagtionMenu/>
                <div className={`${styles["contact"]} flex items-center justify-between contact`}>
                    <div className={`${styles["icon-phone"]} mr-4`}><i className="fa-solid fa-phone"></i></div>
                    <div>
                        <div>Bạn cần giúp đỡ? Gọi ngay</div>
                        <div><a href="tel:0845591568" target="_blank" className="phone" rel="noopener noreferrer">0845 591 568</a></div>
                    </div>
                </div>
            </nav>
            <MenuTongle/>
        </section>
    )
}

interface SubMenuItem {
    label: string;
    href?: string;
    children?: { label: string; href: string }[];
}

const MenuTongle = () => {
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    const [isShowChildSub, setIsShowChildSub] = useState(false);
    const [subMenu, setSubMenu] = useState<SubMenuItem[]>([]);
    const [menuChild, setMenuChild] = useState<{ label: string; href: string; }[]>([]);

    const menuItems = [
        {label: "TRANG CHỦ", href: '/'},
        {label: "GIỚI THIỆU", href: '#about-us'},
        {
            label: "DỊCH VỤ", href: '#', hasSubMenu: true, subMenu: [
                {label: "Sửa Chữa, Lắp Đặt Điện", href: '/dich-vu/dich-vu-dien'},
                {label: "Sửa Chữa, Lắp Đặt Đường Ống Nước, Thiết Bị Vệ Sinh", href: '/dich-vu/dich-vu-nuoc'},
                {label: "Sửa Chữa, Lắp Đặt Máy Bơm", href: '/dich-vu/dich-vu-may-bom'},
                {label: "Sửa Chữa, Lắp Đặt Bình Nóng Lạnh", href: '/dich-vu/dich-vu-nong-lanh'},
            ]
        },
        {
            label: "KỸ THUẬT", href: '#', hasSubMenu: true, subMenu: [
                {
                    label: "Điện",
                    children: [
                        {label: "Sửa chập điện khẩn cấp", href: '/ky-thuat/dien/sua-chap-dien-khan-cap'},
                        {label: "Sửa chữa lắp đặt điện", href: '/ky-thuat/dien/sua-chua-lap-dat-dien'},
                        {
                            label: "Kỹ thuật phòng chống chập cháy điện",
                            href: '/ky-thuat/dien/phong-chong-chua-chay-khi-bi-chap-dien'
                        },
                        {label: "Sửa điện nước tại Hà Nội", href: '/ky-thuat/dien/sua-dien-nuoc-tai-ha-noi'},
                        {label: "Sửa điện tại Cầu Giấy", href: '/ky-thuat/dien/sua-dien-tai-cau-giay'},
                        {label: "Sửa điện tại Hai Bà Trưng", href: '/ky-thuat/dien/sua-dien-tai-hai-ba-trung'},
                        {label: "Sửa điện tại Đống Đa", href: '/ky-thuat/dien/sua-dien-tai-dong-da'},
                        {label: "Sửa điện tại Ba Đình", href: '/ky-thuat/dien/sua-dien-tai-ba-dinh'},
                        {label: "Sửa điện tại Thanh Xuân", href: '/ky-thuat/dien/sua-dien-tai-thanh-xuan'},
                        {label: "Sửa điện tại Hà Đông", href: '/ky-thuat/dien/sua-dien-tai-ha-dong'},
                        {label: "Sửa điện tại Tây Hồ", href: '/ky-thuat/dien/sua-dien-tai-tay-ho'},
                        {label: "Sửa điện tại Long Biên", href: '/ky-thuat/dien/sua-dien-tai-long-bien'},
                        {label: "Sửa điện tại Bắc Từ Liêm", href: '/ky-thuat/dien/sua-dien-tai-bac-tu-liem'},
                        {label: "Sửa điện tại Nam Từ Liêm", href: '/ky-thuat/dien/sua-dien-tai-nam-tu-liem'},
                        {label: "Sửa điện tại Hoàng Mai", href: '/ky-thuat/dien/sua-dien-tai-hoang-mai'},
                        {label: "Sửa điện tại Âu Cơ", href: '/ky-thuat/dien/sua-dien-tai-au-co'},
                        {label: "Sửa điện tại Cổ Nhuế", href: '/ky-thuat/dien/sua-dien-tai-co-nhue'},
                        {label: "Sửa điện tại Đê La Thành", href: '/ky-thuat/dien/sua-dien-tai-de-la-thanh'},
                        {label: "Sửa điện tại Định Công", href: '/ky-thuat/dien/sua-dien-tai-dinh-cong'},
                        {label: "Sửa điện tại Hồ Tùng Mậu", href: '/ky-thuat/dien/sua-dien-tai-ho-tung-mau'},
                        {label: "Sửa điện tại Khương Đình", href: '/ky-thuat/dien/sua-dien-tai-khuong-dinh'},
                        {label: "Sửa điện tại Kim Mã", href: '/ky-thuat/dien/sua-dien-tai-kim-ma'},
                        {label: "Sửa điện tại Láng", href: '/ky-thuat/dien/sua-dien-tai-lang'},
                        {label: "Sửa điện tại Lê Quang Đạo", href: '/ky-thuat/dien/sua-dien-tai-le-quang-dao'},
                        {label: "Sửa điện tại Lê Trọng Tấn", href: '/ky-thuat/dien/sua-dien-tai-le-trong-tan'},
                        {label: "Sửa điện tại Lê Văn Lương", href: '/ky-thuat/dien/sua-dien-tai-le-van-luong'},
                        {label: "Sửa điện tại Mễ Trì", href: '/ky-thuat/dien/sua-dien-tai-me-tri'},
                        {label: "Sửa điện tại Mỹ Đình", href: '/ky-thuat/dien/sua-dien-tai-my-dinh'},
                        {
                            label: "Sửa điện tại Nguyễn Khánh Toàn",
                            href: '/ky-thuat/dien/sua-dien-tai-nguyen-khanh-toan'
                        },
                        {label: "Sửa điện tại Nguyễn Trãi", href: '/ky-thuat/dien/sua-dien-tai-nguyen-trai'},
                        {label: "Sửa điện tại Nhổn", href: '/ky-thuat/dien/sua-dien-tai-nhon'},
                        {label: "Sửa điện tại Phú Đô", href: '/ky-thuat/dien/sua-dien-tai-phu-do'},
                        {label: "Sửa điện tại Quan Hoa", href: '/ky-thuat/dien/sua-dien-tai-quan-hoa'},
                        {label: "Sửa điện tại Thượng Đình", href: '/ky-thuat/dien/sua-dien-tai-thuong-dinh'},
                        {label: "Sửa điện tại Tôn Đức Thắng", href: '/ky-thuat/dien/sua-dien-tai-ton-duc-thang'},
                        {label: "Sửa điện tại Trần Duy Hưng", href: '/ky-thuat/dien/sua-dien-tai-tran-duy-hung'},
                        {label: "Sửa điện tại Triều Khúc", href: '/ky-thuat/dien/sua-dien-tai-trieu-khuc'},
                        {label: "Sửa điện tại Trung Hòa", href: '/ky-thuat/dien/sua-dien-tai-trung-hoa'},
                        {label: "Sửa điện tại Võ Chí Công", href: '/ky-thuat/dien/sua-dien-tai-vo-chi-cong'},
                        {label: "Sửa điện tại Xuân Đỉnh", href: '/ky-thuat/dien/sua-dien-tai-xuan-dinh'},
                        {label: "Sửa điện tại Xuân Phương", href: '/ky-thuat/dien/sua-dien-tai-xuan-phuong'},
                        {label: "Sửa điện tại Yên Hòa", href: '/ky-thuat/dien/sua-dien-tai-yen-hoa'},
                        {label: "Sửa điện tại Yên Phụ", href: '/ky-thuat/dien/sua-dien-tai-yen-phu'},
                        {label: "Sửa điện tại Phạm Văn Đồng", href: '/ky-thuat/dien/sua-dien-tai-pham-van-dong'},
                        {label: "Sửa điện tại Giảng Võ", href: '/ky-thuat/dien/sua-dien-tai-giang-vo'},
                        {label: "Sửa điện tại Hoàng Hoa Thám", href: '/ky-thuat/dien/sua-dien-tai-hoang-hoa-tham'},
                        {label: "Sửa điện tại Hoàng Quốc Việt", href: '/ky-thuat/dien/sua-dien-tai-hoang-quoc-viet'},
                        {label: "Sửa điện tại Khuất Duy Tiến", href: '/ky-thuat/dien/sua-dien-tai-khuat-duy-tien'},
                        {label: "Sửa điện tại Kiều Mai", href: '/ky-thuat/dien/sua-dien-tai-kieu-mai'},
                        {label: "Sửa điện tại Lê Duẩn", href: '/ky-thuat/dien/sua-dien-tai-le-duan'},
                        {label: "Sửa điện tại Liễu Giai", href: '/ky-thuat/dien/sua-dien-tai-lieu-giai'},
                        {label: "Sửa điện tại Minh Khai", href: '/ky-thuat/dien/sua-dien-tai-minh-khai'},
                        {label: "Sửa điện tại Nguyễn Chí Thanh", href: '/ky-thuat/dien/sua-dien-tai-nguyen-chi-thanh'},
                        {label: "Sửa điện tại Nguyễn Tuân", href: '/ky-thuat/dien/sua-dien-tai-nguyen-tuan'},
                        {label: "Sửa điện tại Nguyễn Văn Huyên", href: '/ky-thuat/dien/sua-dien-tai-nguyen-van-huyen'},
                        {label: "Sửa điện tại Giải Phóng", href: '/ky-thuat/dien/sua-dien-tai-giai-phong'},
                    ],
                },
                {
                    label: "Nước",
                    children: [
                        {
                            label: "Sửa rò rỉ ống nước, dò tìm ống nước",
                            href: '/ky-thuat/nuoc/sua-ro-ri-ong-nuoc-do-tim-ong-nuoc'
                        },
                        {label: "Sửa nước tại Ba Đình", href: '/ky-thuat/nuoc/sua-nuoc-tai-ba-dinh'},
                        {label: "Sửa nước tại Cầu Giấy", href: '/ky-thuat/nuoc/sua-nuoc-tai-cau-giay'},
                        {label: "Sửa nước tại Hai Bà Trưng", href: '/ky-thuat/nuoc/sua-nuoc-tai-hai-ba-trung'},
                        {label: "Sửa nước tại Đống Đa", href: '/ky-thuat/nuoc/sua-nuoc-tai-dong-da'},
                        {label: "Sửa nước tại Thanh Xuân", href: '/ky-thuat/nuoc/sua-nuoc-tai-thanh-xuan'},
                        {label: "Sửa nước tại Hà Đông", href: '/ky-thuat/nuoc/sua-nuoc-tai-ha-dong'},
                        {label: "Sửa nước tại Tây Hồ", href: '/ky-thuat/nuoc/sua-nuoc-tai-tay-ho'},
                        {label: "Sửa nước tại Long Biên", href: '/ky-thuat/nuoc/sua-nuoc-tai-long-bien'},
                        {label: "Sửa nước tại Bắc Từ Liêm", href: '/ky-thuat/nuoc/sua-nuoc-tai-bac-tu-liem'},
                        {label: "Sửa nước tại Nam Từ Liêm", href: '/ky-thuat/nuoc/sua-nuoc-tai-nam-tu-liem'},
                        {label: "Sửa nước tại Hoàng Mai", href: '/ky-thuat/nuoc/sua-nuoc-tai-hoang-mai'},
                    ]
                },
                {
                    label: "Máy Bơm",
                    children: [
                        {
                            label: "Sửa chữa máy bơm nước tại nhà",
                            href: '/ky-thuat/may-bom/sua-chua-may-bom-nuoc-tai-nha'
                        },
                        {
                            label: "Máy bơm tăng áp kêu tạch tạch liên tục - Nguyên nhân và cách khắc phục đơn giản",
                            href: '/ky-thuat/may-bom/nguyen-nhan-may-bom-tang-ap-keu-tach-tach-lien-tuc'
                        },
                        {label: "Sửa máy bơm tại Cầu Giấy", href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-cau-giay'},
                        {
                            label: "Sửa máy bơm tại Hai Bà Trưng",
                            href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-hai-ba-trung'
                        },
                        {label: "Sửa máy bơm tại Đống Đa", href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-dong-da'},
                        {label: "Sửa máy bơm tại Ba Đình", href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-ba-dinh'},
                        {
                            label: "Sửa máy bơm tại Thanh Xuân",
                            href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-thanh-xuan'
                        },
                        {label: "Sửa máy bơm tại Hà Đông", href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-ha-dong'},
                        {label: "Sửa máy bơm tại Tây Hồ", href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-tay-ho'},
                        {label: "Sửa máy bơm tại Long Biên", href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-long-bien'},
                        {
                            label: "Sửa máy bơm tại Bắc Từ Liêm",
                            href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-bac-tu-liem'
                        },
                        {
                            label: "Sửa máy bơm tại Nam Từ Liêm",
                            href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-nam-tu-liem'
                        },
                        {label: "Sửa máy bơm tại Hoàng Mai", href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-hoang-mai'},
                    ]
                },
                {
                    label: "Nóng Lạnh",
                    children: [
                        {
                            label: "Dịch vụ sửa chữa bình nóng lạnh tại nhà",
                            href: '/ky-thuat/nong-lanh/dich-vu-sua-chua-nong-lanh-tai-nha'
                        },
                        {label: "Sửa nóng lạnh tại Cầu Giấy", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-cau-giay'},
                        {
                            label: "Sửa nóng lạnh tại Hai Bà Trưng",
                            href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-hai-ba-trung'
                        },
                        {label: "Sửa nóng lạnh tại Đống Đa", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-dong-da'},
                        {label: "Sửa nóng lạnh tại Ba Đình", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-ba-dinh'},
                        {
                            label: "Sửa nóng lạnh tại Thanh Xuân",
                            href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-thanh-xuan'
                        },
                        {label: "Sửa nóng lạnh tại Hà Đông", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-ha-dong'},
                        {label: "Sửa nóng lạnh tại Tây Hồ", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-tay-ho'},
                        {label: "Sửa nóng lạnh tại Long Biên", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-long-bien'},
                        {
                            label: "Sửa nóng lạnh tại Bắc Từ Liêm",
                            href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-bac-tu-liem'
                        },
                        {
                            label: "Sửa nóng lạnh tại Nam Từ Liêm",
                            href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-nam-tu-liem'
                        },
                        {label: "Sửa nóng lạnh tại Hoàng Mai", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-hoang-mai'},
                        {label: "Sửa nóng lạnh tại Âu Cơ", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-au-co'},
                        {label: "Sửa nóng lạnh tại Cổ Nhuế", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-co-nhue'},
                        {label: "Sửa nóng lạnh tại Đê La Thành", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-de-la-thanh'},
                        {label: "Sửa nóng lạnh tại Định Công", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-dinh-cong'},
                        {label: "Sửa nóng lạnh tại Giải Phóng", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-giai-phong'},
                        {label: "Sửa nóng lạnh tại Giảng Võ", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-giang-vo'},
                        {label: "Sửa nóng lạnh tại Hồ Tùng Mậu", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-ho-tung-mau'},
                        {label: "Sửa nóng lạnh tại Hoàng Hoa Thám", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-hoang-hoa-tham'},
                        {label: "Sửa nóng lạnh tại Hoàng Quốc Việt", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-hoang-quoc-viet'},
                        {label: "Sửa nóng lạnh tại Khuất Duy Tiến", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-khuat-duy-tien'},
                        {label: "Sửa nóng lạnh tại Khương Đình", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-khuong-dinh'},
                        {label: "Sửa nóng lạnh tại Kiều Mai", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-kieu-mai'},
                        {label: "Sửa nóng lạnh tại Kim Mã", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-kim-ma'},
                        {label: "Sửa nóng lạnh tại Láng", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-lang'},
                        {label: "Sửa nóng lạnh tại Lê Duẩn", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-le-duan'},
                        {label: "Sửa nóng lạnh tại Lê Quang Đạo", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-le-quang-dao'},
                        {label: "Sửa nóng lạnh tại Lê Trọng Tấn", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-le-trong-tan'},
                        {label: "Sửa nóng lạnh tại Lê Văn Lương", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-le-van-luong'},
                        {label: "Sửa nóng lạnh tại Liễu Giai", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-lieu-giai'},
                        {label: "Sửa nóng lạnh tại Mễ Trì", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-me-tri'},
                        {label: "Sửa nóng lạnh tại Mỹ Đình", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-my-dinh'},
                        {label: "Sửa nóng lạnh tại Nguyễn Chí Thanh", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-nguyen-chi-thanh'},
                        {label: "Sửa nóng lạnh tại Nguyễn Trãi", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-nguyen-trai'},
                        {label: "Sửa nóng lạnh tại Nguyễn Tuân", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-nguyen-tuan'},
                        {label: "Sửa nóng lạnh tại Nguyễn Văn Huyên", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-nguyen-van-huyen'},
                        {label: "Sửa nóng lạnh tại Nhổn", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-nhon'},
                        {label: "Sửa nóng lạnh tại Phạm Văn Đồng", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-pham-van-dong'},
                        {label: "Sửa nóng lạnh tại Phú Đô", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-phu-do'},
                        {label: "Sửa nóng lạnh tại Quan Hoa", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-quan-hoa'},
                        {label: "Sửa nóng lạnh tại Thượng Đình", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-thuong-dinh'},
                        {label: "Sửa nóng lạnh tại Tôn Đức Thắng", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-ton-duc-thang'},
                        {label: "Sửa nóng lạnh tại Trần Duy Hưng", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-tran-duy-hung'},
                        {label: "Sửa nóng lạnh tại Triều Khúc", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-trieu-khuc'},
                        {label: "Sửa nóng lạnh tại Trung Hòa", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-trung-hoa'},
                        {label: "Sửa nóng lạnh tại Võ Chí Công", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-vo-chi-cong'},
                        {label: "Sửa nóng lạnh tại Xuân Đỉnh", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-xuan-dinh'},
                        {label: "Sửa nóng lạnh tại Xuân Phương", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-xuan-phuong'},
                        {label: "Sửa nóng lạnh tại Yên Hòa", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-yen-hoa'},
                        {label: "Sửa nóng lạnh tại Yên Phụ", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-yen-phu'},
                    ]
                }
            ]
        },
        {label: "TẠI SAO CHỌN CHÚNG TÔI", href: '#services'},
        {label: "ĐÁNH GIÁ", href: '#reviews'},
        {label: "LIÊN HỆ", href: '#footer'},
        {label: "KHUYẾN MÃI", href: '/khuyen-mai'},
        {label: "BẢNG GIÁ", href: '/bang-gia-dich-vu'},
    ]

    return (
        <div className={styles['menu-tongle']}>
            <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Menu className="h-4 w-4"/>
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <div className="flex">
                            {isShowSubMenu ?
                                <span className="mr-6"><i className="fa-solid fa-angle-left" onClick={() => {
                                    if (!isShowChildSub) {
                                        setIsShowSubMenu(false);
                                    } else {
                                        setIsShowChildSub(false);
                                    }
                                }}></i></span> : ''}
                            <DrawerTitle>Menu</DrawerTitle>
                        </div>
                        <DrawerDescription></DrawerDescription>
                    </DrawerHeader>
                    <nav className="flex-col space-y-2">
                        <ScrollArea className="h-[400px] w-full rounded-md p-2">
                            {!isShowSubMenu ? menuItems.map((item, index) => (
                                item.hasSubMenu ?
                                    <Button
                                        key={index}
                                        variant="ghost"
                                        className="justify-start"
                                        onClick={() => {
                                            setSubMenu(item.subMenu);
                                            setIsShowSubMenu(true);
                                        }}
                                    >
                                        {item.label}
                                    </Button> : <DrawerClose key={index} asChild>
                                        <Link
                                            href={`${item.href}`}
                                        >
                                            <Button
                                                variant="ghost"
                                                className="justify-start"
                                            >
                                                {item.label}
                                            </Button>
                                        </Link>
                                    </DrawerClose>
                            )) : !isShowChildSub ?
                                subMenu.map((subItem, idx) => (
                                    subItem.children ?
                                        <Button
                                            key={idx}
                                            variant="ghost"
                                            className="w-full justify-start text-wrap"
                                            onClick={() => {
                                                if (subItem.children) {
                                                    setMenuChild(subItem.children);
                                                }
                                                setIsShowChildSub(true);
                                            }}
                                        >
                                            {subItem.label}
                                        </Button>
                                        :
                                        <DrawerClose key={idx} asChild onClick={
                                            () => {
                                                setIsShowSubMenu(false);
                                                setIsShowChildSub(false);
                                            }
                                        }>
                                            <Link
                                                href={`${subItem.href}`}
                                            >
                                                <Button
                                                    variant="ghost"
                                                    className="w-full justify-start text-wrap"
                                                >
                                                    {subItem.label}
                                                </Button>
                                            </Link>
                                        </DrawerClose>
                                )) : menuChild.map((child, cidx) => (
                                    <DrawerClose key={cidx} asChild onClick={
                                        () => {
                                            setIsShowSubMenu(false);
                                            setIsShowChildSub(false);
                                        }
                                    }>
                                        <Link
                                            href={child.href}
                                        >
                                            <Button
                                                variant="ghost"
                                                className="w-full justify-start text-wrap"
                                            >
                                                {child.label}
                                            </Button>
                                        </Link>
                                    </DrawerClose>
                                ))
                            }
                        </ScrollArea>
                    </nav>
                    <DrawerFooter>
                        <DrawerClose asChild onClick={
                            () => {
                                setIsShowSubMenu(false);
                                setIsShowChildSub(false);
                            }
                        }>
                            <Button variant="outline">Đóng</Button>
                        </DrawerClose>
                    </DrawerFooter>
                    <div className="mb-10"></div>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

const NaviagtionMenu = () => {
    const [position] = React.useState("bottom")
    const services = [
        {label: "Sửa Chữa, Lắp Đặt Điện", href: '/dich-vu/dich-vu-dien'},
        {label: "Sửa Chữa, Lắp Đặt Đường Ống Nước, Thiết Bị Vệ Sinh", href: '/dich-vu/dich-vu-nuoc'},
        {label: "Sửa Chữa, Lắp Đặt Máy Bơm", href: '/dich-vu/dich-vu-may-bom'},
        {label: "Sửa Chữa, Lắp Đặt Bình Nóng Lạnh", href: '/dich-vu/dich-vu-nong-lanh'},
    ]
    const technicals = [
        {
            label: "Điện",
            children: [
                {label: "Sửa chập điện khẩn cấp", href: '/ky-thuat/dien/sua-chap-dien-khan-cap'},
                {label: "Sửa chữa lắp đặt điện", href: '/ky-thuat/dien/sua-chua-lap-dat-dien'},
                {
                    label: "Kỹ thuật phòng chống chập cháy điện",
                    href: '/ky-thuat/dien/phong-chong-chua-chay-khi-bi-chap-dien'
                },
                {label: "Sửa điện nước tại Hà Nội", href: '/ky-thuat/dien/sua-dien-nuoc-tai-ha-noi'},
                {label: "Sửa điện tại Cầu Giấy", href: '/ky-thuat/dien/sua-dien-tai-cau-giay'},
                {label: "Sửa điện tại Hai Bà Trưng", href: '/ky-thuat/dien/sua-dien-tai-hai-ba-trung'},
                {label: "Sửa điện tại Đống Đa", href: '/ky-thuat/dien/sua-dien-tai-dong-da'},
                {label: "Sửa điện tại Ba Đình", href: '/ky-thuat/dien/sua-dien-tai-ba-dinh'},
                {label: "Sửa điện tại Thanh Xuân", href: '/ky-thuat/dien/sua-dien-tai-thanh-xuan'},
                {label: "Sửa điện tại Hà Đông", href: '/ky-thuat/dien/sua-dien-tai-ha-dong'},
                {label: "Sửa điện tại Tây Hồ", href: '/ky-thuat/dien/sua-dien-tai-tay-ho'},
                {label: "Sửa điện tại Long Biên", href: '/ky-thuat/dien/sua-dien-tai-long-bien'},
                {label: "Sửa điện tại Bắc Từ Liêm", href: '/ky-thuat/dien/sua-dien-tai-bac-tu-liem'},
                {label: "Sửa điện tại Nam Từ Liêm", href: '/ky-thuat/dien/sua-dien-tai-nam-tu-liem'},
                {label: "Sửa điện tại Hoàng Mai", href: '/ky-thuat/dien/sua-dien-tai-hoang-mai'},
                {label: "Sửa điện tại Âu Cơ", href: '/ky-thuat/dien/sua-dien-tai-au-co'},
                {label: "Sửa điện tại Cổ Nhuế", href: '/ky-thuat/dien/sua-dien-tai-co-nhue'},
                {label: "Sửa điện tại Đê La Thành", href: '/ky-thuat/dien/sua-dien-tai-de-la-thanh'},
                {label: "Sửa điện tại Định Công", href: '/ky-thuat/dien/sua-dien-tai-dinh-cong'},
                {label: "Sửa điện tại Hồ Tùng Mậu", href: '/ky-thuat/dien/sua-dien-tai-ho-tung-mau'},
                {label: "Sửa điện tại Khương Đình", href: '/ky-thuat/dien/sua-dien-tai-khuong-dinh'},
                {label: "Sửa điện tại Kim Mã", href: '/ky-thuat/dien/sua-dien-tai-kim-ma'},
                {label: "Sửa điện tại Láng", href: '/ky-thuat/dien/sua-dien-tai-lang'},
                {label: "Sửa điện tại Lê Quang Đạo", href: '/ky-thuat/dien/sua-dien-tai-le-quang-dao'},
                {label: "Sửa điện tại Lê Trọng Tấn", href: '/ky-thuat/dien/sua-dien-tai-le-trong-tan'},
                {label: "Sửa điện tại Lê Văn Lương", href: '/ky-thuat/dien/sua-dien-tai-le-van-luong'},
                {label: "Sửa điện tại Mễ Trì", href: '/ky-thuat/dien/sua-dien-tai-me-tri'},
                {label: "Sửa điện tại Mỹ Đình", href: '/ky-thuat/dien/sua-dien-tai-my-dinh'},
                {label: "Sửa điện tại Nguyễn Khánh Toàn", href: '/ky-thuat/dien/sua-dien-tai-nguyen-khanh-toan'},
                {label: "Sửa điện tại Nguyễn Trãi", href: '/ky-thuat/dien/sua-dien-tai-nguyen-trai'},
                {label: "Sửa điện tại Nhổn", href: '/ky-thuat/dien/sua-dien-tai-nhon'},
                {label: "Sửa điện tại Phú Đô", href: '/ky-thuat/dien/sua-dien-tai-phu-do'},
                {label: "Sửa điện tại Quan Hoa", href: '/ky-thuat/dien/sua-dien-tai-quan-hoa'},
                {label: "Sửa điện tại Thượng Đình", href: '/ky-thuat/dien/sua-dien-tai-thuong-dinh'},
                {label: "Sửa điện tại Tôn Đức Thắng", href: '/ky-thuat/dien/sua-dien-tai-ton-duc-thang'},
                {label: "Sửa điện tại Trần Duy Hưng", href: '/ky-thuat/dien/sua-dien-tai-tran-duy-hung'},
                {label: "Sửa điện tại Triều Khúc", href: '/ky-thuat/dien/sua-dien-tai-trieu-khuc'},
                {label: "Sửa điện tại Trung Hòa", href: '/ky-thuat/dien/sua-dien-tai-trung-hoa'},
                {label: "Sửa điện tại Võ Chí Công", href: '/ky-thuat/dien/sua-dien-tai-vo-chi-cong'},
                {label: "Sửa điện tại Xuân Đỉnh", href: '/ky-thuat/dien/sua-dien-tai-xuan-dinh'},
                {label: "Sửa điện tại Xuân Phương", href: '/ky-thuat/dien/sua-dien-tai-xuan-phuong'},
                {label: "Sửa điện tại Yên Hòa", href: '/ky-thuat/dien/sua-dien-tai-yen-hoa'},
                {label: "Sửa điện tại Yên Phụ", href: '/ky-thuat/dien/sua-dien-tai-yen-phu'},
                {label: "Sửa điện tại Phạm Văn Đồng", href: '/ky-thuat/dien/sua-dien-tai-pham-van-dong'},
                {label: "Sửa điện tại Giảng Võ", href: '/ky-thuat/dien/sua-dien-tai-giang-vo'},
                {label: "Sửa điện tại Hoàng Hoa Thám", href: '/ky-thuat/dien/sua-dien-tai-hoang-hoa-tham'},
                {label: "Sửa điện tại Hoàng Quốc Việt", href: '/ky-thuat/dien/sua-dien-tai-hoang-quoc-viet'},
                {label: "Sửa điện tại Khuất Duy Tiến", href: '/ky-thuat/dien/sua-dien-tai-khuat-duy-tien'},
                {label: "Sửa điện tại Kiều Mai", href: '/ky-thuat/dien/sua-dien-tai-kieu-mai'},
                {label: "Sửa điện tại Lê Duẩn", href: '/ky-thuat/dien/sua-dien-tai-le-duan'},
                {label: "Sửa điện tại Liễu Giai", href: '/ky-thuat/dien/sua-dien-tai-lieu-giai'},
                {label: "Sửa điện tại Minh Khai", href: '/ky-thuat/dien/sua-dien-tai-minh-khai'},
                {label: "Sửa điện tại Nguyễn Chí Thanh", href: '/ky-thuat/dien/sua-dien-tai-nguyen-chi-thanh'},
                {label: "Sửa điện tại Nguyễn Tuân", href: '/ky-thuat/dien/sua-dien-tai-nguyen-tuan'},
                {label: "Sửa điện tại Nguyễn Văn Huyên", href: '/ky-thuat/dien/sua-dien-tai-nguyen-van-huyen'},
                {label: "Sửa điện tại Giải Phóng", href: '/ky-thuat/dien/sua-dien-tai-giai-phong'},
            ],
        },
        {
            label: "Nước",
            children: [
                {
                    label: "Sửa rò rỉ ống nước, dò tìm ống nước",
                    href: '/ky-thuat/nuoc/sua-ro-ri-ong-nuoc-do-tim-ong-nuoc'
                },
                {label: "Sửa nước tại Ba Đình", href: '/ky-thuat/nuoc/sua-nuoc-tai-ba-dinh'},
                {label: "Sửa nước tại Cầu Giấy", href: '/ky-thuat/nuoc/sua-nuoc-tai-cau-giay'},
                {label: "Sửa nước tại Hai Bà Trưng", href: '/ky-thuat/nuoc/sua-nuoc-tai-hai-ba-trung'},
                {label: "Sửa nước tại Đống Đa", href: '/ky-thuat/nuoc/sua-nuoc-tai-dong-da'},
                {label: "Sửa nước tại Thanh Xuân", href: '/ky-thuat/nuoc/sua-nuoc-tai-thanh-xuan'},
                {label: "Sửa nước tại Hà Đông", href: '/ky-thuat/nuoc/sua-nuoc-tai-ha-dong'},
                {label: "Sửa nước tại Tây Hồ", href: '/ky-thuat/nuoc/sua-nuoc-tai-tay-ho'},
                {label: "Sửa nước tại Long Biên", href: '/ky-thuat/nuoc/sua-nuoc-tai-long-bien'},
                {label: "Sửa nước tại Bắc Từ Liêm", href: '/ky-thuat/nuoc/sua-nuoc-tai-bac-tu-liem'},
                {label: "Sửa nước tại Nam Từ Liêm", href: '/ky-thuat/nuoc/sua-nuoc-tai-nam-tu-liem'},
                {label: "Sửa nước tại Hoàng Mai", href: '/ky-thuat/nuoc/sua-nuoc-tai-hoang-mai'},

            ]
        },
        {
            label: "Máy Bơm",
            children: [
                {label: "Sửa chữa máy bơm nước tại nhà", href: '/ky-thuat/may-bom/sua-chua-may-bom-nuoc-tai-nha'},
                {
                    label: "Máy bơm tăng áp kêu tạch tạch liên tục - Nguyên nhân và cách khắc phục đơn giản",
                    href: '/ky-thuat/may-bom/nguyen-nhan-may-bom-tang-ap-keu-tach-tach-lien-tuc'
                },
                {label: "Sửa máy bơm tại Cầu Giấy", href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-cau-giay'},
                {label: "Sửa máy bơm tại Hai Bà Trưng", href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-hai-ba-trung'},
                {label: "Sửa máy bơm tại Đống Đa", href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-dong-da'},
                {label: "Sửa máy bơm tại Ba Đình", href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-ba-dinh'},
                {label: "Sửa máy bơm tại Thanh Xuân", href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-thanh-xuan'},
                {label: "Sửa máy bơm tại Hà Đông", href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-ha-dong'},
                {label: "Sửa máy bơm tại Tây Hồ", href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-tay-ho'},
                {label: "Sửa máy bơm tại Long Biên", href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-long-bien'},
                {label: "Sửa máy bơm tại Bắc Từ Liêm", href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-bac-tu-liem'},
                {label: "Sửa máy bơm tại Nam Từ Liêm", href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-nam-tu-liem'},
                {label: "Sửa máy bơm tại Hoàng Mai", href: '/ky-thuat/may-bom/sua-may-bom-nuoc-tai-hoang-mai'},
            ]
        },
        {
            label: "Nóng Lạnh",
            children: [
                {
                    label: "Dịch vụ sửa chữa bình nóng lạnh tại nhà",
                    href: '/ky-thuat/nong-lanh/dich-vu-sua-chua-nong-lanh-tai-nha'
                },
                {label: "Sửa nóng lạnh tại Cầu Giấy", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-cau-giay'},
                {label: "Sửa nóng lạnh tại Hai Bà Trưng", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-hai-ba-trung'},
                {label: "Sửa nóng lạnh tại Đống Đa", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-dong-da'},
                {label: "Sửa nóng lạnh tại Ba Đình", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-ba-dinh'},
                {label: "Sửa nóng lạnh tại Thanh Xuân", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-thanh-xuan'},
                {label: "Sửa nóng lạnh tại Hà Đông", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-ha-dong'},
                {label: "Sửa nóng lạnh tại Tây Hồ", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-tay-ho'},
                {label: "Sửa nóng lạnh tại Long Biên", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-long-bien'},
                {label: "Sửa nóng lạnh tại Bắc Từ Liêm", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-bac-tu-liem'},
                {label: "Sửa nóng lạnh tại Nam Từ Liêm", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-nam-tu-liem'},
                {label: "Sửa nóng lạnh tại Hoàng Mai", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-hoang-mai'},
                {label: "Sửa nóng lạnh tại Âu Cơ", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-au-co'},
                {label: "Sửa nóng lạnh tại Cổ Nhuế", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-co-nhue'},
                {label: "Sửa nóng lạnh tại Đê La Thành", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-de-la-thanh'},
                {label: "Sửa nóng lạnh tại Định Công", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-dinh-cong'},
                {label: "Sửa nóng lạnh tại Giải Phóng", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-giai-phong'},
                {label: "Sửa nóng lạnh tại Giảng Võ", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-giang-vo'},
                {label: "Sửa nóng lạnh tại Hồ Tùng Mậu", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-ho-tung-mau'},
                {label: "Sửa nóng lạnh tại Hoàng Hoa Thám", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-hoang-hoa-tham'},
                {label: "Sửa nóng lạnh tại Hoàng Quốc Việt", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-hoang-quoc-viet'},
                {label: "Sửa nóng lạnh tại Khuất Duy Tiến", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-khuat-duy-tien'},
                {label: "Sửa nóng lạnh tại Khương Đình", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-khuong-dinh'},
                {label: "Sửa nóng lạnh tại Kiều Mai", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-kieu-mai'},
                {label: "Sửa nóng lạnh tại Kim Mã", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-kim-ma'},
                {label: "Sửa nóng lạnh tại Láng", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-lang'},
                {label: "Sửa nóng lạnh tại Lê Duẩn", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-le-duan'},
                {label: "Sửa nóng lạnh tại Lê Quang Đạo", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-le-quang-dao'},
                {label: "Sửa nóng lạnh tại Lê Trọng Tấn", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-le-trong-tan'},
                {label: "Sửa nóng lạnh tại Lê Văn Lương", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-le-van-luong'},
                {label: "Sửa nóng lạnh tại Liễu Giai", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-lieu-giai'},
                {label: "Sửa nóng lạnh tại Mễ Trì", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-me-tri'},
                {label: "Sửa nóng lạnh tại Mỹ Đình", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-my-dinh'},
                {label: "Sửa nóng lạnh tại Nguyễn Chí Thanh", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-nguyen-chi-thanh'},
                {label: "Sửa nóng lạnh tại Nguyễn Trãi", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-nguyen-trai'},
                {label: "Sửa nóng lạnh tại Nguyễn Tuân", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-nguyen-tuan'},
                {label: "Sửa nóng lạnh tại Nguyễn Văn Huyên", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-nguyen-van-huyen'},
                {label: "Sửa nóng lạnh tại Nhổn", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-nhon'},
                {label: "Sửa nóng lạnh tại Phạm Văn Đồng", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-pham-van-dong'},
                {label: "Sửa nóng lạnh tại Phú Đô", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-phu-do'},
                {label: "Sửa nóng lạnh tại Quan Hoa", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-quan-hoa'},
                {label: "Sửa nóng lạnh tại Thượng Đình", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-thuong-dinh'},
                {label: "Sửa nóng lạnh tại Tôn Đức Thắng", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-ton-duc-thang'},
                {label: "Sửa nóng lạnh tại Trần Duy Hưng", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-tran-duy-hung'},
                {label: "Sửa nóng lạnh tại Triều Khúc", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-trieu-khuc'},
                {label: "Sửa nóng lạnh tại Trung Hòa", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-trung-hoa'},
                {label: "Sửa nóng lạnh tại Võ Chí Công", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-vo-chi-cong'},
                {label: "Sửa nóng lạnh tại Xuân Đỉnh", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-xuan-dinh'},
                {label: "Sửa nóng lạnh tại Xuân Phương", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-xuan-phuong'},
                {label: "Sửa nóng lạnh tại Yên Hòa", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-yen-hoa'},
                {label: "Sửa nóng lạnh tại Yên Phụ", href: '/ky-thuat/nong-lanh/sua-nong-lanh-tai-yen-phu'},
            ]
        }
    ]
    const pathname = usePathname();
    return (
        <ul className={styles.menu}>
            <li className={`${styles["menu-item"]} ${pathname == '/' ? styles.active : ''}`}>
                <Link href="/"><span>TRANG CHỦ</span></Link>
            </li>
            <li className={`${styles["menu-item"]}`}>
                <Link href="/#about-us"><span>GIỚI THIỆU</span></Link>
            </li>
            <li className={`${styles["menu-item"]} ${pathname.includes('/dich-vu/') ? styles.active : ''}`}>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Link href="#"><span>DỊCH VỤ</span></Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuRadioGroup value={position}>
                            {services.map((item, index) => (
                                <Link key={index} href={item.href}>
                                    <DropdownMenuRadioItem value={item.label}>
                                        <span>{item.label}</span>
                                    </DropdownMenuRadioItem>
                                </Link>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </li>
            <li className={`${styles["menu-item"]} ${pathname.includes('/ky-thuat/') ? styles.active : ''}`}>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Link href="#"><span>KỸ THUẬT</span></Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuRadioGroup value={position}>
                            {technicals.map((item, index) => (
                                <DropdownMenuSub key={index}>
                                    <DropdownMenuSubTrigger>
                                        <span>{item.label}</span>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <ScrollArea className="h-[400px] w-[450px] rounded-md p-2">
                                                {item.children.map((child, cindex) => (
                                                    <Link key={cindex} href={child.href}>
                                                        <DropdownMenuItem>
                                                            <span>{child.label}</span>
                                                        </DropdownMenuItem>
                                                    </Link>
                                                ))}
                                            </ScrollArea>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </li>
            <li className={`${styles["menu-item"]}`}>
                <Link href="/#services"><span>TẠI SAO CHỌN CHÚNG TÔI</span></Link>
            </li>
            <li className={`${styles["menu-item"]}`}>
                <Link href="/#reviews"><span>ĐÁNH GIÁ</span></Link>
            </li>
            <li className={`${styles["menu-item"]}`}>
                <Link href="/#footer"><span>LIÊN HỆ</span></Link>
            </li>
            <li className={`${styles["menu-item"]} ${pathname.includes('/khuyen-mai') ? styles.active : ''}`}>
                <Link href="/khuyen-mai"><span>KHUYẾN MÃI</span></Link>
            </li>
            <li className={`${styles["menu-item"]} ${pathname.includes('/bang-gia') ? styles.active : ''}`}>
                <Link href="/bang-gia-dich-vu"><span>BẢNG GIÁ</span></Link>
            </li>
        </ul>
    )
}

export default Navbar;