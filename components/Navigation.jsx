import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
    const [isActive, setIsActive] = useState(false)
    const toggleActive = () => {
        setIsActive(!isActive);
    }

    return (
        <nav className='site-navigation flex-row-center'>
            <Link href="/">
                <img src="./icons/logo.png" alt="logo" width="32" />
            </Link>
            <div className={isActive ? "site-navigation__links active" : "site-navigation__links "}>
                {/* <Link href="/">home</Link> */}
                <Link href="/music">music</Link>
                <Link href="/videos">videos</Link>
                <Link href="/">albums</Link>
                <Link href="/">artists</Link>
                <Link href="/">lyrics</Link>
            </div>
            {/* <form className='site-navigation__form '>
                <label htmlFor="search" className='flex-row-center'>
                    <input type="text" id='search' placeholder='suche nach ...' />
                    <Link href="/" className='flex-row-center'>
                        <img src="./icons/icon-search.png" alt="search icon" width="30" />
                    </Link>
                </label>
            </form> */}
            <div className="site-navigation__btns">
                <Link href="/" className='site-navigation__btn'>
                    <img src="./icons/icon-fav.png" alt="favorites icon" width="30" />
                </Link>
                <Link href="/" className='site-navigation__btn'>
                    <img src="./icons/icon-user.png" alt="user auth icon" width="32" />
                </Link>
                <div>
                    <img src="./icons/icon-mobile.png" alt="mobile icon" className='mobile-icon' width="33" height="33" onClick={toggleActive} />
                </div>
            </div>
        </nav>
    )
}
