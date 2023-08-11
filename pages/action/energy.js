import { ImageCard } from "@/components/Card";
import Head from "next/head";
import Energy1 from "../../public/images/energy/energy1.png";
import Energy2 from "../../public/images/energy/energy2.png";
import Energy3 from "../../public/images/energy/energy3.png";
import Energy4 from "../../public/images/energy/energy4.png";
import Energy5 from "../../public/images/energy/energy5.png";
import Energy6 from "../../public/images/energy/energy6.png";
import Layout from "/pages/action/layout";

const energyData = [
  {
    title: "SCG Zero Burn: ",
    body: "SCG [the largest and oldest cement and building material company in Thailand] created a project that will help reduce agricultural burning in Thailand. The project involves collecting rice straw, sugarcane leaves, corncobs, and other agricultural waste to produce energy pellets. These pellets can then be used as an alternative fuel for large industrial factories, such as cement factories. The project has several benefits. First, it will help to reduce agricultural burning, which is a major source of air pollution in Thailand. Second, it will create jobs in the agricultural sector. Third, it will help to promote the use of renewable energy in Thailand.",
    image: Energy1,
    varient: "text_left",
  },
  {
    title: "Alternative Energy Development Plan (AEDP): ",
    body: "AEDP is a government plan to promote the use of renewable energy in Thailand. The plan aims to increase the share of renewable energy in Thailand's energy mix to 30% by 2037. AEDP identifies five main renewable energy sources: biomass, solar, wind, hydropower, and geothermal. The plan outlines a number of policies and measures to promote the development of these renewable energy sources. AEDP is a comprehensive plan that aims to make Thailand a leader in the use of renewable energy. The plan is expected to help Thailand reduce its reliance on fossil fuels and improve its environmental sustainability.",
    image: Energy2,
    varient: "text_right",
  },
  {
    title: "Feed-in Tariff (FiT) program:",
    body: "The FiT scheme is currently available for five renewable energy sources: biomass, solar, wind, hydropower, and geothermal. The FiT rate for each renewable energy source is determined by the Ministry of Energy of Thailand. The FiT scheme has been successful in promoting the development of renewable energy projects in Thailand. In the past few years, there has been a significant increase in the number of renewable energy projects that have been developed under the FiT scheme.",
    image: Energy3,
    varient: "text_left",
  },
  {
    title: "National Solar Rooftop Program:",
    body: "The National Solar Rooftop Program is a government initiative to promote the installation of solar panels on roofs of buildings in Thailand. The program provides financial assistance to homeowners and businesses who install solar panels, and it also offers tax breaks. The National Solar Rooftop Program is designed to help reduce the demand for electricity from the national grid. The program is also expected to create jobs and boost the economy of Thailand.",
    image: Energy4,
    varient: "text_right",
  },
  {
    title: "Biomass Power Generation Program:",
    body: "The Biomass Power Generation Program is a government initiative to promote the use of biomass to generate electricity. The program provides financial assistance to businesses that develop biomass power plants, and it also offers tax breaks. The Biomass Power Generation Program is designed to help reduce the demand for fossil fuels in Thailand. The program is also expected to create jobs and boost the economy of Thailand.",
    image: Energy5,
    varient: "text_left",
  },
  {
    title: "Wind Power Development Program:",
    body: "The Wind Power Development Program is a government initiative to promote the use of wind power to generate electricity. The program provides financial assistance to businesses that develop wind power projects, and it also offers tax breaks. The Wind Power Development Program is designed to help reduce the demand for fossil fuels in Thailand. The program is also expected to create jobs and boost the economy of Thailand.",
    image: Energy6,
    varient: "text_right",
  },
];

export default function Energy() {
  return (
    <Layout>
      <Head>
        <title>Energy</title>
      </Head>
      <div className="-mt-20">
        <div className="items-center py-10">
          <h1 className="pt-20 text-center text-5xl font-extrabold text-orange-500">
            Alternative Energy
          </h1>
          <hr className="mt-8" />
        </div>

        {energyData.map((data, index) => (
          <ImageCard
            key={index}
            title={data.title}
            body={data.body}
            image={data.image}
            varient={data.varient}
          />
        ))}
        <hr className="mt-8" />
      </div>
    </Layout>
  );
}
