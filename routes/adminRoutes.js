const express = require("express");
const multer = require("multer");

const {
  getPoll,
  isPostApproved,
  deletePoll,
} = require("../controllers/adminPollControllter");
const {
  registerController,
  loginController,
} = require("../controllers/userController");
const {
  createExamCategory,
  getExamCategories,
  deleteExamCategory,
  updateExamCategory,
  getAllSubCategories,
  findSubCategoriesByCategoryId,
  removeSubcategory,
  updateSubcategory,
  addSubcategory,
  getYearsBySubcategoryId,
  addYear,
  updateYear,
  removeYear,
  getAllSubcatYear,
  createSubject,
  getAllSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject,
  createTopic,
  getAllTopics,
  getTopicsBySubjectId,
  updateTopic,
  deleteTopic,
  getCategoriesWithSubcategories,
  getCategoriesWithSubcategoriesAndYears,
  createExamEntry,
  removeYearWithPaper,
  removeSubcategoryWithYearsAndPapers,
  getCategoriesWithSubcategoriesAndYearsAndQuestionPaper,
  getAllUsers,
} = require("../controllers/adminController");
const questionPaperController = require("../controllers/newQuestionPaperController");
const {
  getSubCategoryOfCategory,
} = require("../controllers/examSubCatController");
const { processPdf } = require("../controllers/pdfController");
const { appUpdate } = require("../controllers/appUpdateController");

const router = express.Router();

//Register
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

//Get All Polls
router.get("/polls", getPoll);

// Reject or Approve Poll
router.get("/polls/:postId", isPostApproved);

router.delete("/polls/:id", deletePoll);

//Question Paper Controller

router.post("/create-exam-entry", createExamEntry);

//Category
router.post("/create-cat", createExamCategory);
router.get("/getall-cat", getExamCategories);
router.delete("/delete-cat/:categoryId", deleteExamCategory);
router.put("/update-cat/:categoryId", updateExamCategory);

//Sub cat
router.get("/get-all-subcategories", getAllSubCategories);
router.get("/find-subcategories/:categoryId", findSubCategoriesByCategoryId);
// Route to remove an existing subcategory
router.delete(
  "/remove-subcategory/:categoryId/:subcategoryId",
  removeSubcategory
);

router.delete("/delete-year-with-paper/:yearId", removeYearWithPaper);
router.delete(
  "/delete-subcategory-with-paper",
  removeSubcategoryWithYearsAndPapers
);

// Route to update an existing subcategory
router.put("/update-subcategory/:categoryId/:subcategoryId", updateSubcategory);
// Route to add a new subcategory
router.post("/add-subcategory/:categoryId", addSubcategory);

//Year
router.get("/find-years/:categoryId/:subcategoryId", getYearsBySubcategoryId);
router.post("/add-year/:categoryId/:subcategoryId", addYear);
router.put("/update-year/:yearId", updateYear);
router.delete("/delete-year/:yearId", removeYear);

router.get("/getall-subcat-year", getAllSubcatYear);

router.post("/add-subject", createSubject);
router.get("/get-all-subjects", getAllSubjects);
router.get("/subjects/:id", getSubjectById);
router.put("/subjects/:id", updateSubject);
router.delete("/subjects/:id", deleteSubject);

// Topics routes
router.post("/add-topic", createTopic);
router.get("/get-all-topics", getAllTopics);
router.get("/get-topics/:subjectId", getTopicsBySubjectId);
router.put("/topics/:id", updateTopic);
router.delete("/delete-topic/:id", deleteTopic);

router.post("/create-question", questionPaperController.createQuestionPaper);

router.get("/categories-with-subcategories", getCategoriesWithSubcategories);
router.get(
  "/categories-with-subcategories-and-years",
  getCategoriesWithSubcategoriesAndYears
);

router.get(
  "/categories-with-subcategories-and-years-and-paper",
  getCategoriesWithSubcategoriesAndYearsAndQuestionPaper
);

router.get("/get-all-students", getAllUsers);

const upload = multer({ dest: "uploads/" });

router.post("/upload-pdf", upload.single("pdf"), processPdf);

// for app update
router.post("/app-update", appUpdate);

module.exports = router;
