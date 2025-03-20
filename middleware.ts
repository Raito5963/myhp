import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const url = req.nextUrl;

    // すでにランダムなURLにいる場合は処理しない
    if (url.pathname !== "/") {
        return NextResponse.next();
    }

    // ランダムなURLを生成（32文字）
    const randomURL =
        Math.random().toString(36).substring(2, 18) +
        Math.random().toString(36).substring(2, 18);

    // ランダムなURLにリダイレクト
    return NextResponse.redirect(new URL(`/${randomURL}`, req.url));
}

// middleware を適用するパスを指定
export const config = {
    matcher: "/",
};
