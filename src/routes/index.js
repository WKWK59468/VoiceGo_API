let express = require('express');
let user = require('./user');
let voice = require('./voice');
let tag = require('./tag');
let songlist = require('./songlist');
let belong = require('./belong'); //voice_tags


const router = express.Router();

router.use('/user', user);
router.use('/voice', voice);
router.use('/tag', tag);
router.use('/songlist', songlist);
router.use('/belong', belong);


//輸出
module.exports = router;