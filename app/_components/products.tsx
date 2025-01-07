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
      "IAS-2 | PROVISIONS OF INVENTRIES IN IAS-2 | DISCLOSURES OF INVENTRIES AS PER IAS-2",
    price: 10,
    image: "/ias-2-inventory.jpg", // Assuming image is stored in public directory
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
    <div className="min-h-screen bg-black">
      <Head>
        <title>{productData.title}</title>
      </Head>

      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
          </Link>

          <div className="flex-1 max-w-xl mx-4">
            <input
              type="search"
              placeholder="Search"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div className="flex  items-center gap-4">
            <Link href="/home">Home</Link>
            <Link href="/account">Account</Link>
            <Link href="/cart">Cart</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow">
              <Image
                src="/logo.png"
                alt={productData.title}
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2">
            <nav className="text-sm mb-4">
              <Link href="/" className="text-pink-800">
                Home
              </Link>
              <span className="mx-2">›</span>
              <span className="text-yellow-900">{productData.title}</span>
            </nav>

            <h1 className="text-2xl font-bold mb-4">{productData.title}</h1>
            <p className="text-xl font-bold mb-6">₹{productData.price}</p>

            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full py-2 px-4 border border-red-300 rounded-md text-center"
              >
                {isAddedToCart ? "Added to Cart" : "Add to Cart"}
              </button>

              <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md">
                Buy Now
              </button>
            </div>

            <div className="mt-6">
              <p className="mb-2">Share</p>
              <div className="flex gap-2">
                {shareLinks.map((link) => (
                  <a
                    key={link.type}
                    href={link.href}
                    className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-full"
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
