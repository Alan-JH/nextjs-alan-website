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
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    original: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
];

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>Alan's Walk Around Shots</title>
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

      <h1>Walk-Around</h1>
      I often go on walks around my area with my Sony just to see what I can capture. There are spots that I have stopped to take photos half a dozen separate times, and I have to go farther and farther to see new things, but sometimes there are new sights in old places.

      {gallery(images)}

    </Layout>

  )
}

