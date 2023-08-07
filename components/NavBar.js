import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-center items-center w-full text-white font-semibold bg-black/40 backdrop-blur-lg">
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
