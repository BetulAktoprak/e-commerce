import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../redux/slices/ProductSlice";
import Product from "./Product";

function ProductList() {

    const dispatch = useDispatch();
    const {products, search} = useSelector((store) => store.product);

    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
    
    useEffect(() => {
        dispatch(getAllProducts());
    },[])

  return (
    <div className="flex-row" style={{flexWrap:"wrap", marginTop:"25px"}}>
      {
        filteredProducts.length > 0 ? (
         filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))
        ) : (
          <p>Aradığınız ürün bulunamadı.</p>
        )
      }
    </div>
  )
}

export default ProductList