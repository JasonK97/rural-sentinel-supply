import * as React from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";

import { PrintfulProduct } from "../types";

type IndexPageProps = {
  products: PrintfulProduct[];
};

const IndexPage: React.FC<IndexPageProps> = () => (
  <>
    <NextSeo
      title='Home | Rural Sentinel Supply'
      description='Safeguard the Herd. Defend the Tribe. Be the Father you were meant to be.'
      canonical='ruralsentinel.com/'
    />

    {/* <div className="w-full bg-center bg-cover bg-[url('/unsplash/abigail-loney-unsplash.jpg')]"> */}
    {/* <div className="w-full bg-center bg-cover bg-[url('/RSN01-xl.png')]"> */}
    <div className="w-full bg-center bg-cover bg-[url('/American-Flag-hatchet-full-color.png')]">
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
        <div className="text-center">
          <div className="container px-4 mx-auto">
            {/* <div className="max-w-4xl mx-auto text-center">
              <span className="text-gray-200 font-semibold uppercase tracking-widest">
                Rural Sentinel Supply
              </span>
              <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                Safeguard the Herd. Defend the Tribe.
              </h2>
              <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                Emergency Preparedness, Self-Defense, and the Second Amendment.
              </p>
              <Link href="/soft-goods">
                <a className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200">
                  View Soft Goods
                </a>
              </Link>
            </div> */}
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-gray-200 font-semibold uppercase tracking-widest">
                Rural Sentinel Supply
              </span>
              <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                4th of July Freedom.
              </h2>
              <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                Celebrate our Independence with the all new Freedom line.
              </p>
              <Link href="/soft-goods">
                <a className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200">
                  View Soft Goods
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default IndexPage;
