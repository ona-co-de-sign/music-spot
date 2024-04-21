import Link from 'next/link';

export default function Navigation({ isActive }) {

    return (
        <nav className='site-navigation'>
            <div className={isActive ? "site-navigation__links active" : "site-navigation__links "}>
                {/* <Link href="/">home</Link> */}
                <Link href="/music">music</Link>
                <Link href="/videos">videos</Link>
                <Link href="/">albums</Link>
                <Link href="/">artists</Link>
                <Link href="/">lyrics</Link>
            </div>
        </nav>
    )
}
