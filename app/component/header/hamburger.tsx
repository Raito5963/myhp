
import { useState } from 'react';
import { Drawer, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './../../style/hamburger.css';

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = ( open: boolean ) => {
        setIsOpen( open );
    }
    
    return (
        <>
            <div>
                <IconButton className='button' onClick={ () => toggleDrawer( true ) }>
                    <MenuIcon className='menuIcon' />
                </IconButton>
                <Drawer className='draw' anchor='left' open={ isOpen } onClose={ () => toggleDrawer( false ) }>
                    <ul className='drawUl'>
                        <li className='drawLi'><a className='drawa' href='/home'>Home</a></li>
                        <li className='drawLi'><a className='drawa' href='/about'>プロフィール</a></li>
                        <li className='drawLi'><a className='drawa' href='/qualification'>資格・検定</a></li>
                        <li className='drawLi'><a className='drawa' href='/result'>大会結果</a></li>
                        <li className='drawLi'><a className='drawa' href='/work'>制作物</a></li>
                        <li className='drawLi'><a className='drawa' href='/contact'>お問い合わせ</a></li>
                    </ul>
                </Drawer>
            </div>
        </>
    );
}