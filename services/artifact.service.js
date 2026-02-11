import Artifact from "../models/artifact.js";
import cloudinary from "cloudinary";
import fs from "fs";
/**
 * Create a new artifact
 */
export const createArtifactService = async ({
  title,
  content,
  userId
}) => {
  if (!title || !content) {
    throw new Error("Title and content are required");
  }

  const artifact = await Artifact.create({
    title,
    content,
    author: userId
  });

  return artifact;
};

let mediaUrl = null
if(filePath){
    const uploadResult = await cloudinary.uploader.upload(filePath, {
        folder: "cms-artifacts"
    });
    mediaUrl = uploadResult.secure_url;

    fs.unlinkSync(filePath);
}
console.log("MEDIA URL BEFORE SAVE:", mediaUrl);

const artifact = await Artifact.create({
    title,
    content,
    author: userId,
    media: mediaUrl || null
});









export const getArtifactsService = async ({ userId, role }) => {
  if (role === "ADMIN") {
    // Admin sees everything
    return await Artifact.find().populate("author", "name email role");
  }

  // Non-admin sees only their own artifacts
  return await Artifact.find({ author: userId });
};