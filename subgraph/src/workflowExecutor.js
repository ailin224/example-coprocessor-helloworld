import { createImagesAndVideosWorkflow } from "./serverWithBusinessLogic/workflows.js";

/**
 * Function to trigger a Temporal workflow
 */
export const createImagesAndVideosWorkflowExecutor = async () => {
  return await createImagesAndVideosWorkflow();
}
