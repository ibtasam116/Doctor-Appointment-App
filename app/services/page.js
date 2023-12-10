import Footer from "../(components)/footer/footer";
import Header from "../(components)/header/header";
import Services_card from "./(components)/Services_card/Services_card";
import Navbar from "../(components)/navbar/navbar";

import smart from "@/public/imgs/home-ideas/ICU.jpg";
import partner from "@/public/imgs/home-ideas/Patient-Ward.jpg";
import idea from "@/public/imgs/home-ideas/Test-Room.jpg";

export default function Page() {
  return (
    <>
      <Navbar />
      <Header header_title="services" />
      <section className="py-8  bg-[#F2F9FF]">
        <div className="text-center">
          <h3 className="text-lg text-[#2370C8] uppercase hover:underline underline-offset-4 transition-all inline cursor-default">
            Clinic and Specialities
          </h3>
        </div>

        <div className="py-3 md:py-4 text-center">
          <div className="col-span-12 md:col-span-9 flex justify-center items-center">
            <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold">
              Lorem ipsum dolor sit amet,
            </p>
          </div>
        </div>

        <div className="container mx-auto px-[5%] md:px-[10%]">
          <div className="grid sm:grid-cols-3 gap-3 py-3 px-1 text-center border-4 border-[#FFF]">
            <Services_card
              imgSrc={smart}
              title="ICU"
              description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore"
            />

            <Services_card
              imgSrc={partner}
              title="Patient Ward"
              description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore"
            />

            <Services_card
              imgSrc={idea}
              title="Test Room"
              description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
