import { Outlet, NavLink, Link } from "react-router"; // 1. Added Link to imports
import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg?react";
import "./Layout.css"

const NAV_LINKS = [
    { to: "/kurse", label: "KURSE" },
    { to: "/team", label: "TEAM" },
    { to: "/about", label: "ABOUT" },
    { to: "/faq", label: "FAQ" },
];

function Layout() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
                <div className="navbar__logo">
                    <Link to="/" aria-label="Home">
                        <Logo />
                    </Link>
                </div>
                <ul className="navbar__links">
                    {NAV_LINKS.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;