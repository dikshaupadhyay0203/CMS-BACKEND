import Artifact from "../models/artifact.js";

export const createArtifact = async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                success: false,
                message: "Title and content are required"
            });
        }

        const newArtifact = await Artifact.create({
            title,
            content,
            author: req.user.id
        });

        res.status(201).json({
            success: true,
            message: "Artifact created successfully",
            artifact: newArtifact
        });
    } catch (error) {
        res.status(400).json({
            success: false, 
            message: error.message
        });
    }
};

export const getArtifacts = async (req, res) => {
    try {
        const artifacts = await Artifact.find().populate("author", "name email");

        res.status(200).json({
            success: true,
            message: "Artifacts retrieved successfully",
            artifacts
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};