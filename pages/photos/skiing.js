import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleryNoClick} from '../../components/gallery-elements'
import {images} from '../../public/photography/skiing/list'

export function skiingList(){
  return (
    <center>
      <h4><a href="./photos/skiing" className="button">Skiing</a></h4>
      {galleryNoClick(images.splice(0, 4))}
    </center>
  );
}

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Ski Photos" headertextcolor = "white">
      <Head>
        <title>Ski Photos</title>
      </Head>
      <br></br>

      Shots from ski trips, many with my Toma M900 since I didn't care about breaking it if I fell etc.

      {gallery(images)}

    </Layout>

  )
}

