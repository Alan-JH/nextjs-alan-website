import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleryNoClick} from '../../components/gallery-elements'
import {images} from '../../public/photography/macro/list'

export function macroList(){
  return (
    <center>
      <h4><a href="./photos/macro" className="button">Macro</a></h4>
      {galleryNoClick(images.splice(0, 4))}
    </center>
  );
}

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Macro Photography" headertextcolor = "white">
      <Head>
        <title>Macro Photography</title>
      </Head>
      <br></br>

      Using a 20-30mm adapter to take high magnification images

      {gallery(images)}

    </Layout>

  )
}

