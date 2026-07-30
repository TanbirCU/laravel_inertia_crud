import { useState } from "react";
import { router, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
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
        padding: "36px 40px 32px",
        textAlign: "center",
    },
    iconCircle: {
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.2)",
        border: "2px solid rgba(255,255,255,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 16px",
        fontSize: "28px",
    },
    headerTitle: {
        fontSize: "26px",
        fontWeight: 800,
        color: "#fff",
        margin: "0 0 6px",
        letterSpacing: "-0.5px",
    },
    headerSub: {
        fontSize: "14px",
        color: "rgba(255,255,255,0.75)",
        margin: 0,
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
    textarea: {
        width: "100%",
        padding: "14px 14px 14px 42px",
        border: "2px solid #e5e7eb",
        borderRadius: "12px",
        fontSize: "14px",
        color: "#111827",
        background: "#f9fafb",
        outline: "none",
        resize: "vertical",
        minHeight: "130px",
        transition: "border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
        boxSizing: "border-box",
        fontFamily: "inherit",
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
    successBox: {
        textAlign: "center",
        padding: "40px 24px",
    },
    successIcon: {
        fontSize: "56px",
        marginBottom: "16px",
    },
    successTitle: {
        fontSize: "22px",
        fontWeight: 800,
        color: "#111827",
        marginBottom: "8px",
    },
    successText: {
        fontSize: "14px",
        color: "#6b7280",
    },
};

const focusStyle = {
    borderColor: "#667eea",
    background: "#fff",
    boxShadow: "0 0 0 4px rgba(102,126,234,0.12)",
};

export default function Contact() {
    const { flash } = usePage().props;
    const [form, setForm] = useState({ name: "", email: "", phone: "", query: "" });
    const [focused, setFocused] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleFocus = (name) => setFocused((f) => ({ ...f, [name]: true }));
    const handleBlur  = (name) => setFocused((f) => ({ ...f, [name]: false }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        router.post('/contacts', form, {
            onFinish: () => setLoading(false),
            onSuccess: () => {
                setForm({ name: "", email: "", phone: "", query: "" });
                Swal.fire({
                    title: "Message Sent!",
                    text: "Thanks for reaching out. We'll respond to your query soon.",
                    icon: "success",
                    timer: 2500,
                    showConfirmButton: false,
                    customClass: {
                        popup: "rounded-2xl shadow-2xl border border-slate-100",
                    },
                });
            },
        });
    };

    const inputStyle = (name) => ({
        ...styles.input,
        ...(focused[name] ? focusStyle : {}),
    });

    const textareaStyle = (name) => ({
        ...styles.textarea,
        ...(focused[name] ? focusStyle : {}),
    });

    return (
        <Layout>
            <div style={styles.page}>
                <div style={styles.card}>
                    {/* Header */}
                    <div style={styles.cardHeader}>
                        <div style={styles.iconCircle}>✉️</div>
                        <h1 style={styles.headerTitle}>Get in Touch</h1>
                        <p style={styles.headerSub}>Fill out the form and we'll get back to you shortly.</p>
                    </div>

                    {/* Body */}
                    <div style={styles.body}>
                        {/* Form */}
                            <form onSubmit={handleSubmit}>
                                {/* Name & Email row */}
                                <div style={styles.row}>
                                    <div>
                                        <label style={styles.label}>Name</label>
                                        <div style={styles.inputWrapper}>
                                            <span style={styles.inputIcon}>
                                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </span>
                                            <input
                                                style={inputStyle("name")}
                                                type="text"
                                                name="name"
                                                placeholder="John Doe"
                                                value={form.name}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus("name")}
                                                onBlur={() => handleBlur("name")}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label style={styles.label}>Phone</label>
                                        <div style={styles.inputWrapper}>
                                            <span style={styles.inputIcon}>
                                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </span>
                                            <input
                                                style={inputStyle("phone")}
                                                type="tel"
                                                name="phone"
                                                placeholder="+1 234 567 890"
                                                value={form.phone}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus("phone")}
                                                onBlur={() => handleBlur("phone")}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div style={styles.fieldGroup}>
                                    <label style={styles.label}>Email</label>
                                    <div style={styles.inputWrapper}>
                                        <span style={styles.inputIcon}>
                                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </span>
                                        <input
                                            style={inputStyle("email")}
                                            type="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            onFocus={() => handleFocus("email")}
                                            onBlur={() => handleBlur("email")}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Your Query */}
                                <div style={styles.fieldGroup}>
                                    <label style={styles.label}>Your Query</label>
                                    <div style={styles.inputWrapper}>
                                        <span style={{ ...styles.inputIcon, top: "14px", alignItems: "flex-start" }}>
                                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                            </svg>
                                        </span>
                                        <textarea
                                            style={textareaStyle("query")}
                                            name="query"
                                            placeholder="Describe your query or message here..."
                                            value={form.query}
                                            onChange={handleChange}
                                            onFocus={() => handleFocus("query")}
                                            onBlur={() => handleBlur("query")}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    style={styles.btn}
                                    onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                style={{ animation: "spin 0.8s linear infinite" }}>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16 8 8 0 01-8-8z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes spin { to { transform: rotate(360deg); } }
                @keyframes slideDown { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }
            `}</style>
        </Layout>
    );
}
