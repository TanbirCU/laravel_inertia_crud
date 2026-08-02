import { Link, router } from "@inertiajs/react";
import Layout from "../../components/Layout";
import Swal from "sweetalert2";

const styles = {
    page: {
        minHeight: "calc(100vh - 64px)",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "30px 16px 20px",
    },
    card: {
        width: "100%",
        maxWidth: "1200px",
        background: "#fff",
        borderRadius: "20px",
        boxShadow: "0 25px 60px rgba(0,0,0,0.2)",
        overflow: "hidden",
    },
    header: {
        padding: "28px 32px",
        borderBottom: "1px solid #f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    title: {
        fontSize: "22px",
        fontWeight: 800,
        color: "#fff",
        margin: 0,
        letterSpacing: "-0.5px",
    },
    subtitle: {
        fontSize: "13px",
        color: "rgba(255,255,255,0.7)",
        marginTop: "4px",
    },
    badge: {
        background: "rgba(255,255,255,0.2)",
        color: "#fff",
        borderRadius: "50px",
        padding: "6px 16px",
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "0.5px",
        border: "1px solid rgba(255,255,255,0.3)",
    },
    tableWrapper: { overflowX: "auto" },
    table: { width: "100%", borderCollapse: "collapse" },
    thead: { background: "#f8f9fe" },
    th: {
        padding: "14px 24px",
        fontSize: "11px",
        fontWeight: 700,
        color: "#9ca3af",
        textTransform: "uppercase",
        letterSpacing: "0.8px",
        borderBottom: "2px solid #f0f0f0",
        textAlign: "left",
    },
    thCenter: {
        padding: "14px 24px",
        fontSize: "11px",
        fontWeight: 700,
        color: "#9ca3af",
        textTransform: "uppercase",
        letterSpacing: "0.8px",
        borderBottom: "2px solid #f0f0f0",
        textAlign: "center",
    },
    tr: {
        borderBottom: "1px solid #f5f5f7",
        transition: "background 0.15s ease",
    },
    td: {
        padding: "18px 24px",
        fontSize: "14px",
        color: "#374151",
        verticalAlign: "middle",
    },
    tdCenter: {
        padding: "18px 24px",
        fontSize: "14px",
        color: "#374151",
        verticalAlign: "middle",
        textAlign: "center",
    },
    idBadge: {
        background: "#f0f0fe",
        color: "#6366f1",
        fontWeight: 700,
        fontSize: "11px",
        padding: "4px 10px",
        borderRadius: "8px",
        display: "inline-block",
    },
    invoiceNo: {
        fontWeight: 700,
        color: "#111827",
        fontSize: "14px",
    },
    clientName: {
        fontSize: "14px",
        color: "#374151",
        fontWeight: 600,
    },
    grandTotal: {
        fontWeight: 800,
        color: "#4f46e5",
        fontSize: "15px",
    },
    invoiceDate: {
        fontSize: "13px",
        color: "#6b7280",
    },
    emptyState: {
        padding: "60px 24px",
        textAlign: "center",
        color: "#9ca3af",
        fontSize: "14px",
    },
};

export default function Index({ sales = [] }) {
    const handleDelete = (sale) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Do you really want to delete invoice "${sale.invoice_no}"? This action cannot be undone!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#e11d48",
            cancelButtonColor: "#64748b",
            confirmButtonText: "Yes, Delete It",
            cancelButtonText: "Cancel",
            customClass: {
                popup: "rounded-2xl shadow-2xl border border-slate-100",
                confirmButton: "px-5 py-2.5 rounded-xl font-semibold text-sm cursor-pointer",
                cancelButton: "px-5 py-2.5 rounded-xl font-semibold text-sm cursor-pointer",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/sales/${sale.id}`, {
                    onSuccess: () => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Invoice has been successfully deleted.",
                            icon: "success",
                            timer: 1800,
                            showConfirmButton: false,
                            customClass: {
                                popup: "rounded-2xl shadow-2xl border border-slate-100",
                            },
                        });
                    },
                });
            }
        });
    };

    return (
        <Layout>
            <div style={styles.page}>
                <div style={styles.card}>
                    {/* Header */}
                    <div style={styles.header}>
                        <div>
                            <h1 style={styles.title}>🧾 Sales Orders</h1>
                            <p style={styles.subtitle}>Track and manage all invoices and transactions</p>
                        </div>
                        <Link href="/sales/create">
                            <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white text-sm font-semibold rounded-xl shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer">
                                <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <span>Create Invoice</span>
                            </button>
                        </Link>
                        <span style={styles.badge}>{sales.length} Invoices</span>
                    </div>

                    {/* Table */}
                    {sales.length === 0 ? (
                        <div style={styles.emptyState}>
                            <div style={{ fontSize: "48px", marginBottom: "12px" }}>🧾</div>
                            <p style={{ fontWeight: 600, fontSize: "16px", color: "#374151" }}>No sales records found</p>
                            <p style={{ fontSize: "13px", marginTop: "4px" }}>Create a new invoice to record a transaction.</p>
                        </div>
                    ) : (
                        <div style={styles.tableWrapper}>
                            <table style={styles.table}>
                                <thead style={styles.thead}>
                                    <tr>
                                        <th style={styles.thCenter}>ID</th>
                                        <th style={styles.th}>Invoice No</th>
                                        <th style={styles.th}>Client</th>
                                        <th style={styles.th}>Invoice Date</th>
                                        <th style={styles.th}>Grand Total</th>
                                        <th style={styles.th}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sales.map((sale) => (
                                        <tr
                                            key={sale.id}
                                            style={styles.tr}
                                            onMouseEnter={(e) => (e.currentTarget.style.background = "#fafafe")}
                                            onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                                        >
                                            <td style={styles.tdCenter}>
                                                <span style={styles.idBadge}>#{sale.id}</span>
                                            </td>
                                            <td style={styles.td}>
                                                <div style={styles.invoiceNo}>{sale.invoice_no}</div>
                                            </td>
                                            <td style={styles.td}>
                                                <div style={styles.clientName}>{sale.client?.name || "Unknown"}</div>
                                            </td>
                                            <td style={styles.td}>
                                                <span style={styles.invoiceDate}>{sale.invoice_date}</span>
                                            </td>
                                            <td style={styles.td}>
                                                <span style={styles.grandTotal}>
                                                    ${parseFloat(sale.grand_total).toFixed(2)}
                                                </span>
                                            </td>
                                            <td style={styles.td}>
                                                <div className="flex items-center gap-2">
                                                    <Link href={`/sales/${sale.id}`}>
                                                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white text-xs font-semibold rounded-lg shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                            <span>View</span>
                                                        </button>
                                                    </Link>
                                                    <Link href={`/sales/${sale.id}/edit`}>
                                                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white text-xs font-semibold rounded-lg shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                            </svg>
                                                            <span>Edit</span>
                                                        </button>
                                                    </Link>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDelete(sale)}
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-700 active:scale-[0.98] text-white text-xs font-semibold rounded-lg shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                                                    >
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                        </svg>
                                                        <span>Delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Footer */}
                    <div style={{ padding: "16px 32px", borderTop: "1px solid #f5f5f7", display: "flex", justifyContent: "flex-end" }}>
                        <span style={{ fontSize: "12px", color: "#d1d5db" }}>
                            Showing {sales.length} of {sales.length} invoices
                        </span>
                    </div>
                </div>
            </div>
        </Layout>
    );
}