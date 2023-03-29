import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleryNoClick} from '../../components/gallery-elements'
import {images} from '../../public/photography/astro/list'

export function astroList(){
  return (
    <center>
      <h4><a href="./photos/astro" className="button">Astro</a></h4>
      {galleryNoClick(images.splice(0, 4))}
    </center>
  );
}

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Astro Photography" headertextcolor = "white">
      <Head>
        <title>Astro Photography</title>
      </Head>
      <br></br>

      My few attempts at astrophotography

      {gallery(images)}

    </Layout>

  )
}

