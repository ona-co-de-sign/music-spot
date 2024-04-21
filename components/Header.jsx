import { useState } from 'react';
import Link from 'next/link';
import Navigation from './Navigation'

export default function Header() {
    const [isActive, setIsActive] = useState(false)

    const toggleActive = () => {
        setIsActive(!isActive);
    }

    return (
        <header className='site-header'>
            <Link href="/">
                <img src="./icons/logo.png" alt="logo" width="32" />
            </Link>
            <Navigation isActive={isActive} />
            <div className="site-navigation__btns">
                <Link href="/" className='site-navigation__btn'>
                    <img src="./icons/icon-fav.png" alt="favorites icon" width="30" />
                </Link>
                <Link href="/" className='site-navigation__btn'>
                    <img src="./icons/icon-user.png" alt="user auth icon" width="32" />
                </Link>
                <img src="./icons/icon-mobile.png" alt="mobile icon" className='mobile-icon' width="33" height="33" onClick={toggleActive} />
            </div>
        </header>
    )
}
