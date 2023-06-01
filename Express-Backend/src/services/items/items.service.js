import { Items } from "../../models/items/items.model";
import * as fs from 'fs';
export const itemsService = {
  getAll: async (req, res) => {
    try {
      const items = await Items.find({});
      res.status(201).send(items);
    } catch (err) {
      res
        .status(500)
        .send({ message: err.message || "Some error while fetching data" });
    }
  },
  getById: async (req, res) => {
    try {
      const items = await Items.find({ _id: req.params.id });
      res.status(201).send(items);
    } catch (err) {
      res
        .status(500)
        .send({ message: err.message || "Some error while fetching data" });
    }
  },
  create: (req, res) => {
    // console.log(req.body)
    const path = "/home/fahad/Documents/inovativein portfolio/Foodo/Foodo-Frontend/public" + req.body.img
    const buffer = fs.readFileSync(path)
    

    const item = {
      name: req.body.name,
      serving: req.body.serving,
      price: req.body.price,
      description: req.body.description,
      img: buffer,
      rating: req.body.rating,
    };
    try {
      Items.create(item);
    } catch (e) {
      res.status(400).json({
        error: e,
      });
      return;
    }
    res.status(201).json({
      item: item,
    });
  },
  update: (req, res) => {
    res.status(201).json({
      result: "Item updated succesfully",
    });
  },
  delete:async (req, res) => {
        try {
                await Items.deleteOne({_id: req.params.id})
        } catch (error) {
                res.status(500).send({message: error.message || "Some internal error while deleting item"})
        }
    
        res.status(201).json({
      result: req.params.id + " item deleted",
    });
  },
};
