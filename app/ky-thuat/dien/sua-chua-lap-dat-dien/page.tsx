import Heading from "@/components/heading/heading";
import Link from "next/link";

export default function SuaChuaLapDatDienPage() {
    return (
        <main>
            <Heading/>
            <div className="article">
                <h1 className="tieude1">SỬA CHỮA LẮP ĐẶT ĐIỆN - NHỮNG LƯU Ý KHI SỬ DỤNG ĐIỆN</h1>
                <div className="article-line"></div>
                <p>Để sửa chữa, lắp đặt điện hay xử lý sự cố hoặc thay đổi vị trí, mở rộng phạm vi sử dụng điện, thiết
                    bị điện là công việc không hề đơn giản. Các công việc này dù nhỏ cũng yêu cầu cao về mặt an toàn mà
                    chưa kể đến kiến thức chuyên môn và kinh nghiệm của người thợ điện. Vậy hãy cùng xem các dịch vụ sửa
                    chữa điện mà Điện Nước Hà Nội 247 chuyên cung cấp và các lưu ý khi sử dụng điện bạn nhé.</p>
                <p className="article-img-1">
                    <img src="/assets/images/service_11.jpg" alt="ảnh chập điện"/>
                </p>
                <div className="article-introduce-company-services">
                    <h2>
                        <span><a className="article-link" href="https://www.thodiennuochanoi.vn" target="_blank">Điện Nước Hà Nội 247</a></span> -
                        Đơn Vị Sửa Chữa, Lắp Đặt Điện Uy Tín, Chất Lượng Cao
                    </h2>
                    <p className="article-introduce-company-summary">
                        Chúng tôi chuyên cung cấp dịch vụ bảo trì, sửa chữa, lắp đặt điện chuyên nghiệp. Có đội ngũ kỹ
                        sư, thợ chuyên nghiệp trực 24/24 ở khắp các quận trên thành phố Hà Nội
                        có mặt sau 15 phút. Với kinh nghiệm hơn 10 năm trong lĩnh vực bảo trì, sửa chữa
                        điện nước, cung cấp các dịch vụ sửa chữa điện nước, sửa chữa máy bơm nước. Chúng tôi sẽ đem đến
                        cho khách hàng dịch vụ sửa chữa chập điện tại nhà chuyên nghiệp và tối ưu nhất. Giúp khách
                        hàng tiết kiệm tối đa thời gian và chi phí.
                    </p>
                    <h3>
                        Tại sao nên chọn Điện Nước Hà Nội 247?
                    </h3>
                    <ul>
                        <li>Đội ngũ kỹ sư, thợ lành nghề hơn 10 năm kinh nghiệm</li>
                        <li>Tư vấn miễn phí, hỗ trợ 24/24 kể cả đêm muộn</li>
                        <li>Kiểm tra lỗi, phân tích kỹ lưỡng, giải thích cặn kẽ cho khách</li>
                        <li>Sửa đúng bệnh, lấy đúng giá, không phát sinh chi phí</li>
                        <li>Tư vấn sửa chữa, lắp đặt điện tiết kiệm, thẩm mĩ, an toàn, hiệu quả</li>
                        <li>Thời gian bảo hành dài hạn</li>
                    </ul>
                    <div className="call-to-action-call">
                        <a className="btn-call-now" href="tel:0845 591 568">
                            <div className="wdt-button-text text-center">
                                <span>Gọi ngay!</span>
                            </div>
                        </a>
                    </div>
                </div>
                <h2 className="article-title-1">10 Lưu ý khi sử dụng điện</h2>
                <p>Các thiết bị điện gia đình trong khi sử dụng có thể gặp sự cố bất cứ lúc nào, những sự cố này nếu
                    không được xử lý kịp thời nhanh chóng hoặc xử lý hiệu quả thì không đảm bảo an toàn cho người sử
                    dụng. Trong quá trình sử dụng các thiết bị điện gia đình, chính các thành viên trong nhà cũng góp
                    phần vào việc đảm bảo an toàn cho các thiết bị điện và người sử dụng bằng cách tuân thủ 10 chú ý
                    sau:</p>
                <h3>1. Lắp thiết bị đóng cắt, bảo vệ</h3>
                <ul>
                    <li>
                        Phải lắp đặt trên dây pha; khuyến khích lắp đặt thiết bị bảo vệ đóng cắt đồng thời cả dây pha và
                        dây trung tính.
                    </li>
                    <li>
                        Chọn thiết bị đóng cắt bảo vệ: Phải phù hợp với công suất sử dụng. Phải có nắp đậy che kín phần
                        mang điện.
                    </li>
                    <li>
                        Phải lắp đặt thiết bị ở đầu dây cấp điện chính và các nhánh rẽ ở các tầng nhà.
                    </li>
                    <li>
                        Khuyến khích lắp đặt thiết bị chống ṛò điện. đặc biệt vùng ngập nước.
                    </li>
                </ul>
                <h3>2. Lắp đặt cầu dao, cầu chì, công tắc, ổ cắm điện ở công trình nhà ở</h3>
                <p>Phải đặt ở nơi cao ráo và thuận tiện cho việc sử dụng. Riêng các hộ sử dụng điện có trẻ nhỏ hoặc nằm
                    trong vùng có thể ngập nước phải đặt cao hơn nền, sàn nhà ít nhất 1,40 mét.</p>
                <h3>3. Lắp đặt thiết bị điện trong nhà</h3>
                <ul>
                    <li>Nối đất vỏ kim loại các thiết bị dùng điện trong nhà như: Tủ lạnh, máy giặt, bếp điện….
                    </li>
                    <li>Không lắp đặt thiết bị điện tại các nơi ẩm ướt, ngập nước. Trường hợp cần bố trí thiết bị th́
                        phải được bảo vệ bằng cách lắp đặt thiết bị chống ṛò điện.
                    </li>
                </ul>
                <p className="article-img-1">
                    <img src="/assets/services/dien/noi-dat-bao-ve.jpg" alt="ảnh nối đất thiết bị điện"/>
                </p>
                <h3>4. Kiểm tra</h3>
                <ul>
                    <li>Phải thường xuyên kiểm tra đường dây; thiết bị đóng cắt, bảo vệ điện (cầu dao, cầu ch́, công
                        tắc, ổ cắm) và các thiết bị sử dụng điện trong nhà.
                    </li>
                    <li>Nên ngắt nguồn điện các thiết bị điện khi không sử dụng (cắt cầu dao hoặc rút phích cắm điện).
                    </li>
                    <li>Khi dây dẫn điện bị đứt, tróc cách điện; các thiết bị, đồ dùng điện nếu hư hỏng phải thay thế
                        hoặc sửa chữa xong mới được tiếp tục sử dụng.
                    </li>
                </ul>
                <h3>5. Khi có giông sét, mưa, bão, ngập nước</h3>
                <ul>
                    <li>Cắt điện (rút phích cắm) các thiết bị: Ti vi, máy tính, … và tách cáp an-ten ra khỏi ti vi nhằm
                        tránh sét lan truyền.
                    </li>
                    <li>Khi nhà bị ngập nước, mưa bão làm tốc mái, đổ tường… nên cắt cầu dao điện.</li>
                    <li>Luôn luôn đề cao tính an toàn khi sử dụng các thiết bị điện gia đình.</li>
                    <li>Luôn luôn đề cao tính an toàn khi sử dụng các thiết bị điện gia đình.</li>
                </ul>
                <h3>6. Khi cần sửa chữa hoặc lắp đặt điện trong nhà</h3>
                <ul>
                    <li>Phải ngắt thiết bị đóng cắt điện (cầu dao, cầu chì, công tắc ) và treo tại thiết bị đóng cắt
                        điện biển báo: “CẤM ĐÓNG ĐIỆN KHI CÓ NGƯỜI ĐANG LÀM VIỆC”.
                    </li>
                    <li>Sử dụng các công cụ điện cầm tay (máy khoan, máy mài …).</li>
                    <li>Khi sử dụng các thiết bị này phải mang găng tay cách điện, thiết bị công cụ bảo vệ để không bị
                        điện giật.
                    </li>
                </ul>
                <h3>7. Khi tay ướt hoặc nền, sàn nhà ẩm ướt</h3>
                <ul>
                    <li>Không chạm vào bất kỳ dụng cụ sử dụng điện nào.</li>
                    <li>Lau khô tay đeo gang tay cách điện trước khi sửa chữa.</li>
                    <li>Không đóng cắt cầu dao, công tắc hoặc cắm (rút) phích cắm điện.</li>
                    <li>Sàn nhà ẩm ướt muốn thao tác phải đứng trên vật cách điện (ghế gỗ, nhựa khô …).</li>
                </ul>
                <h3>8. Khi chưa cắt nguồn điện</h3>
                <p>Tuyệt đối không được chạm vào</p>
                <ul>
                    <li>Ổ cắm điện.</li>
                    <li>Những chỗ hở của dây điện (nơi vỏ cách điện bị nứt, tróc, bị bung băng keo cách điện).</li>
                    <li>Cầu dao, cầu chì không có nắp che …</li>
                </ul>
                <h3>9. Không</h3>
                <ul>
                    <li>Sử dụng dây dẫn điện, thiết bị điện và thiết bị sử dụng điện trong nhà có chất lượng kém dễ chạm
                        chập, điện gây tai nạn hoặc cháy, nổ..
                    </li>
                    <li>Phơi quần áo; treo, móc vật dụng, hàng hoá … vào dây dẫn điện.</li>
                    <li>Cắm trực tiếp đầu dây dẫn điện (không có phích cắm) vào ổ cắm điện.</li>
                    <li>Phích cắm, ổ cắm phải chắc chắn (phích cắm là phía thiết bị dụng cụ sử dụng điện, ổ cắm là phía
                        nguồn điện).
                    </li>
                    <li>Khi rút phích cắm điện không nắm dây điện kéo ra, phải nắm vào phần nhựa của thân phích cắm.
                    </li>
                    <li>Để thiết bị điện có phát nhiệt (ti vi, bàn ủi, bếp điện…) ở gần vật dễ cháy.</li>
                </ul>
                <h3>10. Không dùng điện để:</h3>
                <ul>
                    <li>Chống trộm.</li>
                    <li>Bẫy chuột.</li>
                    <li>Rà (bắt) cá.</li>
                </ul>

                <div className="article-attention">
                    <i className="fa-solid fa-triangle-exclamation mt-0.5 mr-3"></i>
                    <p>
                        Nếu bạn không chắc chắn đạt được những tiêu chí trên hãy gọi đến đội ngũ thợ điện chuyên nghiệp
                        của <span><Link
                        className="underline-link"
                        href="https://www.thodiennuochanoi.vn"
                        target="_blank">Điện Nước Hà Nội 247</Link></span> để đảm bảo sửa chữa an toàn, hiệu quả nhé
                    </p>
                </div>

                <div className="more-relative">
                    <h2>BÀI VIẾT LIÊN QUAN</h2>
                    <ul>
                        <li><Link className="underline-link"
                                  href="/dich-vu/dich-vu-dien"
                                  target="_blank">Dịch Vụ Sửa Chữa, Lắp Đặt Điện
                        </Link>
                        </li>
                        <li><Link className="underline-link"
                                  href="/ky-thuat/dien/sua-chap-dien-khan-cap"
                                  target="_blank">Sửa Chập Điện Khẩn Cấp
                        </Link>
                        </li>
                        <li><Link className="underline-link"
                                  href="/ky-thuat/dien/phong-chong-chua-chay-khi-bi-chap-dien"
                                  target="_blank">Cách phòng chống, chữa cháy khi bị chập điện an toàn, hiệu quả
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}