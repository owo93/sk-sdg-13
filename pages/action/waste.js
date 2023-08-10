import Layout from "@/components/layout";
import Image from "next/image";

export default function Waste() {
  return (
    <Layout>
      <div className="bg-neutral-800">
        <div className="items-center py-10">
          <h1 className="text-center text-7xl font-extrabold text-white">
            Waste management
          </h1>
        </div>

        <div className="inline-flex flex-1 items-center justify-start gap-14 px-24 pb-16">
          <article className="prose max-w-full flex-col">
            <h3 className="text-[40px] font-bold text-white">Trash Lucky:</h3>
            <p className="text-2xl text-zinc-400">
              Trash Lucky is a recycling program in Thailand that incentivizes
              people to recycle by giving them raffle tickets for prizes, such
              as gold or shopping vouchers. When people sort and donate their
              recyclables to Trash Lucky, they earn raffle tickets based on the
              amount of plastic, paper, glass, or metal they recycle. Trash
              Lucky then sells the recyclables to recyclers and uses part of the
              income to fund raffle prizes.
            </p>
            <p className="text-2xl text-zinc-400">
              Trash Lucky has been successful in engaging people in recycling.
              The company has recycled over 100 tons of waste and has given away
              over 1,000 prizes. Trash Lucky is also working with businesses and
              communities to promote recycling.
            </p>
          </article>
          <Image
            src={"/images/waste/waste1.png"}
            width={440}
            height={330}
          />
        </div>

        <div className="inline-flex flex-1 items-center justify-start gap-14 px-24 pb-16">
          <Image
            src={"/images/waste/waste2.png"}
            width={440}
            height={330}
          />
          <article className="prose max-w-full flex-col">
            <h3 className="text-[40px] font-bold text-white">
              Green Bangkok 2030 Project:
            </h3>
            <p className="text-2xl text-zinc-400">
              A citywide initiative to make Bangkok more sustainable and
              livable. The project was launched in 2015 by the Bangkok
              Metropolitan Administration (BMA) and the C40 Cities Climate
              Leadership Group.
            </p>
            <p className="text-2xl text-zinc-400">
              The Green Bangkok 2030 Project has three main goals:
            </p>
            <ul className="text-2xl text-zinc-400">
              <li>To reduce greenhouse gas emissions by 20% by 2030.</li>
              <li>To improve air quality by 15% by 2030.</li>
              <li>
                To increase the amount of green space in Bangkok by 50% by 2030.
              </li>
            </ul>
          </article>
        </div>

        <div className="inline-flex flex-1 items-center justify-start gap-14 px-24 pb-16">
          <article className="prose max-w-full flex-col">
            <h3 className="text-[40px] font-bold text-white">
              National Zero Waste Action Plan:
            </h3>
            <p className="text-2xl text-zinc-400">
              National Zero Waste Action Plan: The National Zero Waste Action
              Plan is a government initiative that aims to reduce waste in
              Thailand by 50% by 2030. The plan includes a number of measures,
              such as increasing recycling rates, reducing single-use plastics,
              and promoting composting.
            </p>
            <p className="text-2xl text-zinc-400">
              The NZWAP is a comprehensive plan that aims to address the root
              causes of waste in Thailand. The plan is ambitious, but it is
              achievable with the support of the government, businesses, and the
              public.
            </p>
            <p className="text-2xl text-zinc-400">
              NZWAP is a promising initiative that has the potential to make a
              significant impact on the environment and the quality of life in
              Thailand.
            </p>
          </article>
          <Image
            src={"/images/waste/waste3.png"}
            width={440}
            height={330}
          />
        </div>

        <div className="inline-flex flex-1 items-center justify-start gap-14 px-24 pb-16">
          <Image
            src={"/images/waste/waste4.png"}
            width={440}
            height={330}
          />
          <article className="prose max-w-full flex-col">
            <h3 className="text-[40px] font-bold text-white">
              Pollution Control Department (PCD):
            </h3>
            <p className="text-2xl text-zinc-400">
              The Pollution Control Department (PCD) is a government agency
              under the Ministry of Natural Resources and Environment (MONRE) of
              Thailand. The PCD is responsible for regulating air pollution,
              water pollution, and solid waste management in Thailand.
            </p>
            <p className="text-2xl text-zinc-400">
              The PCD is a key player in the government's efforts to reduce
              waste in Thailand. The PCD's programs and enforcement efforts are
              making a difference in reducing waste and raising awareness about
              the importance of sustainability.
            </p>
          </article>
        </div>
      </div>
    </Layout>
  );
}
