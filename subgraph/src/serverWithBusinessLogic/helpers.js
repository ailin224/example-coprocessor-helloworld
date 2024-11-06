export const interleaveAssets = (images, videos) => {
    const interleavedAssets = [];

    // assuming we always have same number of images and videos
    for (let i = 0; i < images.length; i++) {
      interleavedAssets.push(images[i]);
      interleavedAssets.push(videos[i]);
    }
    return interleavedAssets;
  }
