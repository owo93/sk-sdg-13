import Link from "next/link";

export default function NavBar() {
  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-center border-b border-black/40 bg-black/70 font-semibold text-white backdrop-blur-lg">
      <ul className="flex flex-col gap-10 lg:flex-row">
        <li className="p-6">
          <Link href="#home">Home</Link>
        </li>
        <li className="p-6">Statistics</li>
        <li className="p-6">
          <Link href="#init">Initiatives</Link>
        </li>
        <li className="p-6">About Us</li>
        <li className="p-6">Contact</li>
      </ul>
    </div>
  );
}
