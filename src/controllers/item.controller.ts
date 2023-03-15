import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handler';
import { insertCar, getCars, getCar, updateCar, deleteCar } from '../services/item.service';

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const selectedCar = await getCar(id);
    res.status(200).send(selectedCar ? selectedCar : 'NOT_FOUND');
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEM');
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const allItems = await getCars();
    res.status(200).send(allItems);
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS');
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const updatedItem = await updateCar(id, body);
    res.status(200).send(updatedItem);
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_ITEM');
  }
};

const addItem = async ({ body }: Request, res: Response) => {
  try {
    const newItem = await insertCar(body);
    res.status(200).send(newItem);
  } catch (e) {
    handleHttp(res, 'ERROR_ADD_ITEM');
  }
};

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const deletedItem = await deleteCar(id);
    res.status(200).send(deletedItem);
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_ITEM');
  }
};

export { getItem, getItems, updateItem, addItem, deleteItem };