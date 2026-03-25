import "dotenv/config";
import { app } from "./src/app.js";
import { connectDB } from "./src/common/config/db.js";

const PORT = process.env.PORT || 3000;

const start = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(
      `Server Started at ${PORT} and mode is ${process.env.NODE_ENV}`,
    );
  });
};

start().catch((err) => {
  console.log(`Server crashed`, err);
  process.exit(1);
});
