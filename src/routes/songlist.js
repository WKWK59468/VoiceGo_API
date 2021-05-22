let express = require('express');
let sListController = require('../controllers/songlist');

const router = express.Router();

router.route('/')
    .get(sListController.getList); //搜尋歌單

router.route('/search')
    .get(sListController.getOneList); //找單一個歌單

router.route('/add')
    .post(sListController.addList); //新增歌單

router.route('/del')
    .get(sListController.delList); //刪除歌單

router.route('/edit/sName/:sName')
    .post(sListController.patchList); //更新歌單


//輸出
module.exports = router;