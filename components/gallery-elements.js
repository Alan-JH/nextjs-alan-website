import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState } from "react";

export function gallery(images){
    const [index, setIndex] = useState(-1);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;

    const handleClick = (index, item) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

    return (
        <div>
            <center>
                <i>(Click to Enlarge)</i>
            </center>
        <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
        />
        {!!currentImage && (
            /* @ts-ignore */
            <Lightbox
            mainSrc={currentImage.original}
            imageTitle={currentImage.caption}
            mainSrcThumbnail={currentImage.src}
            nextSrc={nextImage.original}
            nextSrcThumbnail={nextImage.src}
            prevSrc={prevImage.original}
            prevSrcThumbnail={prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
            />
        )}
        </div>
    );
}

export function galleryNoClick(images){
    return (
        <div>
        <Gallery
            images={images}
            enableImageSelection={false}
        />
        </div>
    );
}

/*
src: gallery view photo
original: lightbox photo
width: integer
height: integer
caption: string caption
*/
export function image(dir, link, filename, w, h, descr){
    return {
        src: "/" + dir + "/" + filename,
        original: link,
        width: w,
        height: h,
        caption: descr,
      }
}