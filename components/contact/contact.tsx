'use client'
import './contact.css'
import { useState } from "react"
import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {z} from "zod"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Vui lòng điền tên của bạn!",
    }),
    phone: z.string().min(1, {
        message: "Vui lòng điền số điện thoại của bạn!",
    }),
    address: z.string().min(0),
    facebook: z.string().min(0),
    message: z.string().min(1, {
        message: "Vui lòng điền lời nhắn của bạn!",
    }),
})

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            address: "",
            facebook: "",
            message: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            setLoading(true)
            const response = await fetch("/api/submit", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),
            })

            if (response.ok) {
                alert("Gửi lời nhắn thành công!")
                form.reset();
            } else {
                alert("Gửi lời nhắn thất bại.")
            }
        } catch (error) {
            console.error("Error:", error)
            alert("Error submitting data.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className="contact-us">
            <div className="elementor-container">
                <div className="contact-us-container">
                    <div className="review-image">
                        <div className="customer-support">
                            <img decoding="async"
                                 src="/assets/images/customer_support.jpg"
                                 className="img-support-customer" alt="customer support"/>
                        </div>
                    </div>
                    <div className="contact-intro">
                        <h1 className="intro-heading">Gửi câu hỏi hoặc đánh giá về dịch vụ của chúng tôi</h1>
                        <p className="contact-des">
                            Hãy cho chúng tôi biết suy nghĩ của bạn về dịch vụ của chúng tôi hoặc
                            bất cứ câu hỏi nào. Nhân viên sẽ trả lời bạn trong vòng <strong>15 phút</strong>,
                            hãy <strong>liên hệ qua số điện thoại ngay để được giải đáp tốt nhất</strong>.
                        </p>
                        <div className="form-data">
                            <Form {...form}>
                                <div className="attention">Trường thông tin đánh <span className="field-require">*</span> bạn đừng bỏ trống
                                    nhé!
                                </div>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel className="label">Tên<span
                                                    className="field-require"> *</span></FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Nhập tên của bạn" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel className="label">Số điện thoại<span
                                                    className="field-require"> *</span></FormLabel>
                                                <FormControl>
                                                    <Input type="number" placeholder="Nhập số điện thoại" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="address"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel className="label">Đia chỉ</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Nhập đia chỉ" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="facebook"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel className="label">Facebook</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Nhập link trang cá nhân facebook" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel className="label">Lời nhắn<span
                                                    className="field-require"> *</span></FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Nhập lời nhắn" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" disabled={loading}>
                                        {loading ? "Đang gửi..." : "Gửi lời nhắn"}
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact