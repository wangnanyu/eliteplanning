/**
 * @description  主路由
 */
const express = require('express');
const router = express.Router();
const pageController = require('../controller/page');
const movieController = require('../controller/movie');

router.get(/\/movie\/hot\//, movieController.hot);
router.get(/\/movie\/cinema\//, movieController.cinema);
router.get(/\/movie\/info\//, movieController.info);
router.get(/\/movie\/evaluation\//, movieController.evaluation);
router.get(/\/movie\/coming\//, movieController.coming);
router.get(/\/movie\/coming\/[\w\W]*/, movieController.comingLimit);
router.get('/movie/swiper', movieController.swiper);
router.get('/movie/city', movieController.city);
router.get('/movie/cinema_detail', movieController.cinema_detail);

// 主页面
// router.get('/app', pageController.index);
module.exports = router;