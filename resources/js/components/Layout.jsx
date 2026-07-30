import { Link, usePage } from "@inertiajs/react";

const styles = {
    navbar: {
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        boxShadow: "0 4px 20px rgba(102,126,234,0.35)",
        height: "64px",
        display: "flex",
        alignItems: "center",
    },
    navContainer: {
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    navBrand: {
        fontSize: "18px",
        fontWeight: 800,
        color: "#fff",
        letterSpacing: "-0.5px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
    navLinks: {
        display: "flex",
        alignItems: "center",
        gap: "4px",
    },
    navLink: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "7px 16px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: 600,
        color: "rgba(255,255,255,0.75)",
        textDecoration: "none",
        transition: "background 0.15s ease, color 0.15s ease",
        cursor: "pointer",
    },
    navLinkActive: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "7px 16px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: 700,
        color: "#fff",
        background: "rgba(255,255,255,0.2)",
        border: "1px solid rgba(255,255,255,0.3)",
        textDecoration: "none",
        cursor: "pointer",
    },
};

export default function Layout({ children }) {
    const { url } = usePage();
    const isActive = (path) => url.startsWith(path);

    return (
        <>
            {/* ── Navigation Bar ── */}
            <nav style={styles.navbar}>
                <div style={styles.navContainer}>
                    {/* Brand — Left */}
                    <Link
                        href="/products"
                        style={styles.navBrand}>
                        <span>🧩</span> MyApp
                    </Link>

                    {/* Links — Right */}
                    <div style={styles.navLinks}>
                        <Link
                            href="/products"
                            style={isActive("/products") ? styles.navLinkActive : styles.navLink}
                        >
                            <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z" />
                            </svg>
                            Products
                        </Link>

                        <Link
                            href="/clients"
                            style={isActive("/clients") ? styles.navLinkActive : styles.navLink}
                        >
                            <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6-4a4 4 0 11-8 0 4 4 0 018 0zm6 4a2 2 0 100-4 2 2 0 000 4zM3 16a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                            Clients
                        </Link>
                         <Link
                            href="/sales"
                            style={isActive("/sales") ? styles.navLinkActive : styles.navLink}
                        >
                            <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Sales
                        </Link>

                        <Link
                            href="/contacts"
                            style={isActive("/contacts") ? styles.navLinkActive : styles.navLink}
                        >
                            <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            Contacts
                        </Link>
                    </div>
                </div>
            </nav>

            {/* ── Page Content ── */}
            {children}
        </>
    );
}
