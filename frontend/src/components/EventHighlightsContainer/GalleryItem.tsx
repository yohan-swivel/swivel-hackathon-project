import React from "react";

const GalleryItem = (props: any) => {
  return (
    <>
      <div
        className="gallery_box"
        onClick={() => props.openLightbox(props.index)}
      >
        <img
          alt={props?.attributes?.alternativeText}
          src={process.env.NEXT_PUBLIC_STRAPI_API_URL + props?.attributes?.url}
        />
      </div>
    </>
  );
};

export default GalleryItem;
