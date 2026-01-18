
"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const ProductCard = ({ item }) => {
  const router = useRouter();

  return (
    <div
      // onClick={() => router.push()}
      className="cursor-pointer bg-white m-4 shadow-lg p-4 rounded w-[20%]"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-contain rounded"
      />
      <div className="pt-2">
        <h3 className="font-bold text-lg">{item.title}</h3>
        <div className="flex justify-between"><p className="text-pink-600">${item.price}</p>
        <Button className="bg-pink-600 hover:bg-pink-700" onClick={()=>router.push(`/products/${item.id}`)}>View Product</Button></div>
        
      </div>
    </div>
  );
};

export default ProductCard;
