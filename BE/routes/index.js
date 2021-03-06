const express = require("express");
const router = express.Router();
const helmet = require("helmet");

const mainPage_userRouter = require("./mainPage");
const eventPage_userRouter = require("./eventPage");
const noticePage_userRouter = require("./noticePage");
const hospital_userRouter = require("./hospitalUser");
const service_notice = require("./serviceNotice");
const survey = require("./survey/survey");
const question = require("./survey/question");
const option = require("./survey/option");
const subjective_answer = require("./survey/subjective_answer");
const score_sum = require("./survey/score_sum");
const benchmark = require("./survey/benchmark");
const sendFile = require("./sendFile");

router.use(helmet());

router.use("/api", mainPage_userRouter);
router.use("/api", eventPage_userRouter);
router.use("/api", noticePage_userRouter);
router.use("/api", hospital_userRouter);
router.use("/api", service_notice);
router.use("/api", survey);
router.use("/api", question);
router.use("/api", option);
router.use("/api", subjective_answer);
router.use("/api", score_sum);
router.use("/api", benchmark);
router.use("/api", sendFile);

module.exports = router;
