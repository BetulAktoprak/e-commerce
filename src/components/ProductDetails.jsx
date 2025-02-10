import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { setSelectedProduct } from "../redux/slices/ProductSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import '../css/ProductDetails.css'

function ProductDetails() {
    const {id} = useParams();
    const {products, selectedProduct} = useSelector((store) => store.product);
    const {price, image, title, description} = selectedProduct;

    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prev) => prev +1);
    };

    const decrement = () => {
        setCount((prev) => prev - 1);
        if(count <= 0){
            setCount(0);
        }
    };

    useEffect(() => {
        getProductById();
    },[]);

    const getProductById = () => {
        products && products.map((product) => {
            if(product.id == id){
                dispatch(setSelectedProduct(product));
            }
        })
    }

  return (
    <div className="flex-row card-detail">
        <div>
            <img className="image-detail" src={image} />
        </div>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <h3 className="h3">{price} ₺</h3>
            <div className="plus-minus">
                <CiCirclePlus onClick={increment} className="icon" /> 
                <span className="span" >{count}</span>
                <CiCircleMinus onClick={decrement} className="icon" />
            </div>
            <div>
                <button className="button-detail">Sepete Ekle</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails