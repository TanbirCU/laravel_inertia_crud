import { Link } from "@inertiajs/react";
import Layout from "../../components/Layout";

const styles = {
    page: {
        minHeight: "calc(100vh - 64px)",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "30px 16px 40px",
        fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
    },
    card: {
        width: "100%",
        maxWidth: "850px",
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
    actionButtons: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
    },
    btn: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        color: "#fff",
        fontSize: "13px",
        fontWeight: 600,
        textDecoration: "none",
        background: "rgba(255,255,255,0.15)",
        border: "1px solid rgba(255,255,255,0.25)",
        padding: "8px 16px",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "background 0.2s ease, transform 0.15s ease",
    },
    btnPrint: {
        background: "#10b981",
        borderColor: "#059669",
        boxShadow: "0 4px 12px rgba(16,185,129,0.2)",
    },
    body: {
        padding: "40px",
    },
    invoiceMeta: {
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "2px solid #f1f5f9",
        paddingBottom: "24px",
        marginBottom: "32px",
    },
    metaBlock: {
        display: "flex",
        flexDirection: "column",
        gap: "4px",
    },
    metaLabel: {
        fontSize: "11px",
        fontWeight: 700,
        color: "#94a3b8",
        textTransform: "uppercase",
        letterSpacing: "0.8px",
    },
    metaValInvoice: {
        fontSize: "18px",
        fontWeight: 800,
        color: "#1e293b",
    },
    metaValDate: {
        fontSize: "14px",
        fontWeight: 600,
        color: "#475569",
    },
    sectionTitle: {
        fontSize: "12px",
        fontWeight: 700,
        color: "#64748b",
        textTransform: "uppercase",
        letterSpacing: "0.8px",
        marginBottom: "12px",
    },
    clientInfoCard: {
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "16px",
        padding: "24px",
        marginBottom: "36px",
    },
    infoGrid: {
        display: "grid",
        gridTemplateColumns: "140px 1fr",
        gap: "10px 16px",
        fontSize: "14px",
    },
    infoLabel: {
        fontWeight: 700,
        color: "#64748b",
    },
    infoValue: {
        color: "#1e293b",
    },
    tableWrapper: {
        border: "1px solid #e2e8f0",
        borderRadius: "16px",
        overflow: "hidden",
        marginBottom: "36px",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
    },
    thead: {
        background: "#f8fafc",
    },
    th: {
        padding: "14px 20px",
        fontSize: "11px",
        fontWeight: 700,
        color: "#64748b",
        textTransform: "uppercase",
        letterSpacing: "0.8px",
        borderBottom: "1px solid #e2e8f0",
        textAlign: "left",
    },
    thRight: {
        padding: "14px 20px",
        fontSize: "11px",
        fontWeight: 700,
        color: "#64748b",
        textTransform: "uppercase",
        letterSpacing: "0.8px",
        borderBottom: "1px solid #e2e8f0",
        textAlign: "right",
    },
    tr: {
        borderBottom: "1px solid #f1f5f9",
    },
    td: {
        padding: "16px 20px",
        fontSize: "14px",
        color: "#334155",
    },
    tdRight: {
        padding: "16px 20px",
        fontSize: "14px",
        color: "#334155",
        textAlign: "right",
        fontWeight: 600,
    },
    grandTotalSection: {
        display: "flex",
        justifyContent: "flex-end",
        gap: "16px",
        alignItems: "center",
        padding: "10px 20px",
    },
    grandTotalLabel: {
        fontSize: "16px",
        fontWeight: 700,
        color: "#475569",
    },
    grandTotalVal: {
        fontSize: "24px",
        fontWeight: 800,
        color: "#6366f1",
    }
};

const printStyleTag = `
@media print {
    body * {
        visibility: hidden;
    }
    #invoice-print-area, #invoice-print-area * {
        visibility: visible;
    }
    #invoice-print-area {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        box-shadow: none !important;
        margin: 0 !important;
        padding: 0 !important;
        border-radius: 0 !important;
    }
    .no-print {
        display: none !important;
    }
}
`;

export default function Show({ sales }) {
    const client = sales.client || {};
    const details = sales.sales_details || [];

    const handlePrint = () => {
        window.print();
    };

    return (
        <Layout>
            <style dangerouslySetInnerHTML={{ __html: printStyleTag }} />
            <div style={styles.page}>
                <div style={styles.card} id="invoice-print-area">
                    {/* Header */}
                    <div style={styles.cardHeader} className="no-print">
                        <div>
                            <h1 style={styles.headerTitle}>Invoice details</h1>
                            <p style={styles.headerSub}>Manage invoice details & printable billing statement</p>
                        </div>
                        <div style={styles.actionButtons}>
                            <button
                                type="button"
                                style={{ ...styles.btn, ...styles.btnPrint }}
                                onClick={handlePrint}
                                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                            >
                                <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                </svg>
                                Print Invoice
                            </button>
                            <Link href="/sales" style={styles.backLink || styles.btn}>
                                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to List
                            </Link>
                        </div>
                    </div>

                    {/* Print Only Header (Hidden normally, shown in print) */}
                    <div style={{ display: "none", padding: "40px 40px 20px" }} className="print-header">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                                <h1 style={{ fontSize: "28px", fontWeight: 800, color: "#1e293b", margin: 0 }}>SALES INVOICE</h1>
                                <p style={{ fontSize: "14px", color: "#64748b", margin: "4px 0 0 0" }}>Statement of account details</p>
                            </div>
                        </div>
                    </div>

                    {/* Body */}
                    <div style={styles.body}>
                        {/* Invoice Metadata */}
                        <div style={styles.invoiceMeta}>
                            <div style={styles.metaBlock}>
                                <span style={styles.metaLabel}>Invoice Number</span>
                                <span style={styles.metaValInvoice}>{sales.invoice_no}</span>
                            </div>
                            <div style={{ ...styles.metaBlock, textAlign: "right" }}>
                                <span style={styles.metaLabel}>Issue Date</span>
                                <span style={styles.metaValDate}>{sales.invoice_date}</span>
                            </div>
                        </div>

                        {/* Client details */}
                        <h2 style={styles.sectionTitle}>Client Statement Details</h2>
                        <div style={styles.clientInfoCard}>
                            <div style={styles.infoGrid}>
                                <span style={styles.infoLabel}>Client Name:</span>
                                <span style={styles.infoValue}>{client.name || "N/A"}</span>
                                <span style={styles.infoLabel}>Email Address:</span>
                                <span style={styles.infoValue}>{client.email || "N/A"}</span>
                                <span style={styles.infoLabel}>Phone Number:</span>
                                <span style={styles.infoValue}>{client.phone || "N/A"}</span>
                                <span style={styles.infoLabel}>Billing Address:</span>
                                <span style={styles.infoValue}>{client.address || "N/A"}</span>
                            </div>
                        </div>

                        {/* Item list table */}
                        <h2 style={styles.sectionTitle}>Invoice Line Items</h2>
                        <div style={styles.tableWrapper}>
                            <table style={styles.table}>
                                <thead style={styles.thead}>
                                    <tr>
                                        <th style={styles.th}>#</th>
                                        <th style={styles.th}>Product</th>
                                        <th style={styles.thRight}>Unit Price</th>
                                        <th style={styles.thRight}>Quantity</th>
                                        <th style={styles.thRight}>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {details.map((detail, index) => (
                                        <tr key={detail.id || index} style={styles.tr}>
                                            <td style={styles.td}>{index + 1}</td>
                                            <td style={styles.td}>{detail.product?.name || "Unknown Product"}</td>
                                            <td style={styles.tdRight}>${parseFloat(detail.price).toFixed(2)}</td>
                                            <td style={styles.tdRight}>{detail.qty}</td>
                                            <td style={styles.tdRight}>${parseFloat(detail.sub_total).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Summary totals */}
                        <div style={styles.grandTotalSection}>
                            <span style={styles.grandTotalLabel}>Grand Total Amount:</span>
                            <span style={styles.grandTotalVal}>${parseFloat(sales.grand_total).toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
