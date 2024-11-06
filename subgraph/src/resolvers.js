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
  Video: {
    async __resolveReference(videoRepresentation, { videoDataloader }) {
      return await videoDataloader.load(videoRepresentation.id);
    },
  },
};

export default resolvers;
