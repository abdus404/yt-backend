import "dotenv/config";
import { app } from "./app.js";
import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`\n Server is running at PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection failed !! ", err);
  });
