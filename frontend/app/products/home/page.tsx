
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/product-card";

const ProductHome = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    
    <div className="flex flex-wrap justify-between">
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductHome;
