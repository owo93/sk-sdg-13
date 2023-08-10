import Link from "next/link";
import React from "react";

export default function Card({ title, body, actions }) {
  return (
    <div className="min-h-300 flex flex-col rounded-lg border border-gray-200 bg-neutral-50 p-6 shadow-md">
      <div>
        <p className="mb-2 text-2xl font-bold tracking-tight text-neutral-700">
          {title}
        </p>
        <p className="mb-3 font-normal text-neutral-500">{body}</p>
      </div>
      <div className="mt-auto flex items-end justify-between">
        {actions.map((action, index) => (
          <Link
            key={index}
            target="_blank"
            href={action}
            className="inline-flex items-center rounded-lg bg-orange-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300">
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
        ))}
      </div>
    </div>
  );
}
