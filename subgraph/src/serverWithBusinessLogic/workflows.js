import { v4 as uuidv4 } from 'uuid';
import { interleaveAssets } from "./helpers.js";
import {
  createImages,
  createVideos,
} from "./createAssets.js";

/**
 * This function represents a Temporal workflow that runs multiple activities
 */
export const createImagesAndVideosWorkflow = async () => {
  const n = 5;
  const idForImages = [];
  const idForVideos = [];

  for (let i = 0; i < n; i++) {
    idForImages.push(uuidv4());
  }

  for (let i = 0; i < n; i++) {
    idForVideos.push(uuidv4());
  }

  // In the actual use case, createImages and createVideos are Temporal activities
  const images = await createImages(idForImages);
  const videos = await createVideos(idForVideos);

  return interleaveAssets(images, videos);
}
