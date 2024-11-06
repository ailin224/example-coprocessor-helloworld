import { createImagesAndVideosWorkflowExecutor } from './workflowExecutor.js';

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World!";
    },
  },
  Mutation: {
    createImagesAndVideos: createImagesAndVideosWorkflowExecutor,
  },
  Asset: {
    __resolveType(obj) {
      if (obj.imageUrl) {
        return 'Image';
      }
      return 'Video';
    },
  },
};

export default resolvers;
