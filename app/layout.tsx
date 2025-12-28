import type {Metadata} from "next";
import {Roboto} from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";
import React from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import DisableInspect from "@/app/DisableInspect";
import jsonLdData from "@/app/RatingStar";

const roboto = Roboto({
    weight: '500',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: "Sửa điện nước, máy bơm, bình nóng lạnh, hút bể phốt số 1 tại Hà Nội - 0836.838.379",
    description: "Điện Nước Hà Nội 247 cung cấp dịch vụ sửa điện nước tại Hà Nội, bao gồm khắc phục sự cố điện, chập mạch, đoạn mạch điện, quá tải điện, sửa chữa thiết bị điện, sửa chữa đường nước, sửa chữa máy bơm, bình nóng lạnh, lắp đặt quạt trần và hút bể phốt. Cơ sở ở khắp các quận huyện: Long Biên, Hai Bà Trưng, Hoàn Kiếm, Đống Đa, Hoàng Mai, Ba Đình, Tây Hồ, Cầu Giấy, Bắc Từ Liêm, Nam Từ Liêm, Hà Đông, Thanh Xuân, Thanh Trì, Hoài Đức, Đông Anh, ... Tay nghề thợ với hơn 10 năm kinh nghiệm cam kết xử lý nhanh chóng các sự cố về điện, nước, tắc nghẽn đường ống và đảm bảo hệ thống hoạt động ổn định, an toàn. Chúng tôi cung cấp bảo hành lên tới 1 năm, cam kết chất lượng dịch vụ và sự hài lòng của khách hàng.",
    keywords: "điện nước, điện nước Hà Nội, sửa chữa điện nước, thợ điện, lắp đặt điện, chập mạch, sửa máy bơm, bình nóng lạnh, thông tắc cống, hút bể phốt, quạt trần",
    facebook: {
        appId: "421467751058784"
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${roboto.className} antialiased relative`}
        >
        <GoogleTagManager gtmId="GTM-T6W9FRFT"/>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLdData)
            }}
        />
        <DisableInspect/>
        <header className="header">
            <Navbar/>
        </header>
        {children}
        <div className="button-contact phone">
            <div className="phone-vr">
                <div className="phone-vr-circle-fill"></div>
                <div className="phone-vr-img-circle">
                    <a href="tel:0845591568">
                        <i className="fa-solid fa-phone"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="button-contact zalo">
            <div className="phone-vr">
                <div className="zalo-vr-circle-fill"></div>
                <div className="phone-vr-img-circle">
                    <a href="https://zalo.me/0845591568" target="_blank">
                        <img src="/assets/images/zalo_logo.jpg" className="zalo-logo" alt="Chat với chúng tôi qua Zalo"/>
                    </a>
                </div>
            </div>
        </div>
        <Footer/>
        </body>
        </html>
    );
}
