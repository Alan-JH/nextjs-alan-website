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
];

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>Alan's Film Photos</title>
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

      <h1>Film Rolls</h1>
      I have yet to finish and develop my first roll, but I will post it here when that is done!

      {gallery(images)}

    </Layout>

  )
}

