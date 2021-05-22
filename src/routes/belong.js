let express = require('express');
let belongController = require('../controllers/belong');

const router = express.Router();

router.route('/')
    .get(belongController.getBelong); //搜尋Tag關聯

router.route('/search')
    .get(belongController.getBelong); //找單一個Tag關聯

router.route('/add')
    .post(belongController.addBelong); //新增Tag關聯

router.route('/del')
    .get(belongController.delBelong); //刪除Tag關聯

router.route('/edit/vId/:vId/tName/:tName')
    .post(belongController.patchBelong); //更新Tag關聯

//輸出
module.exports = router;