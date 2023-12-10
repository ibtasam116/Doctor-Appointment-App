import Button from "@/app/(components)/button/button";
import Image from "next/image";

import img from "@/public/imgs/about-us2.png";
import Link from "next/link";

export default function Home_header() {
  return (
    <>
      <section className="pb-9 md:pt-20 bg-white">
        <div className="container mx-auto px-[5%] md:px-[10%]">
          <div className="grid md:grid-cols-2">
            <div className="md:hidden">
              <div className="flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700">
                <Image
                  src={img}
                  className="rounded-2xl"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="w-full sm:w-[75%] lg:w-full mx-auto flex flex-col justify-center ">
              <div>
                <h1 className="text-4xl sm:text-[50px] font-bold sm:leading-[60px] text-[#122E99]">
                  Your New Smile <br /> Starts From Here
                </h1>
              </div>

              <div>
                <p className="mt-5 text-sm sm:text-xl">
                  Lorem ipsum dolor sit adipisicing elit, <br /> Aspernatur
                  fuga.
                </p>
              </div>

              <Link href="/pages">
                <Button
                  btnTitle="Learn More"
                  style="bg-[#2370C8] hover:bg-sky-700 my-5 text-md text-white hover:translate-x-2 hover:scale-100 duration-500"
                />
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
                <Image
                  src={img}
                  className="rounded-2xl"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
