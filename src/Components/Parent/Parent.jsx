import { useState } from "react";
import { Child } from "../Child/Child";

export function Parent() {
  const [products, setProducts] = useState([
    { count: 10, id: 1, name: "Samsung", onSale: true, price: 15000 },
    { count: 20, id: 2, name: "Acer", onSale: false, price: 17000 },
    { count: 30 , id: 3, name: "Hp", onSale: false, price: 13000 },
    { count: 40, id: 4, name: "Lenovo", onSale: true, price: 19000 },
    { count: 50, id: 5, name: "Huawei", onSale: true, price: 19000 },
    { count: 60, id: 6, name: "Lg", onSale: false, price: 25000 },
  ]);


    function deleteProduct(id) {
        let newProducts = structuredClone(products)
        newProducts = newProducts.filter((product)=> product.id != id )
        setProducts(newProducts)
    }

    function updateProduct (index){
        let newProduct = structuredClone(products)
        newProduct[index].count++
        setProducts(newProduct)
    }
  return (
    <>
      <div className="container mx-[100px]">
        <div className=" flex flex-wrap py-4">
        {products.map((prodct,index) => (
            <Child prodctInfo={prodct} key ={prodct.id}  delete={deleteProduct} update ={updateProduct} index = {index}></Child>
          ))}
        </div>
      </div>
    </>
  );
}
