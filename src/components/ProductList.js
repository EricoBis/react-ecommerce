import ProductCard from "./ProductCard";
import { CardList } from "../style";
import React, {useState, useEffect} from "react";

function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect(()=> {
    fetch('./data/products.json', {
      headers:{
        Accept: "application/json"
      }
    }).then(res => res.json()).then(res => setProducts(res.data))
  }, []);

  return (
    <main>
      <CardList>
        {products.map((product, index) => {
          return (
            <ProductCard key={index}
              value={{
                id: product.id,
                imgUrl: product.imgUrl,
                title: product.title,
                price: product.price,
              }}
            />
          );
        })}
      </CardList>
    </main>
  );
}

export default ProductList;
