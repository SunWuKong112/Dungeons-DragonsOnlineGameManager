const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// /api/dnd/books/save
router.use("/api", apiRoutes);

module.exports = router;