import * as React from "react";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import shuffle from "lodash.shuffle";

import { printful } from "../lib/printful-client";
import { formatVariantName } from "../lib/format-variant-name";
import { PrintfulProduct } from "../types";

import ProductGrid from "../components/ProductGrid";

type SoftGoodsPageProps = {
  products: PrintfulProduct[];
};

const ProductsPage: React.FC<SoftGoodsPageProps> = ({ products }) => (
  <>
    <NextSeo
      title='Soft Goods | Rural Sentinel Supply'
      description='Clothing and accessories made print-to-order and shipped directly to your door.'
      canonical='ruralsentinel.com/soft-goods'
    />
    <div className="text-center pb-6 md:pb-12">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
        Soft Goods
      </h1>
    </div>

    <ProductGrid products={products} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const { result: productIds } = await printful.get("sync/products");

  const allProducts = await Promise.all(
    productIds.map(async ({ id }) => await printful.get(`sync/products/${id}`))
  );

  const products: PrintfulProduct[] = allProducts.map(
    ({ result: { sync_product, sync_variants } }) => ({
      ...sync_product,
      variants: sync_variants.map(({ name, ...variant }) => ({
        name: formatVariantName(name),
        ...variant,
      })),
    })
  );

  return {
    props: {
      products: shuffle(products),
    },
  };
};

export default ProductsPage;
