const getImage = (id) => ({
    id,
    imageUrl: `https://www.example.com/${id}.jpg`,
});

const getVideo = (id) => ({
    id,
    videoUrl: `https://www.example.com/${id}.mp4`,
});

export const createImages = async (ids) => {
    const images = [];
    for (let i = 0; i < ids.length; i++) {
        images.push(getImage(ids[i]));
    }
    return images;
}

export const createVideos = async (ids) => {
    const videos = [];
    for (let i = 0; i < ids.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 500))
        videos.push(getVideo(ids[i]));
    }
    return videos;
}
