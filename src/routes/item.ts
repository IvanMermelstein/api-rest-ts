import { Router } from 'express';
import { addItem, deleteItem, getItem, getItems, updateItem } from '../controllers/item.controller';

const router = Router();

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', addItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export { router };