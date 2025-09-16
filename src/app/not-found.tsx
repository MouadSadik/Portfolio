"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl mb-6">Page Not Found</h2>
            <p className="mb-6">Sorry, the page you are looking for does not exist.</p>
            <Link
                href="/"
                className="px-6 py-3 bg-primary text-muted  rounded "
            >
                Go Back Home
            </Link>
        </div>
    );
}