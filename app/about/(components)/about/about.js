import Button from '@/app/(components)/button/button'
import Image from 'next/image'
import img from '@/public/imgs/about-us.jpg'
import Link from 'next/link'

export default function about() {
    return (
        <>
            <section className='pb-9 md:py-32'>
                <div className='container mx-auto px-[5%] md:px-[10%]'>

                    <div className='grid lg:grid-cols-2 gap-10'>

                        <div className='hidden md:block'>
                            <div className='flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700'>
                                <Image src={img} className='rounded-2xl' width={500} height={500} />
                            </div>
                        </div>

                        <div className='w-full sm:w-[75%] lg:w-full mx-auto'>

                            <div className='xl:p-5'>

                                <div className='flex justify-center md:justify-start'>
                                    <h3 className='text-[#2370C8] text-lg uppercase sm:text-start hover:underline underline-offset-4 inline transition-all cursor-default mt-2'>ABOUT US</h3>
                                </div>

                                <div>
                                    <p className='text-[#262A4E] font-bold text-xl py-5 sm:text-3xl md:text-4xl md:py-5 lg:text-2xl lg:py-2 xl:text-4xl xl:py-5'>Availabe Features in Our Clinic</p>
                                    <p className='text-xs sm:text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        <span className='block py-3'>
                                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                            sint occaecat cupidatat non proident,
                                        </span>
                                    </p>
                                </div>

                                <div className='text-center md:text-start'>
                                    <Link href='/about'>
                                    <Button btnTitle="Read More" style="bg-[#2370C8] hover:bg-sky-700 text-md text-white hover:translate-x-2 hover:scale-100 duration-500" />
                                    </Link>
                                </div>
                            </div>

                        </div>

                        <div className='block md:hidden'>
                            <div className='flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500'>
                                <Image src={img} className='rounded-2xl' width={500} height={500} />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
