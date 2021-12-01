const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers").favorite;
const checkAuthorization = require("../controllers").checkAuthorization;

router.put(
  "/addBookToFavorites/:id",
  checkAuthorization,
  favoriteController.addBookToFavorites
);

router.put("/removeBookFromFavorites/:id", checkAuthorization, favoriteController.removeBookFromFavorites);

module.exports = router;
