import * as React from "react";
import { GetStaticProps } from "next";
import shuffle from "lodash.shuffle";

import { printful } from "../lib/printful-client";
import { formatVariantName } from "../lib/format-variant-name";
import { PrintfulProduct } from "../types";

import ProductGrid from "../components/ProductGrid";

type IndexPageProps = {
  products: PrintfulProduct[];
};

const IndexPage: React.FC<IndexPageProps> = ({ products }) => (
  <>
    <div className="w-full bg-center bg-cover bg-[url('/unsplash/abigail-loney-unsplash.jpg')]">
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
        <div className="text-center">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-gray-200 font-semibold uppercase tracking-widest">
                Rural Sentinel Supply
              </span>
              <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                Protect the Herd. Protect the Tribe.
              </h2>
              <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                Emergency Preparedness. Self-Defense. Second Amendment. Hunting.
              </p>
              <a className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                href="/soft-goods">
                  View Soft Goods
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="text-center pb-6 md:pb-12">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
        All Products
      </h1>
    </div>

    <ProductGrid products={products} /> */}
  </>
);

// export const getStaticProps: GetStaticProps = async () => {
//   const { result: productIds } = await printful.get("sync/products");

//   const allProducts = await Promise.all(
//     productIds.map(async ({ id }) => await printful.get(`sync/products/${id}`))
//   );

//   const products: PrintfulProduct[] = allProducts.map(
//     ({ result: { sync_product, sync_variants } }) => ({
//       ...sync_product,
//       variants: sync_variants.map(({ name, ...variant }) => ({
//         name: formatVariantName(name),
//         ...variant,
//       })),
//     })
//   );

//   return {
//     props: {
//       products: shuffle(products),
//     },
//   };
// };

export default IndexPage;
