const express = require('express');
const {createList,getList,updateList,deleteList} = require('../controllers/controllers')

const router = express.Router();

router.get('/get',getList)
router.post('/create',createList)
router.put('/update',updateList)
router.post('/delete',deleteList)

module.exports = router