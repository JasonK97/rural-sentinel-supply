import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import useWishlistState from "../hooks/useWishlistState";
import useSnipcartCount from "../hooks/useSnipcartCount";

const Layout = ({ children }) => {
  const { hasItems } = useWishlistState();
  const { cart } = useSnipcartCount();
  const cartHasItems = cart.items.count !== 0;
  const currYear = new Date().getFullYear();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="py-1">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="md:w-1/3">
              <nav className="bg-white border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                  <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isMobileMenuOpen ? "true" : "false"}
                    onClick={handleMobileMenuToggle}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div
                    className={`${
                      isMobileMenuOpen ? "block" : "hidden"
                    } w-full md:block md:w-auto absolute top-20 left-0 z-10 lg:ml-16`}
                    id="navbar-default"
                  >
                    <ul className="font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                      <li className="md:py-2 lg:py-0 md:w-full lg:w-12">
                        <Link href="/">
                          <a className="block text-gray-800 hover:text-slate-400 p-2 transition" onClick={handleMobileMenuToggle}>
                            <span className="block w-full">Home</span>
                          </a>
                        </Link>
                      </li>
                      <li className="md:py-2 lg:py-0 md:w-full lg:w-12">
                        <Link href="/about">
                          <a className="block text-gray-800 hover:text-slate-400 p-2 transition" onClick={handleMobileMenuToggle}>
                            <span className="block w-full">About</span>
                          </a>
                        </Link>
                      </li>
                      <li className="md:py-2 lg:py-0 md:w-full lg:w-12">
                        <Link href="/soft-goods">
                          <a className="block text-gray-800 hover:text-slate-400 p-2 transition" onClick={handleMobileMenuToggle}>
                            <span className="block w-full">Soft&nbsp;Goods</span>
                          </a>
                        </Link>
                      </li>
                      <li className="md:py-2 lg:py-0 md:w-full lg:w-12">
                        <Link href="/hard-goods">
                          <a className="block text-gray-800 hover:text-slate-400 lg:ml-10 p-2 transition" onClick={handleMobileMenuToggle}>
                            <span className="block w-full">Hard&nbsp;Goods</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <Link href="/">
                <a className="flex items-center text-gray-900">
                  <div className="rounded-full hover:opacity-50 transition w-13 h-13 flex items-center justify-center mr-4 pt-12 pb-6">
                    <Image 
                      src="/embroidered-hatchet.png" 
                      alt="Rural Sentinel Supply Logo"
                      height={75}
                      width={125}
                    />
                  </div>
                  {/* <span className="text-lg font-medium">
                    Rural Sentinel Supply
                  </span> */}
                </a>
              </Link>
            </div>
            <div className="md:w-1/3 flex items-center justify-end space-x-3 md:-mr-2.5 lg:-mr-12 lg:mt-8">
              {/* <button
                className="snipcart-customer-signin appearance-none px-2 text-gray-800 hover:text-slate-400 rounded-md cursor-pointer focus:outline-none focus:text-slate-400 transition relative"
                aria-label="User login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                </svg>
              </button> */}
              <Link href="/wishlist">
                <a
                  className="px-2 text-gray-800 hover:text-slate-400 rounded-md cursor-pointer focus:outline-none focus:text-slate-400 relative transition"
                  aria-label="Wishlist"
                >
                  {hasItems && (
                    <span className="absolute bg-red-500 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                  </svg>
                </a>
              </Link>
                {/* <button
                  className="snipcart-checkout appearance-none px-2 text-gray-800 hover:text-slate-400 rounded-md cursor-pointer focus:outline-none focus:text-slate-400 transition relative"
                  aria-label="Cart"
                >
                  {cartHasItems && (
                    <span className="absolute bg-blue-600 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
              </button> */}
            </div>
          </div>
        </div>
      </header>
      <main className="py-6">
        <div>{children}</div> {/*  className="max-w-6xl mx-auto px-6" */}
      </main>
      <footer className="max-w-6xl mx-auto px-6">
        <div className="py-6 border-t border-gray-100 text-center flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">
            &copy;{currYear}&nbsp;
            <a
              href="https://instagram.com/rural.sentinel/"
              title="Protect the Herd. Protect the Tribe. Always be prepared."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 text-gray-800 hover:text-slate-400"
            >
              Rural Sentinel Supply
            </a>
            , Powered by{" "}
            <a
              href="https://jasonkent.dev/"
              title="Software Developer"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 text-gray-800 hover:text-slate-400"
            >
              @JasonKent_
            </a>
          </p>
          <nav className="flex items-center justify-end space-x-3 md:space-x-6">
            {/* <Link href="/blog">
              <a className="text-gray-800 hover:text-slate-400 p-1 transition text-sm">
                Blog
              </a>
            </Link> */}
            <Link href="/terms-of-sale">
              <a className="text-gray-800 hover:text-slate-400 p-1 transition text-sm">
                Terms of Sale
              </a>
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Layout;
