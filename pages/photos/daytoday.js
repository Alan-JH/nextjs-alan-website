import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleryNoClick} from '../../components/gallery-elements'
import {images} from '../../public/photography/daytoday/list'

export function daytodayList(){
  return (
    <center>
      <h4><a href="./photos/daytoday" className="button">Day-to-day</a></h4>
      {galleryNoClick(images.splice(0, 4))}
    </center>
  );
}

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Day-to-day Shots" headertextcolor = "white">
      <Head>
        <title>Day-to-day Shots</title>
      </Head>
      <br></br>

      Generally shots that I take at random times throughout the day or shooting walks, or just shots that don't fall into the other categories that I like.

      {gallery(images)}

    </Layout>

  )
}

