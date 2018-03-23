const router = require("express").Router();
const googleRoutes = require("./google");

// Book routes
router.use("/", googleRoutes);

module.exports = router;
