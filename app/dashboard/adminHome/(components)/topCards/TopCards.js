import React from "react";
import trendImg from "../../../assets/svg/bx_trending-up.svg";
import Card from "../card/Card";

const cardData = [
  {
    title: "Patients",
    percent: "10.0%",
    trendImg: trendImg,
    perCss: "text-_green bg-_bgGreen",
    total: "856",
    desi: "Active",
  },
  {
    title: "Appointments",
    percent: "22.0%",
    trendImg: trendImg,
    perCss: "text-_green bg-_bgGreen",
    total: "3,342",
    desi: "Active",
  },
  {
    title: "Doctors",
    percent: "12.0%",
    trendImg: trendImg,
    perCss: "text-_green bg-_bgGreen",
    total: "77",
    desi: "Active",
  },
];

export default function TopCards() {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-0 md:ml-10">
      {cardData.map((item, i) => {
        return (
          <Card
            // key={i}
            cardCss={item.cardCss}
            title={item.title}
            percent={item.percent}
            trendImg={item.trendImg}
            perCss={item.perCss}
            total={item.total}
            desi={item.desi}
          />
        );
      })}
    </div>
  );
}
