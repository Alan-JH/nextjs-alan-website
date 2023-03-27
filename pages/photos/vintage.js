import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleryNoClick} from '../../components/gallery-elements'
import {images} from '../../public/photography/vintage/list'

export function vintageList(){
  return (
    <center>
      <h4><a href="./photos/vintage" className="button">Vintage</a></h4>
      {galleryNoClick(images.splice(0, 4))}
    </center>
  );
}

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Vintage Shots" headertextcolor = "white">
      <Head>
        <title>Vintage Shots</title>
      </Head>
      <br></br>

      vintage vibes, some with an actual 1930s camera

      {gallery(images)}

    </Layout>

  )
}

