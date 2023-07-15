import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleryNoClick} from '../../components/gallery-elements'
import {images} from '../../public/photography/sf23/list'

export function sfList(){
  return (
    <center>
      <h4><a href="./photos/sf23" className="button">SF '23</a></h4>
      {galleryNoClick(images.splice(0, 4))}
    </center>
  );
}

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "San Francisco '23" headertextcolor = "white">
      <Head>
        <title>SF '23</title>
      </Head>
      <br></br>

      Shots from my summer in San Francisco

      {gallery(images)}

    </Layout>

  )
}

