import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState } from "react";

export function galleriesHeader(){
    return <h3><center>
    <a href="https://www.instagram.com/alanhsu.photos/" className="button" target="_blank">General (Instagram)</a>
    &nbsp;|&nbsp;
    <a href="/photos/uav" className="button">UAV Club</a>
    &nbsp;|&nbsp;
    <a href="/photos/plane-spotting" className="button">Plane Spotting!</a>
    &nbsp;|&nbsp;
    <a href="/photos/astro" className="button">Astro</a>
    &nbsp;|&nbsp;
    <a href="/photos/macro" className="button">Macro</a>
    &nbsp;|&nbsp;
    <a href="/photos/film-rolls" className="button">Film Rolls</a>
    &nbsp;|&nbsp;
    <a href="/photos/half-frame" className="button">Half Frame Film</a>
    </center></h3>
}

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