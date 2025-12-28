'use client'
import { useEffect } from 'react';

const DisableInspect = () => {
    useEffect(() => {
        // Vô hiệu hóa phím F12 và tổ hợp Ctrl + Shift + I (mở DevTools)
        const handleKeyPress = (e) => {
            if (e.key === 'F12' || (e.key === 'I' && (e.ctrlKey || e.metaKey))) {
                e.preventDefault();
            }
        };

        // Vô hiệu hóa menu chuột phải
        const handleContextMenu = (e) => {
            e.preventDefault();
        };

        // Đăng ký sự kiện cho các hành động trên
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('contextmenu', handleContextMenu);

        // Dọn dẹp các sự kiện khi component bị hủy
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    return null;
};

export default DisableInspect;
