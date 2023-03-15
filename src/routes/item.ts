import { Request, Response, Router } from 'express';
import { addItem, deleteItem, getItem, getItems, updateItem } from '../controllers/item';

const router = Router();

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', addItem);
router.put('/', updateItem);
router.delete('/', deleteItem);

export { router };