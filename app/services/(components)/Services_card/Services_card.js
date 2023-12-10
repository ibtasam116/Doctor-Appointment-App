import Image from 'next/image'

export default function Services_card(props) {
    return (
        <>
            <div className='card flex flex-col w-[75%] mx-auto md:w-full items-center py-5 hover:shadow-md transition-all'>
                <Image src={props.imgSrc} className='rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-700' width={100} height={100} />
                <h1 className="font-bold text-sm md:text-lg py-3">{props.title}</h1>
                <p className="px-3 sm:px-4 text-sm lg:text-md">{props.description}</p>
            </div>
        </>
    )
}





