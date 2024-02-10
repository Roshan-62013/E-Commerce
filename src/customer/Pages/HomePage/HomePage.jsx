import React from "react";
import MainCrosel from "../../components/HomeCrosel/MainCrosel";
import HomeSectionCrosel from "../../components/HomeSectionCrosel/HomeSectionCrosel";
import { mens_kurta } from "../../../Data/mens_kurta";

const HomePage = () => {
  return (
    <div>
      <MainCrosel />

      <div className="space-y-10 py-20 flex flex-col  justify-center px-5 lg:px-10">
        <HomeSectionCrosel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCrosel data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomeSectionCrosel data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomeSectionCrosel data={mens_kurta} sectionName={"Women's Saree"} />
        <HomeSectionCrosel data={mens_kurta} sectionName={"Men's Dress"} />
      </div>
    </div>
  );
};

export default HomePage;
