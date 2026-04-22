import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import AppLogo from "../assets/logo.svg?react"

const navItems = [
    { path: '/',         label: 'Home',      num: '01' },
    { path: '/courses',  label: 'Kurse',     num: '02' },
    { path: '/team',     label: 'Team',      num: '03' },
    { path: '/about',    label: 'Über Uns',  num: '04' },
    { path: '/faq',      label: 'FAQ',       num: '05' },
]

export default function Layout() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'

    // Close menu on route change
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMenuOpen(false)
        window.scrollTo(0, 0)
    }, [location.pathname])

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    // Scroll detection for header style on home
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const headerClass = [
        'header',
        menuOpen
            ? 'header--menu-open'
            : isHome && !scrolled
                ? 'header--light'
                : 'header--dark',
    ].join(' ')

    return (
        <div className="layout">
            {/* ── Header ── */}
            <header className={headerClass}>
                <Link to="/" className="logo" aria-label="Stage Ballet Home">
                    <AppLogo width={80} height="auto"/>
                </Link>

                <button
                    className={`burger${menuOpen ? ' burger--open' : ''}`}
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
                    aria-expanded={menuOpen}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </header>

            {/* ── Menu Overlay ── */}
            <div
                className={`menu-overlay${menuOpen ? ' menu-overlay--open' : ''}`}
                aria-hidden={!menuOpen}
            >
                <nav className="menu-nav" role="navigation">
                    {navItems.map((item, i) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`menu-nav-item${location.pathname === item.path ? ' menu-nav-item--active' : ''}`}
                            style={{ animationDelay: `${i * 0.07}s` }}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="menu-footer">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                    <span className="menu-footer-divider" />
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                </div>
            </div>

            {/* ── Page Content ── */}
            <main className="main-content">
                <Outlet />
            </main>

            {/* ── Footer ── */}
            <footer className="site-footer">
                <div className="footer-top">
                    <div className="footer-logo">
                        <AppLogo width={100} height="auto"/>
                    </div>

                    <div className="footer-social">
                        <span>Rechtliches</span>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1" target="_blank" rel="noreferrer">Impressum</a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1" target="_blank" rel="noreferrer">AGBs</a>
                    </div>

                    <div className="footer-social">
                        <span>Folgt uns auf</span>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                    </div>
                </div>

                <p className="footer-copy">©{new Date().getFullYear()} Stage Ballet. Alle Rechte vorbehalten.</p>
            </footer>
        </div>
    )
}