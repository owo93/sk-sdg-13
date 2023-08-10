import Layout from "@/components/layout";
import Image from "next/image";

export default function Environment() {
  return (
    <Layout>
      <div className="bg-neutral-800">
        <div className="items-center py-10">
          <h1 className="text-center text-7xl font-extrabold text-white">
            Creating a better enviroment
          </h1>
        </div>

        <div className="inline-flex flex-1 items-center justify-start gap-14 px-24 pb-16">
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
          <Image
            src={"/images/environment/environment1.png"}
            width={440}
            height={330}
          />
        </div>

        <div className="inline-flex flex-1 items-center justify-start gap-14 px-24 pb-16">
          <Image
            src={"/images/environment/environment2.png"}
            width={440}
            height={330}
          />
          <article className="prose max-w-full flex-col">
            <h3 className="text-[40px] font-bold text-white">Tree for us:</h3>
            <p className="text-2xl text-zinc-400">
              Tree for Us is a Thai social enterprise that plants trees to help
              fight climate change. The company was founded in 2016 by a group
              of friends who were passionate about the environment. Tree for Us
              plants trees in partnership with local communities and businesses.
              The company also provides educational programs about the
              importance of trees.
            </p>
            <p className="text-2xl text-zinc-400">
              Tree for Us has planted over 100,000 trees since its inception.
              The company's trees have helped to absorb over 10,000 tons of
              carbon dioxide from the atmosphere. Tree for Us is also working to
              improve the livelihoods of local communities by providing them
              with jobs and training in sustainable forestry.
            </p>
          </article>
        </div>

        <div className="inline-flex flex-1 items-center justify-start gap-14 px-24 pb-16">
          <article className="prose max-w-full flex-col">
            <h3 className="text-[40px] font-bold text-white">Green Cement:</h3>
            <p className="text-2xl text-zinc-400">
              SCG, a leading Thai conglomerate, has announced its commitment to
              achieve net-zero carbon emissions from cement and concrete by
              2050. This is part of SCG's Circular Way initiative, which aims to
              create a more sustainable future for the construction industry.
            </p>
            <p className="text-2xl text-zinc-400">
              To achieve net-zero carbon emissions, SCG will focus on reducing
              emissions from its operations, developing low-carbon products, and
              investing in carbon offsetting projects. SCG will also work with
              its customers and partners to reduce the carbon footprint of the
              construction industry as a whole.
            </p>
          </article>
          <Image
            src={"/images/environment/environment3.png"}
            width={440}
            height={330}
          />
        </div>

        <div className="inline-flex flex-1 items-center justify-start gap-14 px-24 pb-16">
          <Image
            src={"/images/environment/environment4.png"}
            width={440}
            height={330}
          />
          <article className="prose max-w-full flex-col">
            <h3 className="text-[40px] font-bold text-white">
              Thailand's involvement in COP26:
            </h3>
            <p className="text-2xl text-zinc-400">
              Thailand has committed to reducing its greenhouse gas emissions by
              20% by 2030. At the COP26 meeting, Thailand announced a number of
              new initiatives to help achieve this goal, including:
            </p>
            <ul className="text-2xl text-zinc-400">
              <li>Investing in renewable energy</li>
              <li>Promoting energy efficiency</li>
              <li>Protecting forests</li>
              <li>Supporting climate-resilient agriculture</li>
            </ul>
          </article>
        </div>
      </div>
    </Layout>
  );
}
