"use client";
// pages/products/[id].js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductPage() {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const productData = {
    title:
      "IAS-2 | PROVISIONS OF INVENTORIES IN IAS-2 | DISCLOSURES OF INVENTORIES AS PER IAS-2",
    price: 10,
    image: "/book.png", // Assuming image is stored in public directory
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    // Add cart logic here
  };

  const shareLinks = [
    { type: "facebook", icon: "F", href: "#" },
    { type: "twitter", icon: "T", href: "#" },
    { type: "whatsapp", icon: "W", href: "#" },
    { type: "email", icon: "E", href: "#" },
    { type: "copy", icon: "C", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{productData.title}</title>
      </Head>

      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
          </Link>

          <div className="flex-1 max-w-xl mx-4">
            <input
              type="search"
              placeholder="Search for products"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/home" className="hover:text-indigo-600">
              Home
            </Link>
            <Link href="/account" className="hover:text-indigo-600">
              Account
            </Link>
            <Link href="/cart" className="hover:text-indigo-600">
              Cart
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src={productData.image}
                alt={productData.title}
                width={500}
                height={500}
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2">
            <nav className="text-sm mb-4 text-gray-600">
              <Link href="/" className="hover:underline text-indigo-600">
                Home
              </Link>
              <span className="mx-2">›</span>
              <span>{productData.title}</span>
            </nav>

            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              {productData.title}
            </h1>
            <p className="text-2xl font-semibold mb-6 text-green-600">
              ₹{productData.price}
            </p>

            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className={`w-full py-3 px-4 rounded-lg text-white text-lg font-semibold transition-all ${
                  isAddedToCart
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}
                disabled={isAddedToCart}
              >
                {isAddedToCart ? "Added to Cart" : "Add to Cart"}
              </button>

              <button className="w-full py-3 px-4 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition-all">
                Buy Now
              </button>
            </div>

            <div className="mt-8">
              <p className="mb-4 text-gray-600 text-sm">Share this product:</p>
              <div className="flex gap-3">
                {shareLinks.map((link) => (
                  <a
                    key={link.type}
                    href={link.href}
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full transition-all"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
