const {getDataUsers,getDataUserById,deleteDataUserById,postDataUser,putDataUser,getDataUserDetail,login,register} = require("../controller/UsersController")
const express = require('express');
const { Router } = require("express");
const router = express.Router()


router.get('/',getDataUsers)
router.get('/detail',getDataUserDetail)
router.get('/:id',getDataUserById)
router.delete('/:id',deleteDataUserById)
router.post('/',postDataUser)
router.post('/login',login)
router.post('/register',register)
router.put('/:id',putDataUser)



module.exports = router;