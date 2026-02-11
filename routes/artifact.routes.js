import express from "express";
import { createArtifact, getArtifacts} from "../controllers/artifact.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import authorizeRoles from "../middleware/role.middleware.js";
import { upload } from "../middleware/uploads.middleware.js";


const router = express.Router();

// TODO: Add artifact routes here

// router.post("/", authMiddleware, createArtifact);
router.get("/", authMiddleware, authorizeRoles("ADMIN"), getArtifacts);
router.post("/", authMiddleware, upload.single("file"), createArtifact);
export default router;
    