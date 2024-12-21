const express = require("express");
const router = express.Router();

// Import all route handlers
const userRoutes = require("./userRoutes");
const couponRoutes = require("./couponRoutes");
const adminRoutes = require("./adminRoutes");
const constantsRoutes = require("./constantsRoutes");
const privacyPolicyRoute = require("./privacyPolicyRoute");
const deletionRoutes = require("./deletionRoutes");
const studentsTableBackedRoute = require("./studentsTableBackedRoute");
const donationRoutes = require("./donationRoutes");
const postRoutes = require("./postRoutes");
const examCategoryRoutes = require("./examCategoryRoutes");
const subExamTypeRoutes = require("./subExamTypeRoutes");
const examYearRoutes = require("./examYearRoutes");
const questionPaperRoutes = require("./questionPaperRoutes");
const subjectRoutes = require("./subjectRoutes");
const groupRoutes = require("./groupRoutes");
const leaderboardRoutes = require("./leaderboardRoutes");
const customTestRoutes = require("./customTestRoutes");
const allPaperRoutes = require("./allPaperRoutes");
const feedbackRoutes = require("./feedbackRoutes");
const examDetailWithYearRoute = require("./examDetailWithYearRoute");
const subscriptionRoutes = require("./subscriptionRoutes");

// Define routes
router.use("/auth", userRoutes);
router.use("/auth/coupons", couponRoutes);
router.use("/admin/coupons", couponRoutes);

router.use("/admin", adminRoutes);
router.use("/auth/variable", constantsRoutes);

router.use("/auth/policy", privacyPolicyRoute);
router.use("/auth/deleteaccount", deletionRoutes);

router.use("/admin", studentsTableBackedRoute);
router.use("/admin/donation", donationRoutes);
router.use("/auth/donation", donationRoutes);

// router.use("/auth/posts", postRoutes);
// router.use("/admin/posts", postRoutes);

router.use("/auth/exam-categories", examCategoryRoutes);
router.use("/auth/subcategories", subExamTypeRoutes);
router.use("/admin/subcategories", subExamTypeRoutes);

router.use("/auth/years", examYearRoutes);
router.use("/auth/question-papers", questionPaperRoutes);
router.use("/admin/question-papers", questionPaperRoutes);

router.use("/auth/subjects", subjectRoutes);
// router.use("/auth/groups", groupRoutes);

// router.use("/auth/leaderboard", leaderboardRoutes);

router.use("/auth/customtest", customTestRoutes);

router.use("/auth/papers", allPaperRoutes);
router.use("/admin/papers", allPaperRoutes);

// router.use("/auth/feedback", feedbackRoutes);
// router.use("/admin/feedback", feedbackRoutes);

router.use("/auth/abc", examDetailWithYearRoute);

router.use("/auth/subscription", subscriptionRoutes);

module.exports = router;
