const express=require('express');
const router=express.Router();

// const gettopcourses=require('../controllers/CourseController');

const { createCourse ,showAllCourses,showMycourses,showCourseContent} = require('../controllers/Course');

// router.get('/alltopcourses',gettopcourses);
// router.post('/createCourse',postCourse);
router.get('/alltopcourses',showAllCourses);
router.post('/createCourse',createCourse)
router.get('/showMycourses',showMycourses);
router.post('/showCourseContent',showCourseContent);

module.exports=router;