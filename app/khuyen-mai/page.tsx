'use client'
import Heading from "@/components/heading/heading";
import "./khuyen-mai.css";
import { useState, useEffect } from 'react';

export default function KhuyenMaiPage() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);
    return (
        <main>
            <Heading/>
            <div className="price">
                <h1 className="article-title">KHUYẾN MÃI</h1>
                <div className="line"></div>
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    {loading ? (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    border: '4px solid #ccc',
                                    borderTop: '4px solid #3498db',
                                    borderRadius: '50%',
                                    animation: 'spin 1s linear infinite',
                                }}
                            ></div>
                            <p>Đang tải khuyến mãi...</p>
                        </div>
                    ) : (
                        <p>Khuyến mãi đang cập nhật!</p>
                    )}
                </div>
            </div>
        </main>
    )
}