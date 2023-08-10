import Link from "next/link";
import React from "react";

export default function Card({ title, body }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
      <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </p>
      <p className="mb-3 font-normal text-gray-700">{body}</p>
      <Link
        href="/action/energy"
        className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
        Read more
        <svg
          className="ml-2 h-3.5 w-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
}
