"use client";

import { Rating } from "@mui/material";
import { useCallback, useState } from "react";
import { product } from "@/utils/product";
import SetColor from "./../../components/product/setColor";

interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
  price: number;
};

export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  console.log(cartProduct);
  

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return {...prev, selectedImg: value}
      })
    },
    []
  );
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>Images</div>
        <div>
          <h2 className=" text-3xl font-medium text-slate-700">
            {product.name}
          </h2>
          <div>
            <Rating value={productRating} readOnly />
          </div>
          <div>{product.reviews.length} reviews</div>
          <Horizontal />
          <div className="text-slate-700 text-justify">
            {product.description}
          </div>
          <Horizontal />
          <div>
            <span className=" font-semibold mr-2">CATEGORY:</span>
            {product.category}
          </div>
          <div>
            <span className=" font-semibold mr-2">BRAND:</span>
            {product.brand}
          </div>
          <div className={product.instock ? "text-teal-400" : "text-rose-400"}>
            {product.instock ? "IN STOCK" : "OUT OF STOCK"}
          </div>
          <Horizontal />
          <SetColor
            cartProduct={cartProduct}
            images={product.images}
            handleColorSelect={handleColorSelect}
          />
          <Horizontal />
          <div>Quality</div>
          <Horizontal />
          <div>Add to cart </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;