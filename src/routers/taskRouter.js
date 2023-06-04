import express from "express";
const router = express.Router();

let fakeDb = [];

//Read data from database and return to the client
router.get("/", (req, res) => {
  res.json({
    message: "todo do Get methdo",
    data: fakeDb,
  });
});

//Receive data from client and Create new record into the database
router.post("/", (req, res) => {
  fakeDb.push(req.body);
  res.json({
    message: "New task has been added",
  });
});

//update record into the database based on the information received
router.put("/", (req, res) => {
  res.json({
    message: "todo do POST put",
  });
});

//deleted one or many records from the database based on the information received
router.delete("/", (req, res) => {
  const { _id } = req.body;
  console.log(_id);

  fakeDb = fakeDb.filter((item) => item._id !== _id);
  res.json({
    message: "the item has been deleted",
  });
});

export default router;
