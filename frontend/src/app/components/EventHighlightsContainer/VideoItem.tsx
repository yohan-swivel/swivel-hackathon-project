import React from "react";

const VideoItem = (props: any) => {
  return (
    <div className="video_box">
      <div
        className="video_box_content"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0,0,0,0.5)),url(${
            process.env.NEXT_PUBLIC_STRAPI_API_URL +
            props?.thumbnail?.data?.attributes?.url
          })`,
        }}
      >
        <div
          className="play_button"
          onClick={() => props.openVideoModal(props.index)}
        >
          <img alt="play" src="/play.svg" />
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
