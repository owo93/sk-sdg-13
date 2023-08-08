import Image from "next/image";
import quoteGrid from "/public/images/quoteGrid.png";

export default function Quotes() {
  return (
    <div className="w-full bg-white p-4">
      <div className="flex items-center justify-center">
        <Image
          src={quoteGrid}
          alt="Quotes from important people in Thai society"
          width={1000}
        />
      </div>
    </div>
  );
}
