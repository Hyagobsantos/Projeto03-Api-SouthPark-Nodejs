const router = require('express').Router();
const {home, listAll,listById} = require("./controller");


router.get("/home", home);

router.get("/animes", listAll);
router.get("/animes/:id", listById);


module.exports = router;