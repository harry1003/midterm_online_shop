import express from 'express';
import Data from "../model/data"
const router = express.Router();

router.post("/putData", (req, res) => {
    let data = new Data();
    data.id = req.body["product_data"].id;
    data.name = req.body["product_data"].name;
    data.url = req.body["product_data"].url;
    data.img = req.body["product_data"].img;
    data.author = req.body["product_data"].author;
    data.price = req.body["product_data"].price;
    data.overview = req.body["product_data"].overview;
    data.category = req.body["product_data"].category;
    data.language = req.body["product_data"].language;
    data.year = req.body["product_data"].year;
    data.capacity = req.body["product_data"].capacity;
    data.save(
        err => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true });
        }
    );
    console.log(`save ${data.name}`);
});

router.post("/sendOrder", ((req, res)=> {
    console.log(req.body);
}));

// Get
router.get("/getData", (req, res) => {
    Data.find(
        (err, data) => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true, data: data });
        }
    );
});

// Delete
router.delete("/deleteData", (req, res) => {
    let name = req.body;
    Data.findOneAndDelete(name, err => {
        if (err) return res.send(err);
        return res.json({ success: true });
    });
});

export default router