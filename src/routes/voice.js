let express = require('express');
let VoiceController = require('../controllers/voice');

const router = express.Router();


router.route('/')
    .get(VoiceController.getVoice); //搜尋所有

router.route('/new')
    .post(VoiceController.addVoice); //新增voice

router.route('/del')
    .get(VoiceController.delVoice); //刪除voice

router.route('/search')
    .get(VoiceController.searchVoice); //以條件尋找voice

router.route('/userEdit/:vId')
    .post(VoiceController.patchVoice); //更新voice資訊

//輸出
module.exports = router;