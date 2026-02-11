import express from "express";
import { toggleLike, getLikeCount } from "../controllers/like.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/:id/like", authMiddleware, toggleLike);
router.get("/:id/likes", getLikeCount);

export default router;