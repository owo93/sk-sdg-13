import { ImageCard } from "@/components/Card";
import Head from "next/head";
import Waste1 from "../../public/images/waste/waste1.png";
import Waste2 from "../../public/images/waste/waste2.png";
import Waste3 from "../../public/images/waste/waste3.png";
import Waste4 from "../../public/images/waste/waste4.png";
import Layout from "/pages/action/layout";

const wasteData = [
  {
    title: "Trash Lucky:",
    body: "Trash Lucky is a recycling program in Thailand that incentivizes people to recycle by giving them raffle tickets for prizes, such as gold or shopping vouchers. When people sort and donate their recyclables to Trash Lucky, they earn raffle tickets based on the amount of plastic, paper, glass, or metal they recycle. Trash Lucky then sells the recyclables to recyclers and uses part of the income to fund raffle prizes. Trash Lucky has been successful in engaging people in recycling. The company has recycled over 100 tons of waste and has given away over 1,000 prizes. Trash Lucky is also working with businesses and communities to promote recycling.",
    image: Waste1,
    varient: "text_left",
  },
  {
    title: "Green Bangkok 2030 Project:",
    body: "A citywide initiative to make Bangkok more sustainable and livable. The project was launched in 2015 by the Bangkok Metropolitan Administration (BMA) and the C40 Cities Climate Leadership Group. The Green Bangkok 2030 Project has three main goals:",
    bullet: [
      "To reduce greenhouse gas emissions by 20% by 2030.",
      "To improve air quality by 15% by 2030.",
      "To increase the amount of green space in Bangkok by 50% by 2030.",
    ],
    image: Waste2,
    varient: "text_right",
  },
  {
    title: "National Zero Waste Action Plan:",
    body: "The National Zero Waste Action Plan is a government initiative that aims to reduce waste in Thailand by 50% by 2030. The plan includes a number of measures, such as increasing recycling rates, reducing single-use plastics, and promoting composting. The NZWAP is a comprehensive plan that aims to address the root causes of waste in Thailand. The plan is ambitious, but it is achievable with the support of the government, businesses, and the public. NZWAP is a promising initiative that has the potential to make a significant impact on the environment and the quality of life in Thailand.",
    image: Waste3,
    varient: "text_left",
  },
  {
    title: "Pollution Control Department (PCD):",
    body: "The Pollution Control Department (PCD) is a government agency under the Ministry of Natural Resources and Environment (MONRE) of Thailand. The PCD is responsible for regulating air pollution, water pollution, and solid waste management in Thailand. The PCD is a key player in the government's efforts to reduce waste in Thailand. The PCD's programs and enforcement efforts are making a difference in reducing waste and raising awareness about the importance of sustainability.",
    image: Waste4,
    varient: "text_right",
  },
];

export default function Waste() {
  return (
    <Layout>
      <Head>
        <title>Waste Management</title>
      </Head>
      <div className="-mt-20">
        <div className="items-center py-10">
          <h1 className="pt-20 text-center text-5xl font-extrabold text-orange-500">
            Waste Management
          </h1>
          <hr className="mt-8" />
        </div>

        {wasteData.map((data, index) => (
          <ImageCard
            key={index}
            title={data.title}
            body={data.body}
            bullet={data.bullet}
            image={data.image}
            varient={data.varient}
          />
        ))}
        <hr className="mt-8" />
      </div>
    </Layout>
  );
}
