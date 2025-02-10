import { useNavigate } from 'react-router-dom';
import '../css/Product.css'

function Product({product}) {

  const {id, price, image, title} = product;

  const navigate = useNavigate();

  return (
    <div className='card'>
      <img className='image' src={image} alt="image" />
      <div>
        <p className='title-text'>{title.substring(0,60)}..</p>
        <h3 style={{ display:"flex", justifyContent:"flex-end", margin:"18px", marginRight:"20px"}}>{price}₺</h3>
      </div>
      <div className='flex-row'>
        <button className='detail-button' onClick={() => navigate("/product-details/" + id)} >Ürün Detay</button>
      </div>
    </div>
  )
}

export default Product