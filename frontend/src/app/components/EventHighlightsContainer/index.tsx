"use client";
import React, { useState } from "react";
import HeaderText from "../HeaderText";
import GalleryItem from "./GalleryItem";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import VideoItem from "./VideoItem";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import GlitterButton from "../GlitterButton";

const EventHighlightsContainer: React.FC<{ data: any; isPage: boolean }> = ({
  data,
  isPage = false,
}) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0) as any;
  const [selectedVideo, setSelectedVideo] = useState(0) as any;
  const [open, setOpen] = useState(false);
  const mediaLength = isPage ? data?.galleryItems.data.length : 6;

  const openLightbox = (index: number) => {
    setLightboxIsOpen(true);
    setLightboxImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  const openVideoModal = (index: number) => {
    setOpen(true);
    console.log(index);
    setSelectedVideo(index);
  };
  const closeVideoModal = () => setOpen(false);

  return (
    <div className="container_inner">
      <section
        className={isPage ? "section_pages" : "section"}
        id={data?.dataScrollTo}
      >
        <HeaderText
          headerText={data?.headerText}
          headerDescription={data?.headerDescription}
        />
        <div className="gallery_grid">
          {data?.galleryItems &&
            data?.galleryItems.data
              .slice(0, mediaLength)
              .map((item: any, index: number) => (
                <GalleryItem
                  {...item}
                  key={index}
                  index={index}
                  openLightbox={openLightbox}
                />
              ))}
        </div>
        <div className="video_grid">
          {data?.videoItems &&
            data?.videoItems
              .slice(0, isPage ? 100 : 2)
              .map((item: any, index: number) => (
                <VideoItem
                  {...item}
                  key={index}
                  index={index}
                  openVideoModal={openVideoModal}
                />
              ))}
        </div>
        {!isPage && (
          <GlitterButton
            buttonText="See More"
            style={{
              width: "20%",
              margin: "auto",
              marginTop: "50px",
            }}
            iconUrl="/materialsymbolsarrowrightaltrounded1.svg"
            type="link"
            href="/event-highlights"
          />
        )}
      </section>
      {lightboxIsOpen && (
        <Lightbox
          mainSrc={
            process.env.NEXT_PUBLIC_STRAPI_API_URL +
            data?.galleryItems?.data[lightboxImageIndex]?.attributes.url
          }
          nextSrc={
            process.env.NEXT_PUBLIC_STRAPI_API_URL +
            data?.galleryItems?.data[(lightboxImageIndex + 1) % mediaLength]
              ?.attributes
          }
          prevSrc={
            process.env.NEXT_PUBLIC_STRAPI_API_URL +
            data?.galleryItems?.data[
              (lightboxImageIndex + mediaLength - 1) % mediaLength
            ]?.attributes.url
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setLightboxImageIndex(
              (lightboxImageIndex + mediaLength - 1) % mediaLength
            )
          }
          onMoveNextRequest={() =>
            setLightboxImageIndex((lightboxImageIndex + 1) % mediaLength)
          }
        />
      )}
      <Modal open={open} onClose={closeVideoModal} center>
        <iframe
          className="iframeBox"
          src={data.videoItems[selectedVideo].url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ border: "none" }}
        ></iframe>
      </Modal>
    </div>
  );
};

export default EventHighlightsContainer;
