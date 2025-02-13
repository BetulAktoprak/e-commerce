import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateBasket, removeProduct, setDrawer } from '../redux/slices/basketSlice';
import { useEffect } from 'react';

function Basket() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, [products])

  return (
    <Drawer anchor='right' sx={{
      '& .MuiDrawer-paper': { width: { xs: '80vw', sm: '50vw', md: '40vw' } }
    }} open={drawer} onClose={() => dispatch(setDrawer())}>
      <TableContainer component={Paper}>
        <Table sx={{ width: 600 }} aria-label="simple table">
          <TableBody>
            {
              totalAmount === 0 ? (
                <p>Sepetinizde ürün bulunmamaktadır..</p>
              ) : (
                <>
                  {products && products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <img src={product.image} width={50} height={50} alt={product.title} />
                      </TableCell>
                      <TableCell>{product.title}</TableCell>
                      <TableCell className='drawer-count'>{product.count} adet</TableCell>
                      <TableCell className='drawer-price'>{product.price} TL</TableCell>
                      <TableCell><button className='drawer-button' onClick={() => dispatch(removeProduct(product.id))}>Sil</button></TableCell>
                    </TableRow>
                  ))}
                </>
              )
            }

          </TableBody>

        </Table>
      </TableContainer>
      <div>
        <p className='totalPrice'>Toplam Tutar : {totalAmount.toFixed(2)} TL</p>
      </div>
    </Drawer>
  )
}

export default Basket