import { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import Layout from "../../components/Layout";
import Swal from "sweetalert2";

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
        maxWidth: "900px",
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
        padding: "40px",
    },
    row: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "28px",
        marginBottom: "32px",
        alignItems: "stretch",
    },
    col2: {
        display: "grid",
        gridTemplateColumns: "1.2fr 0.8fr",
        gap: "16px",
    },
    col4: {
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr 1.2fr",
        gap: "16px",
        alignItems: "end",
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
    select: {
        width: "100%",
        padding: "12px 14px",
        border: "2px solid #e5e7eb",
        borderRadius: "12px",
        fontSize: "14px",
        color: "#111827",
        background: "#f9fafb url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M7 9l3 3 3-3' stroke='%236b7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\") no-repeat right 12px center/18px",
        appearance: "none",
        outline: "none",
        transition: "border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
        boxSizing: "border-box",
        cursor: "pointer",
    },
    input: {
        width: "100%",
        padding: "12px 14px",
        border: "2px solid #e5e7eb",
        borderRadius: "12px",
        fontSize: "14px",
        color: "#111827",
        background: "#f9fafb",
        outline: "none",
        transition: "border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
        boxSizing: "border-box",
    },
    displayBox: {
        background: "#f8fafd",
        border: "2px dashed #e2e8f0",
        borderRadius: "16px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100px",
    },
    infoGrid: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "6px 12px",
        fontSize: "13px",
    },
    infoLabel: {
        fontWeight: 700,
        color: "#64748b",
    },
    infoValue: {
        color: "#1e293b",
    },
    detailsPlaceholder: {
        color: "#94a3b8",
        fontSize: "13px",
        textAlign: "center",
        fontStyle: "italic",
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
        transition: "opacity 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease",
        boxShadow: "0 6px 20px rgba(102,126,234,0.4)",
    },
    calcValue: {
        background: "#f1f5f9",
        border: "2px solid #e2e8f0",
        borderRadius: "12px",
        padding: "12px 14px",
        fontSize: "14px",
        fontWeight: 700,
        color: "#334155",
        boxSizing: "border-box",
        minHeight: "48px",
        display: "flex",
        alignItems: "center",
    },
    divider: {
        height: "1px",
        background: "#f1f5f9",
        margin: "0 0 32px 0",
    },
    errorText: {
        color: "#ef4444",
        fontSize: "12px",
        marginTop: "6px",
        fontWeight: 500,
    }
};

const focusStyle = {
    borderColor: "#667eea",
    background: "#fff",
    boxShadow: "0 0 0 4px rgba(102,126,234,0.12)",
};

const errorInputStyle = {
    borderColor: "#f87171",
    background: "#fef2f2",
};

const mockClients = [
    { id: 1, name: "Acme Corporation", email: "billing@acme.com", phone: "+1 (555) 019-2834", address: "123 Industrial Way, Suite A" },
    { id: 2, name: "Globex Logistics", email: "finance@globex.com", phone: "+1 (555) 014-9988", address: "456 Commerce Blvd, Floor 4" },
    { id: 3, name: "Stark Tech", email: "invoices@stark.com", phone: "+1 (555) Stark-01", address: "10880 Malibu Point, Malibu, CA" }
];

const mockProducts = [
    { id: 1, name: "Premium Wireless Headset", price: 99.99 },
    { id: 2, name: "RGB Mechanical Keyboard", price: 149.50 },
    { id: 3, name: "34-inch UltraWide Monitor", price: 389.00 }
];

export default function Edit({ sales, clients = [], products = [] }) {
    const { data, setData, put, processing, errors } = useForm({
        client_id: sales.client_id || "",
        items: sales.sales_details ? sales.sales_details.map(d => ({
            productId: d.product_id.toString(),
            qty: d.qty
        })) : [],
    });

    const [tempProductId, setTempProductId] = useState("");
    const [tempQty, setTempQty] = useState(1);
    const [focused, setFocused] = useState({});

    const handleFocus = (name) => setFocused((f) => ({ ...f, [name]: true }));
    const handleBlur  = (name) => setFocused((f) => ({ ...f, [name]: false }));

    const handleAddSales = () => {
        if (!tempProductId) return;
        const alreadyAdded = data.items.some(item => parseInt(item.productId) === parseInt(tempProductId));
        if (alreadyAdded) return;
        setData("items", [...data.items, { productId: tempProductId, qty: tempQty }]);
        setTempProductId("");
        setTempQty(1);
    };
    
    const handleRemoveSales = (index) => {
        setData("items", data.items.filter((_, idx) => idx !== index));
    };

    const handleProductChange = (index, productId) => {
        const newItems = [...data.items];
        newItems[index] = { ...newItems[index], productId };
        setData("items", newItems);
    };

    const handleQtyChange = (index, qty) => {
        const newItems = [...data.items];
        newItems[index] = { ...newItems[index], qty: qty === "" ? "" : Math.max(1, parseInt(qty) || 1) };
        setData("items", newItems);
    };

    const handleQtyBlur = (index) => {
        handleBlur(`qty_${index}`);
        const newItems = [...data.items];
        if (newItems[index].qty === "" || newItems[index].qty < 1) {
            newItems[index].qty = 1;
            setData("items", newItems);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/sales/${sales.id}`, {
            onSuccess: () => {
                Swal.fire({
                    title: "Updated!",
                    text: "Invoice updated successfully!",
                    icon: "success",
                    timer: 1800,
                    showConfirmButton: false,
                    customClass: {
                        popup: "rounded-2xl shadow-2xl border border-slate-100",
                    },
                });
            },
        });
    };

    const activeClients = clients.length > 0 ? clients : mockClients;
    const activeProducts = products.length > 0 ? products : mockProducts;

    const selectedClient = activeClients.find(c => c.id === parseInt(data.client_id));

    const grandTotal = data.items.reduce((sum, item) => {
        const prod = activeProducts.find(p => p.id === parseInt(item.productId));
        const p = prod ? parseFloat(prod.price) : 0;
        const q = parseInt(item.qty) || 0;
        return sum + (p * q);
    }, 0);

    const addedProductIds = data.items.map(item => parseInt(item.productId)).filter(Boolean);

    const selectStyle = (name, errorKey) => ({
        ...styles.select,
        ...(focused[name] ? focusStyle : {}),
        ...(errorKey && errors[errorKey] ? errorInputStyle : {}),
    });

    const inputStyle = (name, errorKey) => ({
        ...styles.input,
        ...(focused[name] ? focusStyle : {}),
        ...(errorKey && errors[errorKey] ? errorInputStyle : {}),
    });

    return (
        <Layout>
            <div style={styles.page}>
                 <div style={styles.card}>
                     {/* Header */}
                     <div style={styles.cardHeader}>
                         <div>
                             <h1 style={styles.headerTitle}>Edit Sales Invoice #{sales.id}</h1>
                             <p style={styles.headerSub}>Modify details for invoice {sales.invoice_no}</p>
                         </div>
                         <Link href="/sales" style={styles.backLink}>
                             <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                             </svg>
                             Back
                         </Link>
                     </div>

                     {/* Body */}
                     <div style={styles.body}>
                         <form onSubmit={handleSubmit}>
                             
                             {/* Row 1: Client Select & Details */}
                             <div style={styles.row}>
                                 <div>
                                     <label style={styles.label} htmlFor="client_select">Select Client</label>
                                     <select
                                         id="client_select"
                                         style={selectStyle("client", "client_id")}
                                         value={data.client_id}
                                         onChange={(e) => setData("client_id", e.target.value)}
                                         onFocus={() => handleFocus("client")}
                                         onBlur={() => handleBlur("client")}
                                     >
                                         <option value="">-- Choose Client --</option>
                                         {activeClients.map(client => (
                                             <option key={client.id} value={client.id}>{client.name}</option>
                                         ))}
                                     </select>
                                     {errors.client_id && <div style={styles.errorText}>{errors.client_id}</div>}
                                 </div>

                                 <div style={styles.displayBox}>
                                     {selectedClient ? (
                                         <div style={styles.infoGrid}>
                                             <span style={styles.infoLabel}>Company:</span>
                                             <span style={styles.infoValue}>{selectedClient.name}</span>
                                             <span style={styles.infoLabel}>Email:</span>
                                             <span style={styles.infoValue}>{selectedClient.email}</span>
                                             <span style={styles.infoLabel}>Phone:</span>
                                             <span style={styles.infoValue}>{selectedClient.phone}</span>
                                             <span style={styles.infoLabel}>Address:</span>
                                             <span style={styles.infoValue}>{selectedClient.address}</span>
                                         </div>
                                     ) : (
                                         <span style={styles.detailsPlaceholder}>
                                             Select a client to view their contact information here.
                                         </span>
                                     )}
                                 </div>
                             </div>

                             <div style={styles.divider}></div>

                             {/* Row 2: Product list */}
                             <div style={{ marginBottom: "24px" }}>
                                 {/* Main Selection Row (Always on top) */}
                                 {(() => {
                                     const selectedProduct = activeProducts.find(p => p.id === parseInt(tempProductId));
                                     const price = selectedProduct ? parseFloat(selectedProduct.price) : 0;
                                     const total = price * (parseInt(tempQty) || 0);

                                     return (
                                         <div style={{ marginBottom: "20px" }}>
                                             <div style={styles.col4}>
                                                 <div>
                                                     <label style={styles.label} htmlFor="temp_product_select">Product</label>
                                                     <select
                                                         id="temp_product_select"
                                                         style={selectStyle("temp_product")}
                                                         value={tempProductId}
                                                         onChange={(e) => setTempProductId(e.target.value)}
                                                         onFocus={() => handleFocus("temp_product")}
                                                         onBlur={() => handleBlur("temp_product")}
                                                     >
                                                         <option value="">-- Choose Product --</option>
                                                         {activeProducts
                                                             .filter(product => !addedProductIds.includes(product.id))
                                                             .map(product => (
                                                                 <option key={product.id} value={product.id}>{product.name}</option>
                                                             ))
                                                         }
                                                     </select>
                                                 </div>

                                                 <div>
                                                     <label style={styles.label}>Price</label>
                                                     <div style={styles.calcValue}>
                                                         ${price.toFixed(2)}
                                                     </div>
                                                 </div>

                                                 <div>
                                                     <label style={styles.label} htmlFor="temp_qty_input">Quantity</label>
                                                     <input
                                                         type="number"
                                                         id="temp_qty_input"
                                                         min="1"
                                                         style={inputStyle("temp_qty")}
                                                         value={tempQty}
                                                         onChange={(e) => {
                                                             const val = e.target.value;
                                                             setTempQty(val === "" ? "" : Math.max(1, parseInt(val) || 1));
                                                         }}
                                                         onFocus={() => handleFocus("temp_qty")}
                                                         onBlur={() => {
                                                             handleBlur("temp_qty");
                                                             if (tempQty === "" || tempQty < 1) {
                                                                 setTempQty(1);
                                                             }
                                                         }}
                                                     />
                                                 </div>

                                                 <div>
                                                     <label style={styles.label}>Total</label>
                                                     <div style={{ ...styles.calcValue, color: "#6366f1", background: "#f5f3ff", borderColor: "#ddd6fe" }}>
                                                         ${total.toFixed(2)}
                                                     </div>
                                                 </div>

                                                 <div>
                                                     <label style={styles.label}>Actions</label>
                                                     <div style={{ display: "flex", gap: "8px" }}>
                                                         <button
                                                             type="button"
                                                             style={{ ...styles.btn, marginTop: 0, padding: "12px", width: "42px", height: "42px" }}
                                                             onClick={handleAddSales}
                                                             title="Add Item"
                                                         >
                                                             <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4.5v15m7.5-7.5h-15" />
                                                             </svg>
                                                         </button>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     );
                                 })()}

                                 {/* Added Rows (Below Main Selection) */}
                                 {data.items.map((item, index) => {
                                     const selectedProduct = activeProducts.find(p => p.id === parseInt(item.productId));
                                     const price = selectedProduct ? parseFloat(selectedProduct.price) : 0;
                                     const total = price * (parseInt(item.qty) || 0);

                                     const productErrorKey = `items.${index}.productId`;
                                     const qtyErrorKey = `items.${index}.qty`;

                                     return (
                                         <div key={index} style={{ marginBottom: "20px" }}>
                                             <div style={styles.col4}>
                                                 <div>
                                                     <select
                                                         id={`product_select_${index}`}
                                                         style={selectStyle(`product_${index}`, productErrorKey)}
                                                         value={item.productId}
                                                         onChange={(e) => handleProductChange(index, e.target.value)}
                                                         onFocus={() => handleFocus(`product_${index}`)}
                                                         onBlur={() => handleBlur(`product_${index}`)}
                                                     >
                                                         <option value="">-- Choose Product --</option>
                                                         {activeProducts
                                                             .filter(product => product.id === parseInt(item.productId) || !addedProductIds.includes(product.id))
                                                             .map(product => (
                                                                 <option key={product.id} value={product.id}>{product.name}</option>
                                                             ))
                                                         }
                                                     </select>
                                                     {errors[productErrorKey] && <div style={styles.errorText}>{errors[productErrorKey]}</div>}
                                                 </div>

                                                 <div>
                                                     <div style={styles.calcValue}>
                                                         ${price.toFixed(2)}
                                                     </div>
                                                 </div>

                                                 <div>
                                                     <input
                                                         type="number"
                                                         id={`qty_input_${index}`}
                                                         min="1"
                                                         style={inputStyle(`qty_${index}`, qtyErrorKey)}
                                                         value={item.qty}
                                                         onChange={(e) => handleQtyChange(index, e.target.value)}
                                                         onFocus={() => handleFocus(`qty_${index}`)}
                                                         onBlur={() => handleQtyBlur(index)}
                                                     />
                                                     {errors[qtyErrorKey] && <div style={styles.errorText}>{errors[qtyErrorKey]}</div>}
                                                 </div>

                                                 <div>
                                                     <div style={{ ...styles.calcValue, color: "#6366f1", background: "#f5f3ff", borderColor: "#ddd6fe" }}>
                                                         ${total.toFixed(2)}
                                                     </div>
                                                 </div>

                                                 <div>
                                                     <div style={{ display: "flex", gap: "8px" }}>
                                                         <button
                                                             type="button"
                                                             style={{ ...styles.btn, marginTop: 0, padding: "12px", width: "42px", height: "42px", background: "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)", boxShadow: "0 6px 20px rgba(244,63,94,0.3)" }}
                                                             onClick={() => handleRemoveSales(index)}
                                                             title="Remove Item"
                                                         >
                                                             <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                             </svg>
                                                         </button>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     );
                                 })}
                             </div>

                             {errors.items && <div style={{ ...styles.errorText, marginBottom: "20px" }}>{errors.items}</div>}

                             {/* Grand Total Display */}
                             <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", alignItems: "center", marginBottom: "32px", paddingRight: "8px" }}>
                                 <span style={{ fontSize: "16px", fontWeight: 700, color: "#64748b" }}>Grand Total:</span>
                                 <span style={{ fontSize: "24px", fontWeight: 800, color: "#6366f1" }}>${grandTotal.toFixed(2)}</span>
                             </div>

                             {/* Submit Button */}
                             <button
                                 type="submit"
                                 style={{ ...styles.btn, opacity: processing ? 0.7 : 1 }}
                                 disabled={processing}
                                 onMouseEnter={(e) => { if (!processing) { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; } }}
                                 onMouseLeave={(e) => { if (!processing) { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; } }}
                             >
                                 <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                 </svg>
                                 {processing ? "Updating Invoice..." : "Update Sales Invoice"}
                             </button>
                         </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
