import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleryNoClick} from '../../components/gallery-elements'
import {images} from '../../public/photography/dc/list'

export function dcList(){
  return (
    <center>
      <h4><a href="./photos/dc" className="button">D.C.</a></h4>
      {galleryNoClick(images.splice(0, 4))}
    </center>
  );
}

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "D.C. Street Photography" headertextcolor = "white">
      <Head>
        <title>D.C. Street Photography</title>
      </Head>
      <br></br>

      {gallery(images)}

    </Layout>

  )
}

