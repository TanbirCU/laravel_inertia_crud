import React, { useState } from "react";
import { Link, useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        title: "",
        description: "",
        price: "",
        stock: 0,
        image: "",
    });

    const [imagePreview, setImagePreview] = useState("");

    const handleImageChange = (e) => {
        const value = e.target.value;
        setData("image", value);
        setImagePreview(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/products");
    };

    return (
        <div className="min-h-screen bg-slate-50/60 py-10 px-4 sm:px-6 lg:px-8 flex justify-center items-center font-sans">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden transition-all duration-300">
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 px-8 py-6 text-white flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">📦</span>
                            <h1 className="text-xl font-bold tracking-tight">Create New Product</h1>
                        </div>
                        <p className="text-indigo-100 text-xs mt-1 font-medium">
                            Add a new item to your product catalog
                        </p>
                    </div>
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 hover:bg-white/25 active:bg-white/30 text-white text-xs font-semibold rounded-lg backdrop-blur-sm transition-all cursor-pointer"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Back to List
                    </Link>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Product Name */}
                        <div className="md:col-span-2">
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                                Product Name <span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                                placeholder="e.g. Wireless Noise-Canceling Headphones"
                                className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 ${
                                    errors.name
                                        ? "border-rose-300 bg-rose-50/30 focus:ring-rose-500 focus:border-rose-500 text-rose-900"
                                        : "border-slate-200 bg-white hover:border-slate-300 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800"
                                }`}
                                required
                            />
                            {errors.name && <p className="text-xs text-rose-500 mt-1 font-medium">{errors.name}</p>}
                        </div>

                        {/* Title / Subtitle */}
                        <div className="md:col-span-2">
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                                Tagline / Short Title <span className="text-slate-400 font-normal normal-case">(Optional)</span>
                            </label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) => setData("title", e.target.value)}
                                placeholder="e.g. Premium Audio Experience"
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-800 transition-all duration-200 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {errors.title && <p className="text-xs text-rose-500 mt-1 font-medium">{errors.title}</p>}
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                                Price ($) <span className="text-rose-500">*</span>
                            </label>
                            <div className="relative">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-semibold">$</span>
                                <input
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    value={data.price}
                                    onChange={(e) => setData("price", e.target.value)}
                                    placeholder="0.00"
                                    className={`w-full pl-8 pr-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 ${
                                        errors.price
                                            ? "border-rose-300 bg-rose-50/30 focus:ring-rose-500 focus:border-rose-500 text-rose-900"
                                            : "border-slate-200 bg-white hover:border-slate-300 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800"
                                    }`}
                                    required
                                />
                            </div>
                            {errors.price && <p className="text-xs text-rose-500 mt-1 font-medium">{errors.price}</p>}
                        </div>

                        {/* Stock */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                                Stock Quantity <span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="number"
                                min="0"
                                value={data.stock}
                                onChange={(e) => setData("stock", e.target.value)}
                                placeholder="0"
                                className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 ${
                                    errors.stock
                                        ? "border-rose-300 bg-rose-50/30 focus:ring-rose-500 focus:border-rose-500 text-rose-900"
                                        : "border-slate-200 bg-white hover:border-slate-300 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800"
                                }`}
                                required
                            />
                            {errors.stock && <p className="text-xs text-rose-500 mt-1 font-medium">{errors.stock}</p>}
                        </div>

                        {/* Image URL */}
                        <div className="md:col-span-2">
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                                Image URL <span className="text-slate-400 font-normal normal-case">(Optional)</span>
                            </label>
                            <input
                                type="url"
                                value={data.image}
                                onChange={handleImageChange}
                                placeholder="https://images.unsplash.com/photo-..."
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-800 transition-all duration-200 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {errors.image && <p className="text-xs text-rose-500 mt-1 font-medium">{errors.image}</p>}

                            {/* Image Live Preview */}
                            {imagePreview && (
                                <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="w-16 h-16 object-cover rounded-lg border border-slate-200 shadow-sm"
                                        onError={(e) => {
                                            e.target.style.display = "none";
                                        }}
                                    />
                                    <div>
                                        <p className="text-xs font-semibold text-slate-700">Image Preview</p>
                                        <p className="text-[11px] text-slate-400 truncate max-w-xs">{imagePreview}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                                Description <span className="text-slate-400 font-normal normal-case">(Optional)</span>
                            </label>
                            <textarea
                                rows="3"
                                value={data.description}
                                onChange={(e) => setData("description", e.target.value)}
                                placeholder="Write key features, specifications, or product overview..."
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-800 transition-all duration-200 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                            ></textarea>
                            {errors.description && <p className="text-xs text-rose-500 mt-1 font-medium">{errors.description}</p>}
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                        <Link
                            href="/products"
                            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 transition-all cursor-pointer"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 active:scale-[0.98] text-white text-sm font-semibold rounded-xl shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 cursor-pointer"
                        >
                            {processing ? (
                                <>
                                    <svg className="w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                    </svg>
                                    <span>Saving...</span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    <span>Save Product</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}