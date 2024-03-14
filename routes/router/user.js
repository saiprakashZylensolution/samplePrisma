const express = require("express");
const router = express.Router();
const userController = require('../../controller/user')


router.post('/create',userController.createUser)
router.get('/getAll',userController.getAllUser)
router.put('/update/:id',userController.updateUser)
router.delete('/delete/:id',userController.deleteUser)

module.exports = router;
