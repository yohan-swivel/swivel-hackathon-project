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
import ReactPlayer from "react-player";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";

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
        {data.enableSeeMore ? (
          <GlitterButton
            buttonText="See More"
            style={{
              width: 144,
              margin: "auto",
              marginTop: "50px",
            }}
            iconUrl="/materialsymbolsarrowrightaltrounded1.svg"
            type="link"
            href="/event-highlights"
            fontSize={14}
          />
        ) : (
          <></>
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
          animationDisabled
        />
      )}
      <Modal
        open={open}
        onClose={closeVideoModal}
        center
        styles={{
          modal: {
            overflowX: "hidden",
            overflowY: "hidden",
            width: "50%",
            height: "60%",
          },
        }}
        closeIcon={
          <IconContext.Provider value={{ color: "white", size: "25px" }}>
            <AiOutlineClose />
          </IconContext.Provider>
        }
      >
        <ReactPlayer
          url={data.videoItems[selectedVideo].url}
          controls
          style={{
            margin: "auto",
            paddingTop: 30,
          }}
        />
      </Modal>
    </div>
  );
};

export default EventHighlightsContainer;
