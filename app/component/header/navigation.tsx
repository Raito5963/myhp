import './../../style/navigation.css';

export default function Navigation() {
    return (
        <>
            <div className='navigation'>
                <nav className='nav'>
                    <ul className='navUl'>
                        <li className='navLi'><a href='#profile' className='nava'>プロフィール</a></li>
                        <li className='navLi'><a href='#qualification' className='nava'>資格・検定</a></li>
                        <li className='navLi'><a href='#result' className='nava'>大会結果</a></li>
                        <li className='navLi'><a href='#work' className='nava'>制作物</a></li>
                        <li className='navLi'><a href='#contact' className='nava'>お問い合わせ</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}