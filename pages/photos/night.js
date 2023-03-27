import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleryNoClick} from '../../components/gallery-elements'
import {images} from '../../public/photography/night/list'

export function nightList(){
  return (
    <center>
      <h4><a href="./photos/macro" className="button">Night</a></h4>
      {galleryNoClick(images.splice(0, 4))}
    </center>
  );
}

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Night Photography" headertextcolor = "white">
      <Head>
        <title>Night Photography</title>
      </Head>
      <br></br>

      Low light, neon, long exposures

      {gallery(images)}

    </Layout>

  )
}

