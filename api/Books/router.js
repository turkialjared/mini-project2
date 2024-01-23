const express = require("express");
const router = express.Router();
const {
  AllBooks,
  GetOneBook,
  UpdateOneBook,
  DeleteOneBook,
  AddNewBook,
} = require("./Controller");
const Books = require("../../model/Books");
const upload = require("../../middlewares/multer");

router.param("_id", async (req, res, next, id) => {
  try {
    const book = await Books.findById(id);

    req.book = book;
    next();
  } catch (error) {
    next(error);
  }
});
router.get("/", AllBooks);
router.get("/:_id", GetOneBook);
router.post("/", upload.single("image"), AddNewBook);
router.put("/:_id", UpdateOneBook);
router.delete("/:_id", DeleteOneBook);

module.exports = router;
