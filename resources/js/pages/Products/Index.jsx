import { Link } from "@inertiajs/react";

const styles = {
    page: {
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 16px",
    },
    card: {
        width: "100%",
        maxWidth: "1000px",
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
    headerLeft: {},
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
    tableWrapper: {
        overflowX: "auto",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
    },
    thead: {
        background: "#f8f9fe",
    },
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
    productName: {
        fontWeight: 700,
        color: "#111827",
        fontSize: "14px",
    },
    productDesc: {
        fontSize: "12px",
        color: "#9ca3af",
        marginTop: "2px",
        maxWidth: "240px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
    price: {
        fontWeight: 800,
        color: "#4f46e5",
        fontSize: "15px",
    },
    emptyState: {
        padding: "60px 24px",
        textAlign: "center",
        color: "#9ca3af",
        fontSize: "14px",
    },
   
    
};

function getStockBadge(stock) {
    if (stock === 0) {
        return { background: "#fff1f2", color: "#e11d48", borderRadius: "50px", padding: "4px 12px", fontSize: "11px", fontWeight: 700, display: "inline-block" };
    } else if (stock < 5) {
        return { background: "#fffbeb", color: "#d97706", borderRadius: "50px", padding: "4px 12px", fontSize: "11px", fontWeight: 700, display: "inline-block" };
    }
    return { background: "#f0fdf4", color: "#16a34a", borderRadius: "50px", padding: "4px 12px", fontSize: "11px", fontWeight: 700, display: "inline-block" };
}

export default function Index({ products = [] }) {
    return (
        <div style={styles.page}>
            <div style={styles.card}>
                {/* Card Header */}
                <div style={styles.header}>
                    <div style={styles.headerLeft}>
                        <h1 style={styles.title}>📦 Product Inventory</h1>
                        <p style={styles.subtitle}>Manage and track your active products</p>
                    </div>
                    <Link href="/products/create">
                        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white text-sm font-semibold rounded-xl shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer">
                            <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <span>Add Product</span>
                        </button>
                    </Link>
                    <span style={styles.badge}>{products.length} Items</span>
                </div>

                {/* Table */}
                {products.length === 0 ? (
                    <div style={styles.emptyState}>
                        <div style={{ fontSize: "48px", marginBottom: "12px" }}>🗃️</div>
                        <p style={{ fontWeight: 600, fontSize: "16px", color: "#374151" }}>No products found</p>
                        <p style={{ fontSize: "13px", marginTop: "4px" }}>Add products to populate your inventory list.</p>
                    </div>
                ) : (
                    <div style={styles.tableWrapper}>
                        <table style={styles.table}>
                            <thead style={styles.thead}>
                                <tr>
                                    <th style={styles.thCenter}>ID</th>
                                    <th style={styles.th}>Product Name</th>
                                    <th style={styles.th}>Title</th>
                                    <th style={styles.th}>Price</th>
                                    <th style={styles.th}>Stock</th>
                                    <th style={styles.th}>Image</th>
                                    <th style={styles.th}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr
                                        key={product.id}
                                        style={styles.tr}
                                        onMouseEnter={(e) => (e.currentTarget.style.background = "#fafafe")}
                                        onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                                    >
                                        <td style={styles.tdCenter}>
                                            <span style={styles.idBadge}>#{product.id}</span>
                                        </td>
                                        <td style={styles.td}>
                                            <div style={styles.productName}>{product.name}</div>
                                            {product.description && (
                                                <div style={styles.productDesc}>{product.description}</div>
                                            )}
                                        </td>

                                        <td style={styles.td}>
                                            <span style={styles.price}>${(product.title)}</span>
                                        </td>
                                        <td style={styles.td}>
                                            <span style={styles.price}>${parseFloat(product.price).toFixed(2)}</span>
                                        </td>

                                        <td style={styles.td}>
                                            <span style={getStockBadge(product.stock)}>
                                                {product.stock === 0
                                                    ? "Out of Stock"
                                                    : product.stock < 5
                                                    ? `⚠ ${product.stock} left`
                                                    : `✓ ${product.stock} units`}
                                            </span>
                                        </td>
                                        <td style={styles.td}>
                                            <Link href={product.image} target="_blank">
                                                <img src={product.image} alt={product.name} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                                            </Link>

                                        </td>
                                        <td style={styles.td}>
                                            <Link href={`/products/${product.id}/edit`}>
                                                <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white text-sm font-semibold rounded-xl shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer">
                                                    <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                    </svg>
                                                    <span>Edit</span>
                                                </button>
                                            </Link>
                                            <Link href={`/products/${product.id}/delete`} method="delete" as="button">
                                                <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white text-sm font-semibold rounded-xl shadow-md shadow-red-500/25 hover:shadow-lg hover:shadow-red-500/35 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer">
                                                    <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                    </svg>
                                                    <span>Delete</span>
                                                </button>
                                            </Link>

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
                        Showing {products.length} of {products.length} products
                    </span>
                </div>
            </div>
        </div>
    );
}
