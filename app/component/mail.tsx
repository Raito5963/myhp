"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./../style/home.css";

const Contact = () => {
    const form = useRef<HTMLFormElement>(null!);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            alert("メッセージが送信されました！");
            form.current.reset();
        } catch (error) {
            console.error("メール送信エラー:", error);
            alert("メッセージの送信に失敗しました。時間をおいて再度お試しください。");
        }
    };

    return (
        <div className="contact" id="contact">
            <h1>お問い合わせ</h1>
            <p>
                制作依頼等気になることがございましたら、以下のフォームまたはメールアドレスからご連絡ください。
            </p>
            <form ref={form} onSubmit={sendEmail} className="contactForm">
                <label htmlFor="name">お名前</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">メールアドレス</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">メッセージ</label>
                <textarea id="message" name="message" rows={5} required></textarea>

                <button type="submit">送信</button>
            </form>
        </div>
    );
};

export default Contact;
