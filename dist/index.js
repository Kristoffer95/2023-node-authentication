import express from 'express';
import dotenv from 'dotenv';
import userRoute from './api/v1/routes/user.routes.js';
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use("/api/v1", userRoute);
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map