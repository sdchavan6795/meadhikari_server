// const { Server } = require("socket.io");
// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const http = require("http");
// const server = http.createServer(app);
// const chatSocket = require("./Socket/chatSocket");

// const cors = require("cors");
// const dotenv = require("dotenv");
// const colors = require("colors");
// const morgan = require("morgan");
// const connectDB = require("./config/db");
// const cron = require("node-cron");
// const userModel = require("./models/userModel");

// const io = new Server(server, {
//   cors: {
//     origin: "*",
//   },
// });

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// //dotenv
// dotenv.config();

// //database connection
// connectDB();

// //Rest Object

// //middleware
// app.use(
//   cors({
//     origin: "*",
//   })
// );
// app.use(express.json());
// app.use(morgan("dev"));

// //routes
// // defalut route

// app.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Welcome to MeAdhikari.",
//   });
// });

// chatSocket(io);

// //custome route
// app.use("/api/v1/auth", require("./routes/userRoutes"));
// app.use("/api/v1/auth/coupons", require("./routes/couponRoutes"));
// app.use("/api/v1/admin/coupons", require("./routes/couponRoutes"));

// app.use("/api/v1/admin", require("./routes/adminRoutes"));
// app.use("/api/v1/auth/variable", require("./routes/constantsRoutes"));

// app.use("/api/v1/auth/policy", require("./routes/privacyPolicyRoute"));
// app.use("/api/v1/auth/deleteaccount", require("./routes/deletionRoutes"));

// app.use("/api/v1/admin", require("./routes/studentsTableBackedRoute"));
// app.use("/api/v1/admin/donation", require("./routes/donationRoutes"));
// app.use("/api/v1/auth/donation", require("./routes/donationRoutes"));

// app.use("/api/v1/auth/posts", require("./routes/postRoutes"));
// app.use("/api/v1/admin/posts", require("./routes/postRoutes"));

// app.use("/api/v1/auth/exam-categories", require("./routes/examCategoryRoutes")); //DONE
// app.use("/api/v1/auth/subcategories", require("./routes/subExamTypeRoutes")); // Done
// app.use("/api/v1/admin/subcategories", require("./routes/subExamTypeRoutes")); // Done

// app.use("/api/v1/auth/years", require("./routes/examYearRoutes")); // Done , for frontend
// app.use(
//   "/api/v1/auth/question-papers",
//   require("./routes/questionPaperRoutes")
// );
// app.use(
//   "/api/v1/admin/question-papers",
//   require("./routes/questionPaperRoutes")
// );

// app.use("/api/v1/auth/subjects", require("./routes/subjectRoutes")); // Include subject routes

// app.use("/api/v1/auth/groups", require("./routes/groupRoutes"));

// //leaderboard
// app.use("/api/v1/auth/leaderboard", require("./routes/leaderboardRoutes"));

// app.use("/api/v1/auth/customtest", require("./routes/customTestRoutes"));

// app.use("/api/v1/auth/papers", require("./routes/allPaperRoutes"));
// app.use("/api/v1/admin/papers", require("./routes/allPaperRoutes"));

// app.use("/api/v1/auth/feedback", require("./routes/feedbackRoutes"));
// app.use("/api/v1/admin/feedback", require("./routes/feedbackRoutes"));

// app.use("/api/v1/auth/abc", require("./routes/examDetailWithYearRoute"));

// app.use("/api/v1/auth/subscription", require("./routes/subscriptionRoutes"));

// const PORT = process.env.PORT || 8080;

// server.listen(PORT, () => {
//   console.log(`Server is Running ${PORT}`.bgGreen.white);
// });

const { Server } = require("socket.io");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http");
const server = http.createServer(app);
const chatSocket = require("./Socket/chatSocket");

const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

dotenv.config();
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(morgan("dev"));

// Default route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to MeAdhikari.",
  });
});

// Chat socket
chatSocket(io);

// Import and use consolidated routes
const routes = require("./routes"); // Single consolidated route file
app.use("/api/v1", routes);

// Server listener
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgGreen.white);
});
