import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import gallery from '../../components/gallery-elements'

/*
src: gallery view photo
original: lightbox photo
width: integer
height: integer
caption: string caption
*/
export const images = [
  {
    src: "/photography/astro/DSC05298.JPG",
    original: "/photography/astro/DSC05298.JPG",
    width: 6000,
    height: 4000,
    caption: "Soligor Wide-Auto",
  },
  {
    src: "/photography/astro/DSC05299.JPG",
    original: "/photography/astro/DSC05299.JPG",
    width: 6000,
    height: 4000,
    caption: "Soligor Wide-Auto",
  },
  {
    src: "/photography/astro/DSC05301.JPG",
    original: "/photography/astro/DSC05301.JPG",
    width: 6000,
    height: 4000,
    caption: "Soligor Wide-Auto",
  },
  {
    src: "/photography/astro/DSC05303.JPG",
    original: "/photography/astro/DSC05303.JPG",
    width: 6000,
    height: 4000,
    caption: "Soligor Wide-Auto",
  },
  {
    src: "/photography/astro/DSC05306.JPG",
    original: "/photography/astro/DSC05306.JPG",
    width: 6000,
    height: 4000,
    caption: "Soligor Wide-Auto, under a street lamp",
  },
  {
    src: "/photography/astro/DSC05307.JPG",
    original: "/photography/astro/DSC05307.JPG",
    width: 6000,
    height: 4000,
    caption: "Sony 16-50mm Kit Lens",
  },
];

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>Alan's Astro Shots</title>
      </Head>
      <h3><center>
      <a href="/photos/walkaround" className="button" target="_blank">Walk Around</a>
      &nbsp;|&nbsp;
      <a href="/photos/plane-spotting" className="button" target="_blank">Plane Spotting!</a>
      &nbsp;|&nbsp;
      <a href="/photos/astro" className="button" target="_blank">Astro Photography</a>
      &nbsp;|&nbsp;
      <a href="/photos/film-rolls" className="button" target="_blank">Film Rolls</a>
      </center></h3>

      <h1>Astro Photography</h1>
      I have only attempted astro shots once, but I do want to try again whenever I have a chance to out West where the light pollution is better. My strategy so far has been to sit the camera on the ground, hit the shutter release (at 30 second shutter), and walk away...

      {gallery(images)}

      Last updated 8 November 2022

    </Layout>

  )
}

