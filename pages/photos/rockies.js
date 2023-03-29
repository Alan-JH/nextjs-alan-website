import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleryNoClick} from '../../components/gallery-elements'
import {images} from '../../public/photography/rockies/list'

export function rockiesList(){
  return (
    <center>
      <h4><a href="./photos/rockies" className="button">Rockies</a></h4>
      {galleryNoClick(images.splice(0, 4))}
    </center>
  );
}

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Rockies" headertextcolor = "white">
      <Head>
        <title>Rockies</title>
      </Head>
      <br></br>

      Shots from various trips in the Rocky Mountains

      {gallery(images)}

    </Layout>

  )
}

