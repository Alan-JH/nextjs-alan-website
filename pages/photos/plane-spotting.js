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
        <title>Alan's Plane Shots</title>
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

      <h1>Plane Spotting</h1>
      I sometimes go to Gravelly Point to do plane spotting by Reagan National, and I have also gone near Dulles. I make it a point to bring my telephoto with me on trips in case of spotting opportunities. It's a whole 'nother type of photography, fast paced and fun!

      {gallery(images)}

    </Layout>

  )
}

