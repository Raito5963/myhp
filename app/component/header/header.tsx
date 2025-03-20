"use client";
import { useState, useEffect } from 'react';
import Hamburger from './hamburger';
import Navigation from './navigation';

export default function Header() {
    const [windowWidth, setWindowWidth] = useState(0);
    const isPhone = 640;
    let isOpen = false;
    useEffect(() => {
        //画面幅を取得する
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        //初期幅設定
        handleResize();
        //リサイズ時の処理
        window.addEventListener("resize", handleResize);
        //クリーンアップ
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);//初回時のみ実行

    function Type() {
        if (windowWidth <= isPhone) {
            return (
                <>
                    <Hamburger />
                </>
            );
        } else {
            return (
                <>
                    <Navigation />
                </>
            )
        }
    }
    return (
        <>
            <Type />
        </>
    );
}