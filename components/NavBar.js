import Link from "next/link";

export default function NavBar() {
  return (
    <div
      className="sticky top-0 flex w-full items-center justify-center border-b border-black/40 bg-black/70
     font-semibold text-white backdrop-blur-lg">
      <ul className="flex gap-10">
        <a
          className="p-6"
          href="#home">
          Home
        </a>
        <li className="p-6">Statistics</li>
        <a
          className="p-6"
          href="#init">
          Initiatives
        </a>
        <li className="p-6">About Us</li>
        <li className="p-6">Contact</li>
      </ul>
    </div>
  );
}
