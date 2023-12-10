import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <nav class="bg-[#122E99] text-white dark:bg-gray-900 px-[5%] md:px-[10%]">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" class="flex items-center">
            <span class="uppercase text-xl sm:text-3xl font-bold hover:text-sky-500 transition-all delay-100">
              DOCTORS
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:text-sky-500 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="text-sm flex flex-col md:items-center p-4 md:p-0 rounded-lg bg-[#122E99] md:flex-row md:space-x-4 space-y-3 md:space-y-0 md:mt-0 md:border-0 md:bg-[#122E99] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="hover:text-sky-500 hover:underline transition-all delay-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-sky-500 hover:underline transition-all delay-100"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-sky-500 hover:underline transition-all delay-100"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-sky-500 hover:underline transition-all delay-100"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-sky-500 hover:underline transition-all delay-100"
                >
                Sign Up
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-sky-500 hover:underline transition-all delay-100 pe-0 lg:pe-7"
                >
                  login
                </Link>
              </li>
              <li>
                <form class="sm:hidden lg:inline-block">
                  <div class="relative">
                    <input
                      type="text"
                      id="voice-search"
                      class="bg-gray-50 border border-blue-00 text-[#122E99] text-sm rounded-[50px] focus:ring-blue-900 focus:border-blue-500 block w-full pl-4 p-2.5 placeholder-[#122E99] placeholder:bold  outline-none "
                      placeholder="Search"
                      required
                    />
                    <button
                      type="button"
                      class="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                      <FaSearch className="text-[#2370C8] hover:text-sky-500" />
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav class="max-h-[100vh] bg-[#122E99] text-white">

                <div class="container flex flex-wrap items-center justify-between mx-auto py-3 px-[5%] md:px-[10%]">

                    <div className="grid grid-cols-12">

                        <div className="col-span-12 md:col-span-1">
                            <div className="flex justify-between items-center">
                                <h3>
                                    <Link href="/" className="uppercase text-xl sm:text-3xl font-bold hover:text-sky-500 transition-all delay-100">Logo.</Link>
                                </h3>

                                <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white hover:text-sky-500 rounded-lg md:hidden " aria-controls="navbar-dropdown" aria-expanded="false">
                                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="md:col-span-11 lg:col-span-8">
                            <div class="hidden w-full md:block md:w-52 mx-auto" id="navbar-dropdown">
                                <ul class="flex flex-col md:items-end lg:justify-center text-sm md:text-xs uppercase md:flex-row space-y-56 md:space-y-0 mt-2 md:mt-3  md:space-x-8">
                                    <li><Link href="/" className="hover:text-sky-500 hover:underline transition-all delay-100">Home</Link></li>
                                    <li><Link href="/about" className="hover:text-sky-500 hover:underline transition-all delay-100">About</Link></li>
                                    <li><Link href="/pages" className="hover:text-sky-500 hover:underline transition-all delay-100">Pages</Link></li>
                                    <li><Link href="/services" className="hover:text-sky-500 hover:underline transition-all delay-100">Services</Link></li>
                                    <li><Link href="/portfolio" className="hover:text-sky-500 hover:underline transition-all delay-100">Portfolio</Link></li>
                                    <li><Link href="/blog" className="hover:text-sky-500 hover:underline transition-all delay-100">Blog</Link></li>
                                    <li><Link href="/contact" className="hover:text-sky-500 hover:underline transition-all delay-100">Contact</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-span-3 hidden lg:inline">
                            <div className="text-lg">
                                <form class="flex items-center">
                                    <div class="relative">
                                        <input type="text" id="voice-search" class="bg-gray-50 border border-blue-00 text-[#122E99] text-sm rounded-[50px] focus:ring-blue-900 focus:border-blue-500 block w-full pl-4 p-2.5 placeholder-[#122E99] placeholder:bold  outline-none " placeholder="Search" required />
                                        <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
                                            <FaSearch className="text-[#2370C8] hover:text-sky-500" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </nav> */}

      {/* <nav className="max-h-[100vh] bg-[#122E99] text-white">
                <div className="container mx-auto px-[5%] md:px-[10%] py-3">

                    <div className="grid grid-cols-12">

                        <div className="col-span-1">
                            <h3>
                                <Link href="/" className="uppercase text-xl sm:text-3xl font-bold hover:text-sky-500 transition-all delay-100">Logo.</Link>
                            </h3>

                        </div>

                        <div className="col-span-9 hidden lg:block">
                            <ul className="flex justify-around py-3 ms-32 me-20 text-xs uppercase ">
                                <li><Link href="/" className="hover:text-sky-500 hover:underline transition-all delay-100">Home</Link></li>
                                <li><Link href="/about" className="hover:text-sky-500 hover:underline transition-all delay-100">About</Link></li>
                                <li><Link href="/pages" className="hover:text-sky-500 hover:underline transition-all delay-100">Pages</Link></li>
                                <li><Link href="/services" className="hover:text-sky-500 hover:underline transition-all delay-100">Services</Link></li>
                                <li><Link href="/portfolio" className="hover:text-sky-500 hover:underline transition-all delay-100">Portfolio</Link></li>
                                <li><Link href="/blog" className="hover:text-sky-500 hover:underline transition-all delay-100">Blog</Link></li>
                                <li><Link href="/contact" className="hover:text-sky-500 hover:underline transition-all delay-100">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="col-span-2 hidden lg:block">
                            <form class="flex items-center">
                                <div class="relative w-full">
                                    <input type="text" id="voice-search" class="bg-gray-50 border border-blue-00 text-[#122E99] text-sm rounded-[50px] focus:ring-blue-900 focus:border-blue-500 block w-full pl-4 p-2.5 placeholder-[#122E99] placeholder:bold  outline-none " placeholder="Search" required />
                                    <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <FaSearch className="text-[#2370C8] hover:text-sky-500" />
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </nav> */}
    </>
  );
}
