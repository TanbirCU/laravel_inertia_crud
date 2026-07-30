import { Link } from "@inertiajs/react";
import Layout from "../../components/Layout";

const styles = {
    page: {
        minHeight: "calc(100vh - 64px)",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 16px",
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
    clientName: {
        fontWeight: 700,
        color: "#111827",
        fontSize: "14px",
    },
    emailText: {
        fontSize: "13px",
        color: "#6366f1",
    },
    phoneText: {
        fontSize: "13px",
        color: "#374151",
    },
    addressText: {
        fontSize: "12px",
        color: "#9ca3af",
        marginTop: "2px",
        maxWidth: "200px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
    emptyState: {
        padding: "60px 24px",
        textAlign: "center",
        color: "#9ca3af",
        fontSize: "14px",
    },
    /* ── Pagination Styles ── */
    paginationWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "6px",
        padding: "20px 32px 10px",
        borderTop: "1px solid #f5f5f7",
    },
    paginationButton: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 14px",
        borderRadius: "8px",
        fontSize: "13px",
        fontWeight: 600,
        textDecoration: "none",
        color: "#4f46e5",
        background: "#f3f4f6",
        border: "1px solid #e5e7eb",
        transition: "all 0.15s ease",
        cursor: "pointer",
    },
    paginationActiveButton: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 14px",
        borderRadius: "8px",
        fontSize: "13px",
        fontWeight: 700,
        textDecoration: "none",
        color: "#fff",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        border: "none",
        transition: "all 0.15s ease",
        cursor: "default",
    },
    paginationDisabledButton: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 14px",
        borderRadius: "8px",
        fontSize: "13px",
        fontWeight: 600,
        textDecoration: "none",
        color: "#9ca3af",
        background: "#f9fafb",
        border: "1px solid #f3f4f6",
        cursor: "not-allowed",
        opacity: 0.6,
    }
};

export default function Index({ clients = { data: [], links: [] } }) {
    const clientList = clients.data || [];

    return (
        <Layout>
        <div style={styles.page}>
            <div style={styles.card}>
                {/* Header */}
                <div style={styles.header}>
                    <div>
                        <h1 style={styles.title}>👥 Client Directory</h1>
                        <p style={styles.subtitle}>Manage your clients and their information</p>
                    </div>
                    <Link href="/clients/create">
                        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white text-sm font-semibold rounded-xl shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer">
                            <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <span>Add Client</span>
                        </button>
                    </Link>
                    <span style={styles.badge}>{clients.total || 0} Clients</span>
                </div>

                {/* Table */}
                {clientList.length === 0 ? (
                    <div style={styles.emptyState}>
                        <div style={{ fontSize: "48px", marginBottom: "12px" }}>📋</div>
                        <p style={{ fontWeight: 600, fontSize: "16px", color: "#374151" }}>No clients found</p>
                        <p style={{ fontSize: "13px", marginTop: "4px" }}>Add clients to populate your directory.</p>
                    </div>
                ) : (
                    <div style={styles.tableWrapper}>
                        <table style={styles.table}>
                            <thead style={styles.thead}>
                                <tr>
                                    <th style={styles.thCenter}>ID</th>
                                    <th style={styles.th}>Name</th>
                                    <th style={styles.th}>Email</th>
                                    <th style={styles.th}>Phone</th>
                                    <th style={styles.th}>Address</th>
                                    <th style={styles.th}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientList.map((client) => (
                                    <tr
                                        key={client.id}
                                        style={styles.tr}
                                        onMouseEnter={(e) => (e.currentTarget.style.background = "#fafafe")}
                                        onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                                    >
                                        <td style={styles.tdCenter}>
                                            <span style={styles.idBadge}>#{client.id}</span>
                                        </td>
                                        <td style={styles.td}>
                                            <div style={styles.clientName}>{client.name}</div>
                                        </td>
                                        <td style={styles.td}>
                                            <span style={styles.emailText}>{client.email}</span>
                                        </td>
                                        <td style={styles.td}>
                                            <span style={styles.phoneText}>{client.phone}</span>
                                        </td>
                                        <td style={styles.td}>
                                            <div style={styles.addressText}>{client.address}</div>
                                        </td>
                                        <td style={styles.td}>
                                            <div className="flex items-center gap-2">
                                                <Link href={`/clients/${client.id}/edit`}>
                                                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white text-xs font-semibold rounded-lg shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                        </svg>
                                                        <span>Edit</span>
                                                    </button>
                                                </Link>
                                                <button
                                                    type="button"
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

                {/* Pagination links */}
                {clients.last_page > 1 && (
                    <div style={styles.paginationWrapper}>
                        {clients.links.map((link, index) => {
                            if (!link.url) {
                                return (
                                    <span
                                        key={index}
                                        style={styles.paginationDisabledButton}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                );
                            }
                            if (link.active) {
                                return (
                                    <span
                                        key={index}
                                        style={styles.paginationActiveButton}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                );
                            }
                            return (
                                <Link
                                    key={index}
                                    href={link.url}
                                    style={styles.paginationButton}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            );
                        })}
                    </div>
                )}

                {/* Footer */}
                <div style={{ padding: "16px 32px", borderTop: "1px solid #f5f5f7", display: "flex", justifyContent: "flex-end" }}>
                    <span style={{ fontSize: "12px", color: "#d1d5db" }}>
                        Showing {clients.from || 0} to {clients.to || 0} of {clients.total || 0} clients
                    </span>
                </div>
            </div>
        </div>
        </Layout>
    );
}
