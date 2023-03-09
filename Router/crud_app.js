const express = require("express");
const router = express.Router();
const Data = require("../DB_Connection/data_model");

let message = "Success";
let error = "Error occured while performing a operation";

//get api which fetches all the title and description present in the database
router.get("/", (req, res) => {
  console.log("inside get api");

  let data = Data.find()
    .then((data) => {
      return res.status(200).json({
        message: message,
        data: data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        "message": err,
      });
    });
});

//post api which post the data to the database
router.post("/", async (req, res) => {
  if (!(req.body.title && req.body.description)) {
    res.status(504).json({
      message: error,
      data: req.body,
    });
  }
  let data = await Data({
    title: req.body.title,
    description: req.body.description,
    created_at: new Date(),
  });
  data
    .save()
    .then(() => {
      return res.status(200).json({
        message: message,
        data: req.body,
      });
    })
    .catch(() => {
      return res.status(500).json({
        message: error,
        data: req.body,
      });
    });
});


//PUT api is created which edits the data present in the database according to the givend data
router.put("/:id", async(req, res) => {
    console.log(req.params.id);
    let data=await Data.updateOne({"_id":req.params.id},{$set:{"title":req.body.title,"description":req.body.title,"updated_at":new Date()}})
    .then((data)=>{
        return res.status(200).json({
          message: "Updated successfully",
          data: data,
        });
    })
    .catch((err)=>{
        return res.status(500).json({
          "message": err,
        });
    })
});


//Delete api is created which takes the id and deletes the data from the database
router.delete("/:id", async(req, res) => {
    let data=await Data.deleteOne({"_id":req.params.id})
    .then((data)=>{
        return res.status(200).json({
          message: "Deleted successfully",
          data: data,
        });
    })
    .catch((err)=>{
        return res.status(500).json({
          "message": err,
        });
    })
 
});

module.exports = router;
