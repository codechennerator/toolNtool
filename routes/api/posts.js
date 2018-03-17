const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/api/posts"
router.route("/")
  .get(postController.findAll)
  .post(postController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(postController.findById)
  .put(postController.update)
  .delete(postController.remove);

  // Matches with "/api/posts/:id"
router
  .route("/title/:title")
  .get(postController.findByTitle)


module.exports = router;
