import { Router } from 'express'
import { deleteProduct, getProduct, getProducts, postProduct, updateProduct } from '../controllers/product';

// Se crea un instancia de router para poder definir las rutas
const router = Router();

//Rutas para obtener el producto
router.get('/:id', getProduct);
router.get('/', getProducts);
router.delete('/:id',deleteProduct);
router.post('/:id', postProduct);
router.put('/:id', updateProduct);


export default router;

