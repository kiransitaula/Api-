import express from "express";

const app = express();

const PORT = 8000;

// middleware
app.use(express.json());

//api endpoints
import taskRouter from "./src/routers/taskRouter.js";
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "server running as normal",
  });
});

// server listening the port
app.listen(PORT, (error) => {
  error && console.log(error.message);

  console.log(`
  server running at http://localhost:${PORT}
  `);
});
