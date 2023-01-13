import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../componets/atom/Card";
import "./Style.Product.css";

export default function Product() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const products = await axios.get("https://fakestoreapi.com/products");
    setproducts(products.data);
    console.log(products.data[0]);
  };

  return (
    <div>
      <div className="header">
        <h1>Simple Product Manager</h1>
      </div>

      <div className="fillter-area">
        <div>
          <select className="select-element">
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </div>
        <div>
          <button>ADD PRODUCT</button>
        </div>
      </div>

      <div className="product-area">
        {products.map((product, index) => {
          return (
            <Card
              key={index}
              title={product.title}
              subTitle={product.description}
              image={product.image}
            />
          );
        })}
      </div>
    </div>
  );
}
