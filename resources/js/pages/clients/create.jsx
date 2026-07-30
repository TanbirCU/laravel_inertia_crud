import { useState } from "react";
import { Link } from "@inertiajs/react";
import Layout from "../../components/Layout";

const styles = {
    page: {
        minHeight: "calc(100vh - 64px)",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 16px",
        fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
    },
    card: {
        width: "100%",
        maxWidth: "560px",
        background: "#fff",
        borderRadius: "24px",
        boxShadow: "0 30px 70px rgba(0,0,0,0.22)",
        overflow: "hidden",
    },
    cardHeader: {
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "32px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerTitle: {
        fontSize: "22px",
        fontWeight: 800,
        color: "#fff",
        margin: 0,
        letterSpacing: "-0.5px",
    },
    headerSub: {
        fontSize: "13px",
        color: "rgba(255,255,255,0.75)",
        marginTop: "4px",
    },
    backLink: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        color: "#fff",
        fontSize: "13px",
        fontWeight: 600,
        textDecoration: "none",
        background: "rgba(255,255,255,0.15)",
        border: "1px solid rgba(255,255,255,0.25)",
        padding: "6px 14px",
        borderRadius: "8px",
        transition: "background 0.2s ease",
    },
    body: {
        padding: "36px 40px 40px",
    },
    row: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        marginBottom: "20px",
    },
    fieldGroup: {
        marginBottom: "20px",
    },
    label: {
        display: "block",
        fontSize: "12px",
        fontWeight: 700,
        color: "#6b7280",
        textTransform: "uppercase",
        letterSpacing: "0.6px",
        marginBottom: "8px",
    },
    inputWrapper: {
        position: "relative",
        display: "flex",
        alignItems: "center",
    },
    inputIcon: {
        position: "absolute",
        left: "14px",
        color: "#9ca3af",
        display: "flex",
        alignItems: "center",
        pointerEvents: "none",
    },
    input: {
        width: "100%",
        padding: "12px 14px 12px 42px",
        border: "2px solid #e5e7eb",
        borderRadius: "12px",
        fontSize: "14px",
        color: "#111827",
        background: "#f9fafb",
        outline: "none",
        transition: "border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
        boxSizing: "border-box",
    },
    btn: {
        width: "100%",
        padding: "14px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        border: "none",
        borderRadius: "12px",
        fontSize: "15px",
        fontWeight: 700,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        marginTop: "8px",
        transition: "opacity 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease",
        boxShadow: "0 6px 20px rgba(102,126,234,0.4)",
    },
};

const focusStyle = {
    borderColor: "#667eea",
    background: "#fff",
    boxShadow: "0 0 0 4px rgba(102,126,234,0.12)",
};

export default function Create() {
    const [focused, setFocused] = useState({});

    const handleFocus = (name) => setFocused((f) => ({ ...f, [name]: true }));
    const handleBlur  = (name) => setFocused((f) => ({ ...f, [name]: false }));

    const inputStyle = (name) => ({
        ...styles.input,
        ...(focused[name] ? focusStyle : {}),
    });

    return (
        <Layout>
            <div style={styles.page}>
                <div style={styles.card}>
                    {/* Header */}
                    <div style={styles.cardHeader}>
                        <div>
                            <h1 style={styles.headerTitle}>Add New Client</h1>
                            <p style={styles.headerSub}>Create a new client profile</p>
                        </div>
                        <Link href="/clients" style={styles.backLink}>
                            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back
                        </Link>
                    </div>

                    {/* Body */}
                    <div style={styles.body}>
                        <form>
                            {/* Name */}
                            <div style={styles.fieldGroup}>
                                <label style={styles.label} htmlFor="name">Name</label>
                                <div style={styles.inputWrapper}>
                                    <span style={styles.inputIcon}>
                                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Acme Corporation"
                                        style={inputStyle("name")}
                                        onFocus={() => handleFocus("name")}
                                        onBlur={() => handleBlur("name")}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div style={styles.fieldGroup}>
                                <label style={styles.label} htmlFor="email">Email</label>
                                <div style={styles.inputWrapper}>
                                    <span style={styles.inputIcon}>
                                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="contact@acme.com"
                                        style={inputStyle("email")}
                                        onFocus={() => handleFocus("email")}
                                        onBlur={() => handleBlur("email")}
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div style={styles.fieldGroup}>
                                <label style={styles.label} htmlFor="phone">Phone</label>
                                <div style={styles.inputWrapper}>
                                    <span style={styles.inputIcon}>
                                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        placeholder="+1 (555) 000-0000"
                                        style={inputStyle("phone")}
                                        onFocus={() => handleFocus("phone")}
                                        onBlur={() => handleBlur("phone")}
                                    />
                                </div>
                            </div>

                            {/* Address */}
                            <div style={styles.fieldGroup}>
                                <label style={styles.label} htmlFor="address">Address</label>
                                <div style={styles.inputWrapper}>
                                    <span style={styles.inputIcon}>
                                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        placeholder="123 Main St, New York, NY"
                                        style={inputStyle("address")}
                                        onFocus={() => handleFocus("address")}
                                        onBlur={() => handleBlur("address")}
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                style={styles.btn}
                                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                            >
                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Create Client
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}