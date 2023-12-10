// import Circle_btn from "@/app/(components)/circle_btn/circle_btn";

import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Clinic_and_specialities_card from "../../(components)/Clinic_and_specialities_card/Clinic_and_specialities_card";

import web from "@/public/imgs/digital-services/Urology.jpg";
import graph from "@/public/imgs/digital-services/Neurology.jpg";
import mark from "@/public/imgs/digital-services/Cardiologist.jpg";

export default function clinic_and_specialities() {
  return (
    <>
      <section className="py-9 md:py-32">
        <div className="container mx-auto px-[5%] md:px-[10%]">
          <div className="text-center">
            <h3 className="text-lg text-[#2370C8] uppercase hover:underline underline-offset-4 transition-all inline cursor-default">
              Clinic and Specialities
            </h3>
          </div>

          <div className="grid sm:grid-cols-12 py-3 md:py-4">
            <div className="col-span-12 md:col-span-9 flex justify-center items-center md:ms-40 lg:ms-56 xl:ms-60">
              <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold">
                Lorem ipsum dolor sit amet,{" "}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <Clinic_and_specialities_card
              imgSrc={web}
              title="Urology"
              description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmodtempor
                    incididunt ut labore et dolore"
            />

            <Clinic_and_specialities_card
              imgSrc={graph}
              title="Neurology"
              description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmodtempor
                    incididunt ut labore et dolore"
            />

            <Clinic_and_specialities_card
              imgSrc={mark}
              title="Cardiologist"
              description="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmodtempor
                    incididunt ut labore et dolore"
            />
          </div>
        </div>
      </section>
    </>
  );
}
