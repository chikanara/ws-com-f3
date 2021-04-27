import React from "react";

const Suggestion = () => {
  const urlList = [
    {
      src:
        "https://www.youtube.com/embed/Law7wfdg_ls?list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE",
      title: `React router dom - Dev Ed`,
    },
    {
      src: "https://www.youtube.com/embed/vjf774RKrLc",
      title: `Rest Api — Dev Ed`,
    },
    {
      src: `https://www.youtube.com/embed/zQRrXTSkvfw?list=RDCMUClb90NQQcskPUGDIXsQEz5Q`,
      title: `Learn Node JS — Dev Ed`,
    },
    {
      src:
        "https://www.youtube.com/embed/CVpUuw9XSjY?list=RDCMUClb90NQQcskPUGDIXsQEz5Q",
      title: `Learn Redux — Dev ED`,
    },
  ];
  return (
    <div>
      {urlList.map((video,index) => (
        <div key={index} className="col-md-3">
          <iframe
            
            src={video.src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3>{video.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Suggestion;
