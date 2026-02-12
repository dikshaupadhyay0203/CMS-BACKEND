import dotenv from "dotenv";
import "dotenv/config";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

connectDB();

const server=Http2ServerRequest.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        Credentials: true,
    }
});

registerSocketHandlers(io);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});