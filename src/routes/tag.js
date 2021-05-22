let express = require('express');
let tagController = require('../controllers/tag');

const router = express.Router();

router.route('/')
    .get(tagController.getTag); //搜尋標籤

router.route('/add')
    .post(tagController.addTag); //新增標籤

router.route('/del')
    .get(tagController.delTag); //刪除標籤

router.route('/edit/:tName')
    .post(tagController.patchTag); //更新標籤名稱

module.exports = router;