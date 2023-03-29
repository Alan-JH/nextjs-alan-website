import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleryNoClick} from '../../components/gallery-elements'
import {images} from '../../public/photography/cali22/list'

export function caliList(){
  return (
    <center>
      <h4><a href="./photos/cali22" className="button">California '22</a></h4>
      {galleryNoClick(images.splice(0, 4))}
    </center>
  );
}

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "California '22" headertextcolor = "white">
      <Head>
        <title>California '22</title>
      </Head>
      <br></br>

      Shots from my trip to SoCal in November '22

      {gallery(images)}

    </Layout>

  )
}

