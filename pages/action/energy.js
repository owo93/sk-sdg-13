import Layout from "@/components/layout";
import Image from "next/image";

export default function Energy() {
    return (
        <Layout>
            <div className="bg-neutral-800">
                <div className="items-center py-10">
                    <h1 className="text-center text-white text-7xl font-extrabold">Alternative Energy</h1>
                </div>

                <div className="justify-start items-center gap-14 inline-flex flex-1 px-24 pb-16">
                    <article className="prose max-w-full flex-col">
                    <h3 className="h-11 text-white text-[40px] font-bold">SCG Zero Burn: </h3>
                    <p className="text-2xl text-zinc-400">
                    SCG [largest and oldest cement and building material company in Thailand] created a project that will help reduce agricultural burning in Thailand. The project involves collecting rice straw, sugarcane leaves, corncobs, and other agricultural waste to produce energy pellets. These pellets can then be used as an alternative fuel for large industrial factories, such as cement factories. The project has several benefits. 
                    </p>
                    <p className="text-2xl text-zinc-400">First, it will help to reduce agricultural burning, which is a major source of air pollution in Thailand. Second, it will create jobs in the agricultural sector. Third, it will help to promote the use of renewable energy in Thailand.</p>
                    </article>
                    <Image src={"/images/energy/energy1.png"} width={440} height={330}/>
                </div>

                <div className="justify-start items-center gap-14 inline-flex flex-1 px-24 pb-16">
                    <Image src={"/images/energy/energy2.png"} width={440} height={330}/>
                    <article className="prose max-w-full flex-col">
                    <h3 className="h-11 text-white text-[40px] font-bold">Alternative Energy Development Plan (AEDP): </h3>
                    <p className="text-2xl text-zinc-400">
                    AEDP is a government plan to promote the use of renewable energy in Thailand. The plan aims to increase the share of renewable energy in Thailand's energy mix to 30% by 2037. 
                    </p>
                    <p className="text-2xl text-zinc-400">
AEDP identifies five main renewable energy sources: biomass, solar, wind, hydropower, and geothermal. The plan outlines a number of policies and measures to promote the development of these renewable energy sources. 
                    </p>
                    <p className="text-2xl text-zinc-400">
AEDP is a comprehensive plan that aims to make Thailand a leader in the use of renewable energy. The plan is expected to help Thailand reduce its reliance on fossil fuels and improve its environmental sustainability.
                    </p>
                    </article>
                </div>

                <div className="justify-start items-center gap-14 inline-flex flex-1 px-24 pb-16">
                    <article className="prose max-w-full flex-col">
                    <h3 className="h-11 text-white text-[40px] font-bold">Feed-in Tariff (FiT) program:</h3>
                    <p className="text-2xl text-zinc-400">
                    The FiT scheme is currently available for five renewable energy sources: biomass, solar, wind, hydropower, and geothermal. The FiT rate for each renewable energy source is determined by the Ministry of Energy of Thailand.
                    </p>
                    <p className="text-2xl text-zinc-400">
The FiT scheme has been successful in promoting the development of renewable energy projects in Thailand. In the past few years, there has been a significant increase in the number of renewable energy projects that have been developed under the FiT scheme.
                    </p>
                    </article>
                    <Image src={"/images/energy/energy3.png"} width={440} height={330}/>
                </div>

                <div className="justify-start items-center gap-14 inline-flex flex-1 px-24 pb-16">
                    <Image src={"/images/energy/energy4.png"} width={440} height={330}/>
                    <article className="prose max-w-full flex-col">
                    <h3 className="h-11 text-white text-[40px] font-bold">National Solar Rooftop Program:</h3>
                    <p className="text-2xl text-zinc-400">
                    The National Solar Rooftop Program is a government initiative to promote the installation of solar panels on roofs of buildings in Thailand. The program provides financial assistance to homeowners and businesses who install solar panels, and it also offers tax breaks.
                    </p>
                    <p className="text-2xl text-zinc-400">
The National Solar Rooftop Program is designed to help reduce the demand for electricity from the national grid. The program is also expected to create jobs and boost the economy of Thailand.
                    </p>
                    </article>
                </div>

                <div className="justify-start items-center gap-14 inline-flex flex-1 px-24 pb-16">
                    <article className="prose max-w-full flex-col">
                    <h3 className="h-11 text-white text-[40px] font-bold">Biomass Power Generation Program:</h3>
                    <p className="text-2xl text-zinc-400">
                    The Biomass Power Generation Program is a government initiative to promote the use of biomass to generate electricity. The program provides financial assistance to businesses that develop biomass power plants, and it also offers tax breaks.
                    </p>
                    <p className="text-2xl text-zinc-400">
The Biomass Power Generation Program is designed to help reduce the demand for fossil fuels in Thailand. The program is also expected to create jobs and boost the economy of Thailand.
                    </p>
                    </article>
                    <Image src={"/images/energy/energy5.png"} width={440} height={330}/>
                </div>

                <div className="justify-start items-center gap-14 inline-flex flex-1 px-24 pb-16">
                    <Image src={"/images/energy/energy6.png"} width={440} height={330}/>
                    <article className="prose max-w-full flex-col">
                    <h3 className="h-11 text-white text-[40px] font-bold">Wind Power Development Program:</h3>
                    <p className="text-2xl text-zinc-400">
                    The Wind Power Development Program is a government initiative to promote the use of wind power to generate electricity. The program provides financial assistance to businesses that develop wind power projects, and it also offers tax breaks.
                    </p>
                    <p className="text-2xl text-zinc-400">
The Wind Power Development Program is designed to help reduce the demand for fossil fuels in Thailand. The program is also expected to create jobs and boost the economy of Thailand.
                    </p>
                    </article>
                </div>
            </div>
        </Layout>
    )
}