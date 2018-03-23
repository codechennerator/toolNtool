const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// API Routes
router.use("/api", apiRoutes);


// If no API routes are hit, send the React app
<<<<<<< HEAD
// router.use("*",function(req, res) {
=======
// router.use(function(req, res) {
>>>>>>> 0c6f451caab3401a30e1c1da23264be693226198
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
