import { Router } from 'express'
import { 
    getDressed, 
    getsDressed, 
    postDressed, 
    updateDressed, 
    deletDressed 
} from '../controllers/dressed';

// Se crea un instancia de router para poder definir las rutas
const router = Router();

//Rutas para obtener vestido
router.get('/getDressed/:id', getDressed);
router.get('/getDressed', getsDressed);
router.delete('/getDressed/:id',deletDressed);
router.post('/getDressed/:id', postDressed);
router.put('/getDressed/:id', updateDressed);


export default router;