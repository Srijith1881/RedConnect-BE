const express = require("express");
const cors = require("cors");
const dbConn = require("./config/db");
require("dotenv").config();
const bloodRoutes = require("./routes/blood.routes");
const userRoute = require("./routes/user.route");
const donarRoute = require("./routes/donar.routes")
const app = express();
app.use(express.json());

app.use(
  cors({
    // origin: ["https://blooddonar.vercel.app", "http://localhost:5173"],
    origin: ["https://red-connect-mu.vercel.app", "http://localhost:5173",
      "https://red-connect-fe.vercel.app"],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true,
  })
);

app.use("/api/v1/blood", bloodRoutes);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/donar", donarRoute);

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
