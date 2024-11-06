import { createImagesAndVideosWorkflow } from "./serverWithBusinessLogic/workflows.js";
import { createVideosWorkflow } from "./serverWithBusinessLogic/workflows.js";

/**
 * Function to trigger a Temporal workflow
 */
export const createImagesAndVideosWorkflowExecutor = async () => {
  return await createImagesAndVideosWorkflow();
}

/**
 * Function to trigger a Temporal workflow
 */
export const createVideosWorkflowExecutor = async (ids) => {
  return await createVideosWorkflow(ids);
}
