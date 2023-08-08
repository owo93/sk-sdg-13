import Image from "next/image";

export default function Footer() {
  const names = ["Ike", "Trust", "Sun", "Peak", "Nasa"];
  const roles = [
    "Developer & Assistant Manager",
    "Project Manager & UI/UX",
    "Developer",
    "Developer",
    "UI/UX",
  ];

  return (
    <div className="mx-auto w-full max-w-7xl items-center px-5 py-24 md:px-12 lg:px-16">
      <ul className="grid grid-cols-5 gap-4">
        {names.map((name, index) => (
          <li key={index}>
            <div className="flex flex-col items-center gap-4 text-center">
              <Image
                className="h-16 w-16 rounded-full object-cover lg:h-20 lg:w-20"
                src=""
                alt=""
              />
              <div className="space-y-1">
                <h3 className="text-lg font-medium leading-6 text-black">
                  {name}
                </h3>
                <p className="text-base text-gray-500">{roles[index]}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
