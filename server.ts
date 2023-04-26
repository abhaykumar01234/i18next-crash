import type { Request, Response, NextFunction } from "express";
import express from "express";
import cors from "cors";
const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.method);
  console.log(req.path);
  next();
});
app.use(express.json());
app.use(cors({ origin: "http://127.0.0.1:5173" }));
app.use("/locales", express.static("locales"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
