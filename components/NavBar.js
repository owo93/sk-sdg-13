import Link from "next/link";

export default function NavBar() {
  return (
    <div className="sticky top-0 flex w-full items-center justify-center bg-zinc-500/40 font-semibold text-white backdrop-blur-lg">
      <ul className="flex">
        <li className="p-4">Home</li>
        <li className="p-4">Statistics</li>
        <li className="p-4">Initiatives</li>
        <li className="p-4">About Us</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
}
