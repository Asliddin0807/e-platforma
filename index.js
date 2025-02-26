const fetchYouTubeMP4 = async (videoUrl) => {
  const apiUrl = `https://api.ytapi.com/get?url=${encodeURIComponent(
    videoUrl
  )}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
};

fetchYouTubeMP4("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
