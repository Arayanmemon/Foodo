import { ItemsModel } from "../../models/items/items.model";

export const itemsService = {
  getAll: async (req, res) => {
    try {
      const items = await ItemsModel.find({});
      res.status(201).send(items);
    } catch (err) {
      res
        .status(500)
        .send({ message: err.message || "Some error while fetching data" });
    }
  },
  getById: async (req, res) => {
    try {
      const items = await ItemsModel.find({ _id: req.params.id });
      res.status(201).send(items);
    } catch (err) {
      res
        .status(500)
        .send({ message: err.message || "Some error while fetching data" });
    }
  },
  create: (req, res) => {
    // console.log(req.body)
    const item = {
      name: req.body.name,
      serving: req.body.serving,
      price: req.body.price,
      description: req.body.description,
      img: req.body.img,
      rating: req.body.rating,
    };
    try {
      ItemsModel.create(item);
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
                await ItemsModel.deleteOne({_id: req.params.id})
        } catch (error) {
                res.status(500).send({message: error.message || "Some internal error while deleting item"})
        }
    
        res.status(201).json({
      result: req.params.id + " item deleted",
    });
  },
};
