let express = require('express');
let reviewController = require('../controllers/review');

const router = express.Router();

router.route('/')
    .get(reviewController.getReview); //搜尋review

router.route('/search')
    .get(reviewController.getOneReview); //找單一個review

router.route('/add')
    .post(reviewController.addReview); //新增review

router.route('/del')
    .get(reviewController.delReview); //刪除review

router.route('/edit/email/:email/vId/:vId/date/:date')
    .post(reviewController.patchReview); //更新review


//輸出
module.exports = router;