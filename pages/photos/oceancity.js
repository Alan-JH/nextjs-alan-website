import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleryNoClick} from '../../components/gallery-elements'
import {images} from '../../public/photography/oceancity/list'

export function ocList(){
  return (
    <center>
      <h4><a href="./photos/oceancity" className="button">Ocean City</a></h4>
      {galleryNoClick(images.splice(0, 4))}
    </center>
  );
}

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Ocean City" headertextcolor = "white">
      <Head>
        <title>Ocean City</title>
      </Head>
      <br></br>

      Shots from my trip to Ocean City in May '23

      {gallery(images)}

    </Layout>

  )
}

