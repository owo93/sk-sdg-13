import Layout from "@/components/layout";
import { ImageCard } from "@/components/Card";
import Environment1 from "../../public/images/environment/environment1.png";
import Environment2 from "../../public/images/environment/environment2.png";
import Environment3 from "../../public/images/environment/environment3.png";
import Environment4 from "../../public/images/environment/environment4.png";

export default function Environment() {
  return (
    <Layout>
      <div className="-mt-20 bg-neutral-800">
        <div className="items-center py-10">
          <h1 className="pt-20 text-center text-7xl font-extrabold text-white">
            Creating a better enviroment
          </h1>
        </div>
        <ImageCard
          title={"Green Bangkok 2030 Project:"}
          body={
            "A citywide initiative to make Bangkok more sustainable and livable. The project was launched in 2015 by the Bangkok Metropolitan Administration (BMA) and the C40 Cities Climate Leadership Group.The Green Bangkok 2030 Project has three main goals:"
          }
          bullet={[
            "To reduce greenhouse gas emissions by 20% by 2030.",
            "To improve air quality by 15% by 2030.",
            "To increase the amount of green space in Bangkok by 50% by 2030.",
          ]}
          image={Environment1}
          varient={"text_left"}
        />

        <ImageCard
          title={"Tree for us:"}
          body={
            "Tree for Us is a Thai social enterprise that plants trees to help fight climate change. The company was founded in 2016 by a group of friends who were passionate about the environment. Tree for Us plants trees in partnership with local communities and businesses. The company also provides educational programs about the importance of trees. Tree for Us has planted over 100,000 trees since its inception. The company's trees have helped to absorb over 10,000 tons of carbon dioxide from the atmosphere. Tree for Us is also working to improve the livelihoods of local communities by providing them with jobs and training in sustainable forestry."
          }
          image={Environment2}
          varient={"text_right"}
        />

        <ImageCard
          title={"Green Cement:"}
          body={
            "SCG, a leading Thai conglomerate, has announced its commitment to achieve net-zero carbon emissions from cement and concrete by 2050. This is part of SCG's Circular Way initiative, which aims to create a more sustainable future for the construction industry. To achieve net-zero carbon emissions, SCG will focus on reducing emissions from its operations, developing low-carbon products, and investing in carbon offsetting projects. SCG will also work with its customers and partners to reduce the carbon footprint of the construction industry as a whole."
          }
          image={Environment3}
          varient={"text_left"}
        />

        <ImageCard
          title={"Thailand's involvement in COP26:"}
          body={
            "Thailand has committed to reducing its greenhouse gas emissions by 20% by 2030. At the COP26 meeting, Thailand announced a number of new initiatives to help achieve this goal, including:"
          }
          bullet={[
            "Investing in renewable energy",
            "Promoting energy efficiency",
            "Protecting forests",
            "Supporting climate-resilient agriculture",
          ]}
          image={Environment4}
          varient={"text_right"}
        />
      </div>
    </Layout>
  );
}
