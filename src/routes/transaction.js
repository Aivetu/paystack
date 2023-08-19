const express = require ('express');
const router = express.Router();

const transactionController = require('../controllers/transactionController');


router.get('/list',transactionController.transactionList);
router.post('/initialize',transactionController.initializeTransaction);
router.get('/verify/:reference',transactionController.verifyTransaction)




module.exports = router;
