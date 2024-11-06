import { v4 as uuidv4 } from 'uuid';
import { interleaveAssets } from "./helpers.js";
import {
  createImages,
  createVideos,
  createVideosWithPlaceholder,
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
  // const videos = await createVideos(idForVideos);
  // createVideosWithPlaceholder is used for mutation with @defer
  const videosWithPlaceholder = await createVideosWithPlaceholder(idForVideos);

  // return interleaveAssets(images, videos);
  return interleaveAssets(images, videosWithPlaceholder);
}

/**
 * This function represents a Temporal workflow that runs multiple activities
 */
export const createVideosWorkflow = async (ids) => {
  return await createVideos(ids);
}
