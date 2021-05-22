let express = require('express');
let reviewController = require('../controllers/review');

const router = express.Router();

router.route('/')
    .get(reviewController.getReview); //搜尋使用者

router.route('/search')
    .get(reviewController.getOneReview); //找單一個使用者

router.route('/add')
    .post(reviewController.addReview); //註冊使用者

router.route('/del')
    .get(reviewController.delReview); //刪除使用者

router.route('/edit//:email')
    .post(reviewController.patchReview); //更新使用者資訊


//輸出
module.exports = router;