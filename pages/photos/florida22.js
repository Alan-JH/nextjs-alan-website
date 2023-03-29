import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleryNoClick} from '../../components/gallery-elements'
import {images} from '../../public/photography/florida22/list'

export function floridaList(){
  return (
    <center>
      <h4><a href="./photos/florida22" className="button">Florida '22</a></h4>
      {galleryNoClick(images.splice(0, 4))}
    </center>
  );
}

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Florida '22" headertextcolor = "white">
      <Head>
        <title>Florida '22</title>
      </Head>
      <br></br>

      Shots from my trip to Southern Florida in December '22

      {gallery(images)}

    </Layout>

  )
}

