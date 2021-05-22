let express = require('express');
let UserController = require('../controllers/user');

const router = express.Router();

router.route('/')
    .get(UserController.getUser); //搜尋使用者

router.route('/login')
    .get(UserController.getLogin); //找單一個使用者

// router.route('/search')
//     .get(UserController.getOneUser);

router.route('/add')
    .post(UserController.addUser); //註冊使用者

router.route('/del')
    .get(UserController.delUser); //刪除使用者

router.route('/userEdit/:email')
    .post(UserController.patchUser); //更新使用者資訊


//輸出
module.exports = router;