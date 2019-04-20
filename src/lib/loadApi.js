export class Video {
  constructor(id, title, description, img, date, owner) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.img = img;
    this.date = date;
    this.owner = owner;
  }

  get_date() {
    const yymmdd = this.date.split("-");
    return `${yymmdd[0]} ${yymmdd[1]} ${yymmdd[2].substring(0, 2)}`;
  }
}

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