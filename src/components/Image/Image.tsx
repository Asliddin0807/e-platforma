"use client";

import { IProducts } from "@/Interfaces/Product";

import Image from "next/image";
import { FC, useState } from "react";

interface Props {
  product: IProducts;
  fill?: boolean;
  width?: string;
  height?: string;
}

const CustomImage: FC<Props> = ({ product, fill, width, height }) => {
  const [isLoading, setIsloading] = useState(true);
  return (
    <>
      {fill ? (
        <Image
          src={product.image}
          alt={product.title}
          className="image"
          onLoad={() => setIsloading(false)}
          width={150}
          height={250}
          style={{
            width: width,
            height: height,
            objectFit: "fill",
            borderRadius: "20px",
          }}
        />
      ) : (
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={1000}
          onLoad={() => setIsloading(false)}
          style={{
            width: '100%',
            objectFit: "cover",
            height: "200px",
            borderTopLeftRadius: "6px",
            borderTopRightRadius: "6px",
            filter: isLoading ? "blur(10px)" : "blur(0px)",
            transition: "transform 0.5s ease, filter 0.5s ease",
            transform: isLoading
              ? "scale(1.1)"
              : "scale(1)" /* Увеличение изображения на 10% */,
          }}
        />
      )}
    </>
  );
};

export default CustomImage;
