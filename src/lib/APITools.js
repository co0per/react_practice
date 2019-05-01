const result = 4;
export const APIkey = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA';
export const trendingURL = `https://www.googleapis.com/youtube/v3/videos?key=${APIkey}&part=snippet&maxResults=${result}&chart=mostPopular`

export function loadYoutubeApi() {
  let loadYT;

  if(!loadYT) {
    loadYT = new Promise((resolve) => {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => {resolve(window.YT)};
    })
  }

  return loadYT;
}