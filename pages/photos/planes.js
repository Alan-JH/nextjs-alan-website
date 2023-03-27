import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleryNoClick} from '../../components/gallery-elements'
import {images} from '../../public/photography/planes/list'

export function planesList(){
  return (
    <center>
      <h4><a href="./photos/planes" className="button">Plane Spotting</a></h4>
      {galleryNoClick(images.splice(0, 4))}
    </center>
  );
}

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Plane Shots" headertextcolor = "white">
      <Head>
        <title>Plane Shots</title>
      </Head>
      <br></br>

      I'm also counting UAV photos as plane spotting

      {gallery(images)}

    </Layout>

  )
}

