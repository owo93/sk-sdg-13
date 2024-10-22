import Image from "next/image";
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

export function ImageCard({ title, body, bullet, image, varient }) {
  const isTextRight = varient === "text_right";

  return (
    <div className="mx-auto mb-4 max-w-screen-lg px-4">
      <div
        className={`min-h-300 flex flex-col justify-center rounded-lg border border-gray-200 bg-neutral-50 p-4 shadow-md ${
          isTextRight ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}>
        <div className="w-full pb-2 lg:w-4/12">
          <Image
            src={image}
            alt={title}
            className="h-auto w-full rounded-lg"
          />
        </div>
        <article
          className={`lg:w-8/12" prose prose-zinc w-full ${
            isTextRight ? "pr-4" : "pl-4"
          }`}>
          <h1 className="text-3xl font-bold text-neutral-700">{title}</h1>
          <p className="text-base text-neutral-500">{body}</p>
          <ul className="list-disc pl-6">
            {bullet?.map((item, index) => (
              <li
                key={index}
                className="text-base">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}
