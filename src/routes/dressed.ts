import { Router } from 'express'
import { getDressed, getsDressed, postDressed, updateDressed, deletDressed } from '../controllers/dressed';

const router = Router();

router.get('/:id', getDressed);
router.get('/', getsDressed);
router.delete('/:id',deletDressed);
router.post('/:id', postDressed);
router.put('/:id', updateDressed);


export default router;