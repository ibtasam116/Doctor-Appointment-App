import Image from "next/image";

export default function Clinic_and_specialities_card(props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[90%] sm:w-[60%] md:w-full mx-auto py-9 text-center border border-[#2370C8] hover:border-[#E5F3FE] hover:bg-[#E5F3FE] transition-all">
        <Image
          src={props.imgSrc}
          width={150}
          height={150}
          className="rounded-full"
        />
        <h1 className="font-bold text-sm py-3">{props.title}</h1>
        <p className="px-5 sm:px-1 text-sm">{props.description}</p>
      </div>
    </>
  );
}
