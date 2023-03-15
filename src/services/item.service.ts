import ItemModel from '../models/item.model';
import { Car } from '../interfaces/car.interface';

const insertCar = async (item: Car) => {
  return await ItemModel.create(item);
};

const getCars = async () => {
  return await ItemModel.find({});
};

const getCar = async (id: string) => {
  return await ItemModel.findOne({ _id: id });
};

const updateCar = async (id: string, data: Car) => {
  try {
    return await ItemModel.findOneAndUpdate({ _id: id }, data, {
      new:true
    });
  } catch (e) {
    console.log(e);
  }
};

const deleteCar = async (id: string) => {
  return await ItemModel.findOneAndRemove({ _id: id });
};

export { insertCar, getCars, getCar, updateCar, deleteCar };