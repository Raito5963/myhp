"use client";
import Header from "../component/header/header";
import Image from 'next/image';
import { useRef } from 'react';
import './../style/home.css';
import Mail from './../component/mail';

export default function Profile() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const handleSaveImage = async () => {
        const img = document.createElement("img");
        img.src = "/myProfile.png"; // 画像のパス

        img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            if (!ctx) return;

            // 画像サイズをキャンバスサイズに設定
            canvas.width = img.width;
            canvas.height = img.height;

            // キャンバスに画像を描画
            ctx.drawImage(img, 0, 0);

            // 画像データを取得
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "profile.png";
            link.click();
        };
    };

    return (
        <>
            <div className='container'>
                <Header />
                <div className='profile' id='profile' style={{ marginTop: "20px" }}>
                    <div className='myIcon'>
                        <Image src='/myIcon.jpg' alt='icon' width={500} height={500} />
                    </div>
                    <div className='myProfile'>
                        <h1>プロフィール</h1>
                        <ul>
                            <li><strong>名前:</strong> 望月輝翔　Raito Mochiduki</li>
                            <li>静岡県立科学技術高等学校　情報システム科</li>
                            <li><strong>メール:</strong> raito.5963.co@gmail.com</li>
                            <li><strong>誕生日:</strong> 8月27日</li>
                            <li><strong>役職:</strong> 生徒会会長</li>
                            <li><strong>趣味:</strong> 将棋・ルービックキューブ</li>
                            <li><strong>自己PR:</strong> （200文字程度）</li>
                        </ul>
                        <input className="button" type='button' value='名刺を保存' onClick={handleSaveImage} />
                    </div>
                </div>
                <canvas ref={canvasRef} style={{ display: "none" }} />
                <div className='qualification' id='qualification'>
                    <h1>保有資格検定</h1>
                    <ul>
                        <li>
                            <h3>第二種電気工事士</h3>
                            <p>家庭や小規模な商業施設などの電気設備の工事、保守を行える資格。</p>
                        </li>
                        <li>
                            <h3>工事担任者　デジタル2級</h3>
                            <p>通信設備や電話回線などの工事を行える資格。</p>
                        </li>
                        <li>
                            <h3>危険物取扱者　乙種1類</h3>
                            <p>酸化性固体を取り扱える資格。</p>
                        </li>
                        <li>
                            <h3>危険物取扱者　乙種2類</h3>
                            <p>可燃性固体を取り扱える資格。</p>
                        </li>
                        <li>
                            <h3>危険物取扱者　乙種3類</h3>
                            <p>自然発火性物質及び禁水性物質を取り扱える資格。</p>
                        </li>
                        <li>
                            <h3>危険物取扱者　乙種4類</h3>
                            <p>引火性液体を取り扱える資格。</p>
                        </li>
                        <li>
                            <h3>危険物取扱者　乙種5類</h3>
                            <p>自己反応性物質を取り扱える資格。</p>
                        </li>
                        <li>
                            <h3>危険物取扱者　乙種6類</h3>
                            <p>酸化性液体を取り扱える資格。</p>
                        </li>
                        <li>
                            <h3>情報処理技能検定　表計算　1級</h3>
                            <p>表計算ソフトの技能検定。</p>
                        </li>
                        <li>
                            <h3>日本語ワープロ検定　2級</h3>
                            <p>ワープロソフト技能検定。</p>
                        </li>
                        <li>
                            <h3>情報技術検定　1級</h3>
                            <p>情報技術に関する検定。</p>
                        </li>
                        <li>
                            <h3>漢字検定準2級</h3>
                            <p>常用漢字内1945文字が対象の検定。</p>
                        </li>
                        <li>
                            <h3>英語検定3級</h3>
                            <p>中学卒業程度の英語検定。</p>
                        </li>
                    </ul>
                </div>

                <div className='result' id='result'>
                    <h1>大会結果</h1>
                    <ul>
                        <li>
                            <h3>TOMOLプロジェクト1st　静岡市長賞　株式会社リバティ賞</h3>
                            <p>現在開発しているFEEDOを発表。</p>
                        </li>
                        <li>
                            <h3>StartUpWeekend静岡7th　静岡市長奨励賞</h3>
                            <p>現在開発しているFEEDOが生まれた。</p>
                        </li>
                        <li>
                            <h3>StartUpWeekend静岡8th　参加</h3>
                            <p>同じ趣味を持つ人同士が集まるコミュニティGaGafriendsを開発。</p>
                        </li>
                        <li>
                            <h3>プレゼン甲子園2024　参加</h3>
                            <p>ウェルビーイング促進のためのSNSの提案。</p>
                        </li>
                        <li>
                            <h3>パソコン甲子園2024　参加</h3>
                            <p>会津大学主催の競技プログラミング大会。</p>
                        </li>
                        <li>
                            <h3>プログラミング甲子園2024　参加</h3>
                            <p>競技プログラミング大会。</p>
                        </li>
                        <li>
                            <h3>情報オリンピック　敢闘賞</h3>
                            <p>競技プログラミング大会。</p>
                        </li>
                        <li>
                            <h3>SANGI AWARD 2025　ITパスポート部門　個人第10位</h3>
                            <p>ITパスポート試験の問題を解き正答率を競う。</p>
                        </li>
                    </ul>
                </div>

                <div className='work' id='work'>
                    <h1>制作物（写真などを加えて更新予定）</h1>
                    <ul>
                        <li>
                            <h3>FEEDO</h3>
                            <p>AIとリアルタイムを利用したアンケートアプリ。</p>
                        </li>
                        <li>
                            <h3>GaGafriends</h3>
                            <p>同じ趣味を持つ人同士が集まるコミュニティ。</p>
                        </li>
                        <li>
                            <h3>Study-GO</h3>
                            <p>高校の定期テストの勉強用サイト。</p>
                        </li>
                        <li>
                            <h3>個人サイト</h3>
                            <p>制作依頼を受けて制作したサイト。</p>
                        </li>
                        <li>
                            <h3>当サイト</h3>
                            <p>NFCカードを利用した名刺のために作成。</p>
                        </li>
                    </ul>
                </div>

                <div className='contact' id='contact'>
                    <Mail />
                </div>
            </div>
        </>
    );
}
