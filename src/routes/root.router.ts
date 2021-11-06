//import and define express router
import Router from "express";
const router = Router();
//import controllers
const rootController = require('../controllers/root.controller');

//create routes
router.get('/', rootController.root);


module.exports = router;